const LOCAL_KEY="falapro:sessions:v1";
const UI_LANGUAGE_KEY="falapro:ui-language";
const supabaseClient=window.FALAPRO_SUPABASE?.client||null;

const I18N={
  "pt-BR":{
    localMode:"Modo local",cloudMode:"Sincronizado",account:"Entrar / sincronizar",
    eyebrow:"CARREIRA · ENTREVISTA",heroTitle:'Treine a resposta. <span>Não decore um personagem.</span>',
    heroText:"Pratique perguntas de entrevista por cargo, responda por texto ou voz e use um checklist simples para tornar sua resposta mais clara, específica e convincente.",
    method:"MÉTODO",starSituation:"Situação",starTask:"Tarefa",starAction:"Ação",starResult:"Resultado",
    step1:"1 · PREPARAR",setupTitle:"Monte sua simulação",targetRole:"Cargo-alvo",level:"Nível",
    intern:"Estágio",junior:"Júnior",intermediate:"Intermediário",interviewLanguage:"Idioma da entrevista",
    questionCount:"Quantidade",start:"Começar simulação",historyEyebrow:"PROGRESSO",historyTitle:"Últimos treinos",
    seeAll:"Ver todos",yourAnswer:"Sua resposta",voice:"🎙️ Responder por voz",voiceStop:"⏹️ Parar voz",
    answerPlaceholder:"Escreva como você responderia em uma entrevista real…",characters:"caracteres",
    selfReview:"AUTOAVALIAÇÃO",starCheck:"Sua resposta tem STAR?",checkSituation:"Contexto/situação ficou claro",
    checkTask:"Expliquei minha responsabilidade",checkAction:"Detalhei o que eu fiz",checkResult:"Mostrei resultado/aprendizado",
    confidence:"Confiança na resposta",quit:"Encerrar",reviewAnswer:"Revisar resposta",structuredFeedback:"FEEDBACK ESTRUTURADO",
    edit:"Editar resposta",next:"Próxima pergunta",finish:"Finalizar simulação",ad:"PUBLICIDADE",
    adNote:"espaço reservado · fora do treino",disclaimer:"Treino estruturado; não garante aprovação em processos seletivos.",
    about:"Sobre",privacy:"Privacidade",terms:"Termos",cloud:"SINCRONIZAÇÃO",accountTitle:"Sua conta",password:"Senha",
    createAccount:"Criar conta",signIn:"Entrar",signOut:"Sair",historyAll:"Histórico de treinos",
    noHistory:"Ainda não há treinos salvos.",questions:"perguntas",score:"média",inProgress:"em andamento",completed:"concluído",
    answerTooShort:"Escreva um pouco mais antes de revisar a resposta.",sessionFinished:"Simulação concluída e salva.",
    sessionQuit:"Simulação encerrada.",voiceUnsupported:"Reconhecimento de voz não está disponível neste navegador.",
    voiceListening:"Ouvindo… fale sua resposta.",authInvalid:"Confira e-mail e senha.",authCreated:"Conta criada. Se necessário, confirme seu e-mail.",
    authSignedIn:"Conta conectada.",authSignedOut:"Você saiu da conta.",cloudError:"A nuvem está indisponível; seus dados locais foram preservados.",
    strongTitle:"Resposta forte e específica",goodTitle:"Boa base; refine os detalhes",improveTitle:"Estruture melhor antes da entrevista",
    feedbackLengthGood:"A resposta tem contexto suficiente para ser entendida.",
    feedbackLengthShort:"Adicione contexto suficiente para o recrutador entender o problema e sua participação.",
    feedbackStarGood:"A estrutura STAR está bem coberta.",
    feedbackStarMissing:"Complete mais etapas do STAR, principalmente ação e resultado.",
    feedbackSpecificGood:"Você trouxe detalhes concretos ou números.",
    feedbackSpecificMissing:"Inclua um detalhe verificável: prazo, volume, métrica, ferramenta ou consequência.",
    feedbackOwnershipGood:"Ficou claro o que você fez pessoalmente.",
    feedbackOwnershipMissing:"Troque frases genéricas por ações suas: “eu analisei”, “eu implementei”, “eu validei”.",
    feedbackResultGood:"A resposta termina mostrando resultado ou aprendizado.",
    feedbackResultMissing:"Feche com o que mudou depois da sua ação: resultado, impacto ou aprendizado.",
    feedbackConfidence:"Sua confiança marcada foi {value}/5. Use isso para comparar evolução, não como nota de qualidade.",
    cloudImport:"Histórico da conta sincronizado.",syncing:"Sincronizando…"
  },
  en:{
    localMode:"Local mode",cloudMode:"Synced",account:"Sign in / sync",
    eyebrow:"CAREER · INTERVIEW",heroTitle:'Practice the answer. <span>Do not memorize a character.</span>',
    heroText:"Practice interview questions by role, answer by text or voice, and use a simple checklist to make your response clearer, more specific and more convincing.",
    method:"METHOD",starSituation:"Situation",starTask:"Task",starAction:"Action",starResult:"Result",
    step1:"1 · PREPARE",setupTitle:"Build your simulation",targetRole:"Target role",level:"Level",
    intern:"Internship",junior:"Junior",intermediate:"Intermediate",interviewLanguage:"Interview language",
    questionCount:"Questions",start:"Start simulation",historyEyebrow:"PROGRESS",historyTitle:"Recent practice",
    seeAll:"See all",yourAnswer:"Your answer",voice:"🎙️ Answer by voice",voiceStop:"⏹️ Stop voice",
    answerPlaceholder:"Write what you would say in a real interview…",characters:"characters",
    selfReview:"SELF REVIEW",starCheck:"Does your answer cover STAR?",checkSituation:"The situation/context is clear",
    checkTask:"I explained my responsibility",checkAction:"I detailed what I did",checkResult:"I showed a result/lesson",
    confidence:"Confidence in this answer",quit:"End session",reviewAnswer:"Review answer",structuredFeedback:"STRUCTURED FEEDBACK",
    edit:"Edit answer",next:"Next question",finish:"Finish simulation",ad:"ADVERTISEMENT",
    adNote:"reserved space · outside practice",disclaimer:"Structured practice; it does not guarantee hiring outcomes.",
    about:"About",privacy:"Privacy",terms:"Terms",cloud:"SYNC",accountTitle:"Your account",password:"Password",
    createAccount:"Create account",signIn:"Sign in",signOut:"Sign out",historyAll:"Practice history",
    noHistory:"No saved practice yet.",questions:"questions",score:"average",inProgress:"in progress",completed:"completed",
    answerTooShort:"Write a little more before reviewing the answer.",sessionFinished:"Simulation completed and saved.",
    sessionQuit:"Simulation ended.",voiceUnsupported:"Speech recognition is not available in this browser.",
    voiceListening:"Listening… speak your answer.",authInvalid:"Check your email and password.",authCreated:"Account created. Confirm your email if required.",
    authSignedIn:"Account connected.",authSignedOut:"You signed out.",cloudError:"Cloud sync is unavailable; your local data was preserved.",
    strongTitle:"Strong and specific answer",goodTitle:"Good base; sharpen the details",improveTitle:"Add more structure before the interview",
    feedbackLengthGood:"The answer provides enough context to understand the example.",
    feedbackLengthShort:"Add enough context for the interviewer to understand the problem and your involvement.",
    feedbackStarGood:"The STAR structure is well covered.",
    feedbackStarMissing:"Cover more STAR stages, especially action and result.",
    feedbackSpecificGood:"You included concrete details or numbers.",
    feedbackSpecificMissing:"Add one verifiable detail: deadline, volume, metric, tool or consequence.",
    feedbackOwnershipGood:"Your personal contribution is clear.",
    feedbackOwnershipMissing:"Replace generic phrases with your actions: “I analyzed”, “I implemented”, “I validated”.",
    feedbackResultGood:"The answer closes with a result or lesson.",
    feedbackResultMissing:"Close with what changed after your action: result, impact or lesson.",
    feedbackConfidence:"You rated your confidence {value}/5. Use it to compare progress, not as a quality score.",
    cloudImport:"Account history synced.",syncing:"Syncing…"
  }
};

let uiLanguage=localStorage.getItem(UI_LANGUAGE_KEY)==="en"?"en":"pt-BR";
let currentUser=null;
let currentSession=null;
let pendingReview=null;
let questionStartedAt=0;
let timerHandle=null;
let recognition=null;
let recognizing=false;
let toastTimer=null;

const $=selector=>document.querySelector(selector);
const t=key=>I18N[uiLanguage][key]||key;
const nowIso=()=>new Date().toISOString();
const escapeHtml=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function sessions(){
  try{
    const rows=JSON.parse(localStorage.getItem(LOCAL_KEY)||"[]");
    return Array.isArray(rows)?rows:[];
  }catch{return[];}
}
function saveSessions(rows){
  localStorage.setItem(LOCAL_KEY,JSON.stringify(rows.slice(0,50)));
  renderHistory();
}
function saveSession(session){
  const rows=sessions();
  const index=rows.findIndex(row=>row.id===session.id);
  if(index>=0)rows[index]=session;else rows.unshift(session);
  rows.sort((a,b)=>String(b.startedAt||"").localeCompare(String(a.startedAt||"")));
  saveSessions(rows);
}
function roleById(id){return window.FALAPRO_ROLES.find(role=>role.id===id)||window.FALAPRO_ROLES[0];}
function roleLabel(id){
  const role=roleById(id);
  return uiLanguage==="en"?role.en:role.pt;
}
function interviewRoleLabel(id,language){
  const role=roleById(id);
  return language==="en"?role.en:role.pt;
}
function questionText(question,language){return language==="en"?question.en:question.pt;}
function questionTip(question,language){return language==="en"?question.tipEn:question.tipPt;}

function composeQuestions(roleId,count){
  const role=roleById(roleId);
  const bankId=role.bank||role.id;
  const common=window.FALAPRO_QUESTIONS.common.slice();
  const technical=(window.FALAPRO_QUESTIONS[bankId]||window.FALAPRO_QUESTIONS.frontend).slice();
  const result=[];
  if(common.length)result.push(common.shift());
  while(result.length<count&&(technical.length||common.length)){
    if(technical.length&&result.length<count)result.push(technical.shift());
    if(common.length&&result.length<count)result.push(common.shift());
  }
  return result.slice(0,count).map(question=>question.id);
}
function questionById(id){
  for(const bank of Object.values(window.FALAPRO_QUESTIONS)){
    const found=bank.find(question=>question.id===id);
    if(found)return found;
  }
  return null;
}

function resetStar(){
  document.querySelectorAll("[data-star]").forEach(input=>input.checked=false);
  $("#confidence").value="3";
  $("#confidence-value").textContent="3/5";
}
function checkedStar(){
  return Array.from(document.querySelectorAll("[data-star]:checked")).map(input=>input.dataset.star);
}
function words(text){return String(text||"").trim().split(/\s+/).filter(Boolean);}
function hasSpecificity(text){
  return /\b\d+[.,]?\d*\b|%|R\$|\$|dias?|semanas?|meses?|usu[aá]rios?|clientes?|tickets?|bugs?|ms\b|segundos?|hours?|days?|weeks?|users?|customers?|tickets?/i.test(text);
}
function hasOwnership(text,language){
  return language==="en"
    ? /\bI\s+(built|created|implemented|fixed|analyzed|tested|validated|decided|organized|learned|changed|reviewed|led|wrote|configured)\b/i.test(text)
    : /\beu\s+(criei|fiz|implementei|corrigi|analisei|testei|validei|decidi|organizei|aprendi|mudei|revisei|liderei|escrevi|configurei)\b/i.test(text);
}
function hasResult(text,language){
  return language==="en"
    ? /\b(result|outcome|improv|reduc|increas|learn|after that|as a result|therefore|so that|impact)\w*/i.test(text)
    : /\b(resultado|impacto|melhor|reduz|aument|aprendi|depois disso|com isso|por isso|conseguimos|consegui)\w*/i.test(text);
}
function evaluateAnswer(answer,language,star,confidence){
  const wordCount=words(answer).length;
  const specific=hasSpecificity(answer);
  const ownership=hasOwnership(answer,language);
  const result=hasResult(answer,language);
  const starCoverage=star.length;

  let score=1;
  if(wordCount>=35)score++;
  if(starCoverage>=3)score++;
  if(specific)score++;
  if(ownership&&result)score++;
  score=Math.max(1,Math.min(5,score));

  const keys=[
    wordCount>=35?"feedbackLengthGood":"feedbackLengthShort",
    starCoverage>=3?"feedbackStarGood":"feedbackStarMissing",
    specific?"feedbackSpecificGood":"feedbackSpecificMissing",
    ownership?"feedbackOwnershipGood":"feedbackOwnershipMissing",
    result?"feedbackResultGood":"feedbackResultMissing"
  ];

  const locale=language==="en"?"en":"pt-BR";
  const dict=I18N[locale];
  const points=keys.map(key=>({good:key.endsWith("Good"),text:dict[key]||I18N[uiLanguage][key]}));
  const title=score>=4?dict.strongTitle:score>=3?dict.goodTitle:dict.improveTitle;
  const confidenceText=(dict.feedbackConfidence||"").replace("{value}",String(confidence));
  return {score,points,title,summary:points.map(point=>point.text).join(" ")+" "+confidenceText};
}

function showToast(message){
  const toast=$("#toast");toast.textContent=message;toast.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),1900);
}
function formatDate(value){
  if(!value)return"—";
  return new Date(value).toLocaleDateString(uiLanguage==="en"?"en-US":"pt-BR",{day:"2-digit",month:"short"});
}
function renderRoles(){
  const current=$("#target-role").value||"frontend";
  $("#target-role").innerHTML=window.FALAPRO_ROLES.map(role=>'<option value="'+escapeHtml(role.id)+'">'+escapeHtml(roleLabel(role.id))+'</option>').join("");
  $("#target-role").value=window.FALAPRO_ROLES.some(role=>role.id===current)?current:"frontend";
}
function renderHistory(){
  const rows=sessions();
  const render=items=>items.length?items.map(session=>{
    const score=session.score?Number(session.score).toFixed(1):"—";
    return '<article class="history-item"><div><strong>'+escapeHtml(roleLabel(session.targetRole))+'</strong><span>'+escapeHtml(formatDate(session.startedAt))+' · '+escapeHtml(session.answers?.length||0)+' '+escapeHtml(t("questions"))+'</span></div><b>'+escapeHtml(score)+'/5</b></article>';
  }).join(""):'<div class="empty-state">'+escapeHtml(t("noHistory"))+'</div>';
  $("#history-preview-list").innerHTML=render(rows.slice(0,4));
  $("#history-all-list").innerHTML=render(rows);
}
function updateSyncStatus(){
  $("#sync-status").textContent=currentUser?t("cloudMode"):t("localMode");
  $("#account-open").textContent=currentUser?(currentUser.email||t("account")):t("account");
  $("#account-logged-out").hidden=!!currentUser;
  $("#account-logged-in").hidden=!currentUser;
  if(currentUser)$("#account-email").textContent=currentUser.email||"";
}
function applyLanguage(){
  document.documentElement.lang=uiLanguage==="en"?"en":"pt-BR";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const value=t(el.dataset.i18n);
    if(typeof value!=="string")return;
    if(value.includes("<span>"))el.innerHTML=value;else el.textContent=value;
  });
  document.querySelectorAll("[data-i18n-option]").forEach(el=>{
    const value=t(el.dataset.i18nOption);if(typeof value==="string")el.textContent=value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder);});
  $("#language-toggle").textContent=uiLanguage==="en"?"PT-BR":"EN";
  localStorage.setItem(UI_LANGUAGE_KEY,uiLanguage);
  renderRoles();renderHistory();updateSyncStatus();
}

function updateTimer(){
  if(!questionStartedAt)return;
  const elapsed=Math.floor((Date.now()-questionStartedAt)/1000);
  const minutes=String(Math.floor(elapsed/60)).padStart(2,"0");
  const seconds=String(elapsed%60).padStart(2,"0");
  $("#timer").textContent=minutes+":"+seconds;
}
function startTimer(){
  clearInterval(timerHandle);
  questionStartedAt=Date.now();
  updateTimer();
  timerHandle=setInterval(updateTimer,1000);
}
function stopTimer(){clearInterval(timerHandle);timerHandle=null;}

function currentQuestion(){
  return currentSession?questionById(currentSession.questionIds[currentSession.currentIndex]):null;
}
function renderQuestion(){
  const question=currentQuestion();
  if(!question)return completeSession();
  const total=currentSession.questionIds.length;
  const index=currentSession.currentIndex+1;
  $("#session-meta").textContent=interviewRoleLabel(currentSession.targetRole,currentSession.language)+" · "+index+"/"+total;
  $("#progress-label").textContent=index+"/"+total;
  $("#question-title").textContent=questionText(question,currentSession.language);
  $("#question-tip").textContent=questionTip(question,currentSession.language);
  $("#answer").value="";
  $("#answer-count").textContent="0";
  resetStar();
  pendingReview=null;
  $("#interview").hidden=false;
  $("#feedback").hidden=true;
  $("#setup").hidden=true;
  $("#next-question").textContent=index===total?t("finish"):t("next");
  startTimer();
  $("#answer").focus();
}
function startSession(){
  const targetRole=$("#target-role").value;
  const level=$("#level").value;
  const language=$("#interview-language").value;
  const count=Number($("#question-count").value||5);
  currentSession={
    id:crypto.randomUUID(),
    targetRole,level,language,
    status:"in_progress",
    score:null,
    startedAt:nowIso(),
    finishedAt:null,
    currentIndex:0,
    questionIds:composeQuestions(targetRole,count),
    answers:[],
    synced:false
  };
  saveSession(currentSession);
  createCloudSession(currentSession);
  renderQuestion();
}
function renderFeedback(review){
  $("#feedback-score").textContent=String(review.score);
  $("#feedback-title").textContent=review.title;
  $("#feedback-copy").textContent=review.summary;
  $("#feedback-points").innerHTML=review.points.map(point=>'<div class="'+(point.good?"good":"improve")+'"><b>'+(point.good?"✓":"→")+'</b><span>'+escapeHtml(point.text)+'</span></div>').join("");
  $("#interview").hidden=true;
  $("#feedback").hidden=false;
}
function reviewCurrentAnswer(){
  const answer=$("#answer").value.trim();
  if(answer.length<20){showToast(t("answerTooShort"));return;}
  stopTimer();
  const question=currentQuestion();
  const star=checkedStar();
  const confidence=Number($("#confidence").value||3);
  const review=evaluateAnswer(answer,currentSession.language,star,confidence);
  pendingReview={
    id:crypto.randomUUID(),
    questionId:question.id,
    question:questionText(question,currentSession.language),
    answer,
    feedback:review.summary,
    score:review.score,
    star,
    confidence,
    durationSeconds:Math.max(0,Math.floor((Date.now()-questionStartedAt)/1000)),
    createdAt:nowIso(),
    review
  };
  renderFeedback(review);
}
async function commitPending(){
  if(!pendingReview||!currentSession)return;
  currentSession.answers.push({...pendingReview,review:undefined});
  currentSession.currentIndex++;
  currentSession.score=Math.round((currentSession.answers.reduce((sum,row)=>sum+Number(row.score||0),0)/currentSession.answers.length)*10)/10;
  saveSession(currentSession);
  await saveCloudAnswer(currentSession,pendingReview);
  pendingReview=null;
}
async function nextQuestion(){
  await commitPending();
  if(currentSession.currentIndex>=currentSession.questionIds.length){
    await completeSession();
  }else{
    renderQuestion();
  }
}
async function completeSession(){
  if(!currentSession)return;
  stopTimer();
  currentSession.status="completed";
  currentSession.finishedAt=nowIso();
  if(currentSession.answers.length){
    currentSession.score=Math.round((currentSession.answers.reduce((sum,row)=>sum+Number(row.score||0),0)/currentSession.answers.length)*10)/10;
  }
  saveSession(currentSession);
  await completeCloudSession(currentSession);
  currentSession=null;
  pendingReview=null;
  $("#interview").hidden=true;
  $("#feedback").hidden=true;
  $("#setup").hidden=false;
  showToast(t("sessionFinished"));
  window.scrollTo({top:0,behavior:"smooth"});
}
async function quitSession(){
  if(!currentSession)return;
  stopTimer();
  currentSession.status="completed";
  currentSession.finishedAt=nowIso();
  if(currentSession.answers.length){
    currentSession.score=Math.round((currentSession.answers.reduce((sum,row)=>sum+Number(row.score||0),0)/currentSession.answers.length)*10)/10;
  }
  saveSession(currentSession);
  await completeCloudSession(currentSession);
  currentSession=null;pendingReview=null;
  $("#interview").hidden=true;$("#feedback").hidden=true;$("#setup").hidden=false;
  showToast(t("sessionQuit"));
}

function toggleVoice(){
  const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!Recognition){showToast(t("voiceUnsupported"));return;}
  if(recognizing){recognition?.stop();return;}
  recognition=new Recognition();
  recognition.lang=currentSession?.language==="en"?"en-US":"pt-BR";
  recognition.interimResults=true;
  recognition.continuous=true;
  const base=$("#answer").value.trim();
  recognition.onstart=()=>{recognizing=true;$("#voice-button").textContent=t("voiceStop");showToast(t("voiceListening"));};
  recognition.onend=()=>{recognizing=false;$("#voice-button").textContent=t("voice");};
  recognition.onerror=()=>{recognizing=false;$("#voice-button").textContent=t("voice");};
  recognition.onresult=event=>{
    let finalText="";let interim="";
    for(let i=event.resultIndex;i<event.results.length;i++){
      const text=event.results[i][0].transcript;
      if(event.results[i].isFinal)finalText+=text+" ";else interim+=text;
    }
    const combined=[base,finalText.trim(),interim.trim()].filter(Boolean).join(" ").trim();
    $("#answer").value=combined.slice(0,5000);
    $("#answer-count").textContent=String($("#answer").value.length);
  };
  recognition.start();
}

async function createCloudSession(session){
  if(!currentUser||!supabaseClient)return;
  try{
    await supabaseClient.from("falapro_sessions").upsert({
      id:session.id,user_id:currentUser.id,target_role:session.targetRole,level:session.level,
      language:session.language,status:"in_progress",score:null,started_at:session.startedAt,finished_at:null
    });
    session.synced=true;saveSession(session);
  }catch(error){console.warn("FalaPro session sync failed",error);}
}
async function saveCloudAnswer(session,row){
  if(!currentUser||!supabaseClient)return;
  try{
    await supabaseClient.from("falapro_answers").upsert({
      id:row.id,user_id:currentUser.id,session_id:session.id,question:row.question,
      answer:row.answer,feedback:row.feedback,score:row.score,created_at:row.createdAt
    });
  }catch(error){console.warn("FalaPro answer sync failed",error);}
}
async function completeCloudSession(session){
  if(!currentUser||!supabaseClient)return;
  try{
    await supabaseClient.from("falapro_sessions").upsert({
      id:session.id,user_id:currentUser.id,target_role:session.targetRole,level:session.level,
      language:session.language,status:"completed",score:session.score,started_at:session.startedAt,finished_at:session.finishedAt
    });
    session.synced=true;saveSession(session);
  }catch(error){console.warn("FalaPro completion sync failed",error);}
}
async function syncLocalToCloud(){
  if(!currentUser||!supabaseClient)return;
  $("#sync-status").textContent=t("syncing");
  try{
    for(const session of sessions()){
      await supabaseClient.from("falapro_sessions").upsert({
        id:session.id,user_id:currentUser.id,target_role:session.targetRole,level:session.level,
        language:session.language,status:session.status||"completed",score:session.score||null,
        started_at:session.startedAt,finished_at:session.finishedAt||null
      });
      for(const row of session.answers||[]){
        await supabaseClient.from("falapro_answers").upsert({
          id:row.id,user_id:currentUser.id,session_id:session.id,question:row.question,
          answer:row.answer||"",feedback:row.feedback||"",score:row.score||null,created_at:row.createdAt||session.startedAt
        });
      }
    }
    await loadCloudHistory();
  }catch(error){
    console.warn("FalaPro import failed",error);showToast(t("cloudError"));
  }finally{updateSyncStatus();}
}
async function loadCloudHistory(){
  if(!currentUser||!supabaseClient)return;
  try{
    const {data:cloudSessions,error}=await supabaseClient.from("falapro_sessions").select("*").order("started_at",{ascending:false}).limit(30);
    if(error)throw error;
    const ids=(cloudSessions||[]).map(row=>row.id);
    let cloudAnswers=[];
    if(ids.length){
      const response=await supabaseClient.from("falapro_answers").select("*").in("session_id",ids).order("created_at",{ascending:true});
      if(response.error)throw response.error;
      cloudAnswers=response.data||[];
    }
    const local=sessions();
    const map=new Map(local.map(row=>[row.id,row]));
    for(const row of cloudSessions||[]){
      const existing=map.get(row.id);
      const answers=cloudAnswers.filter(answer=>answer.session_id===row.id).map(answer=>({
        id:answer.id,questionId:"",question:answer.question,answer:answer.answer,feedback:answer.feedback,
        score:Number(answer.score||0),star:[],confidence:3,durationSeconds:0,createdAt:answer.created_at
      }));
      map.set(row.id,{
        ...(existing||{}),id:row.id,targetRole:row.target_role,level:row.level,language:row.language,
        status:row.status,score:row.score,startedAt:row.started_at,finishedAt:row.finished_at,
        currentIndex:existing?.currentIndex||answers.length,questionIds:existing?.questionIds||[],
        answers:existing?.answers?.length?existing.answers:answers,synced:true
      });
    }
    saveSessions(Array.from(map.values()).sort((a,b)=>String(b.startedAt||"").localeCompare(String(a.startedAt||""))));
    showToast(t("cloudImport"));
  }catch(error){console.warn("FalaPro cloud history failed",error);}
}

async function signIn(email,password){
  if(!supabaseClient){showToast(t("cloudError"));return;}
  const {error}=await supabaseClient.auth.signInWithPassword({email,password});
  if(error){$("#auth-message").textContent=t("authInvalid");return;}
  $("#auth-message").textContent=t("authSignedIn");
}
async function signUp(email,password){
  if(!supabaseClient){showToast(t("cloudError"));return;}
  const {error}=await supabaseClient.auth.signUp({email,password});
  $("#auth-message").textContent=error?t("authInvalid"):t("authCreated");
}
async function signOut(){
  if(!supabaseClient)return;
  await supabaseClient.auth.signOut();
  showToast(t("authSignedOut"));
}

$("#setup-form").addEventListener("submit",event=>{event.preventDefault();startSession();});
$("#submit-answer").addEventListener("click",reviewCurrentAnswer);
$("#next-question").addEventListener("click",nextQuestion);
$("#edit-answer").addEventListener("click",()=>{$("#feedback").hidden=true;$("#interview").hidden=false;pendingReview=null;startTimer();});
$("#quit-session").addEventListener("click",quitSession);
$("#voice-button").addEventListener("click",toggleVoice);
$("#answer").addEventListener("input",()=>{$("#answer-count").textContent=String($("#answer").value.length);});
$("#confidence").addEventListener("input",()=>{$("#confidence-value").textContent=$("#confidence").value+"/5";});
$("#language-toggle").addEventListener("click",()=>{
  uiLanguage=uiLanguage==="en"?"pt-BR":"en";applyLanguage();
  const url=new URL(location.href);url.searchParams.set("lang",uiLanguage==="en"?"en":"pt");history.replaceState(null,"",url.pathname+"?"+url.searchParams.toString());
});
$("#account-open").addEventListener("click",()=>$("#account-dialog").showModal());
$("#history-open").addEventListener("click",()=>$("#history-dialog").showModal());
document.querySelectorAll("[data-close-dialog]").forEach(button=>button.addEventListener("click",()=>$("#"+button.dataset.closeDialog).close()));
$("#auth-form").addEventListener("submit",event=>{
  event.preventDefault();signIn($("#auth-email").value.trim(),$("#auth-password").value);
});
$("#sign-up").addEventListener("click",()=>signUp($("#auth-email").value.trim(),$("#auth-password").value));
$("#sign-out").addEventListener("click",signOut);

if(supabaseClient){
  supabaseClient.auth.onAuthStateChange((_event,session)=>{
    currentUser=session?.user||null;updateSyncStatus();
    if(currentUser)syncLocalToCloud();
  });
  supabaseClient.auth.getSession().then(({data})=>{
    currentUser=data?.session?.user||null;updateSyncStatus();
    if(currentUser)syncLocalToCloud();
  }).catch(()=>updateSyncStatus());
}

(function boot(){
  const params=new URLSearchParams(location.search);
  const requested=String(params.get("lang")||"").toLowerCase();
  if(requested==="en")uiLanguage="en";
  if(requested==="pt"||requested==="pt-br")uiLanguage="pt-BR";
  renderRoles();applyLanguage();renderHistory();updateSyncStatus();
})();
