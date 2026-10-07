import fs from "node:fs";
import vm from "node:vm";

const required=[
  "index.html","style.css","app.js","questions.js","supabase-config.js",
  "sobre.html","privacidade.html","termos.html","robots.txt","sitemap.xml"
];
for(const file of required){
  if(!fs.existsSync(file))throw new Error("Missing required file: "+file);
}

const sandbox={window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync("questions.js","utf8"),sandbox);
const roles=sandbox.window.FALAPRO_ROLES;
const banks=sandbox.window.FALAPRO_QUESTIONS;

if(!Array.isArray(roles)||roles.length<6)throw new Error("Expected at least 6 target roles.");
for(const key of ["common","frontend","software","qa","support"]){
  if(!Array.isArray(banks[key])||banks[key].length<4)throw new Error("Question bank too small: "+key);
}
const ids=new Set();
for(const bank of Object.values(banks)){
  for(const question of bank){
    if(!question.id||!question.pt||!question.en||!question.tipPt||!question.tipEn)throw new Error("Invalid question row.");
    if(ids.has(question.id))throw new Error("Duplicate question id: "+question.id);
    ids.add(question.id);
  }
}

const html=fs.readFileSync("index.html","utf8");
for(const marker of ['id="setup-form"','id="interview"','id="feedback"','id="account-dialog"','src="questions.js"','src="app.js"']){
  if(!html.includes(marker))throw new Error("Missing index invariant: "+marker);
}

const config=fs.readFileSync("supabase-config.js","utf8");
if(config.includes("service_role")||config.includes("sb_secret_"))throw new Error("Administrative Supabase key must never be in the frontend.");

console.log("FalaPro static QA passed with "+ids.size+" interview questions.");
