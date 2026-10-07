const toggle=document.querySelector("[data-language-toggle]");
let lang=localStorage.getItem("falapro:ui-language")==="en"?"en":"pt-BR";
function apply(){
  document.documentElement.lang=lang==="en"?"en":"pt-BR";
  document.querySelectorAll("[data-lang]").forEach(section=>{section.hidden=section.dataset.lang!==(lang==="en"?"en":"pt");});
  if(toggle)toggle.textContent=lang==="en"?"PT-BR":"EN";
  localStorage.setItem("falapro:ui-language",lang);
}
if(toggle)toggle.addEventListener("click",()=>{lang=lang==="en"?"pt-BR":"en";apply();});
apply();
