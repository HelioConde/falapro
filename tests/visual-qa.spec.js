const {test,expect}=require('@playwright/test');

const viewports=[
  {name:'mobile',width:390,height:844},
  {name:'tablet',width:768,height:1024},
  {name:'desktop',width:1440,height:900},
];
const routes=[
  {path:'/',slug:'home',heading:/Treine a resposta/},
  {path:'/sobre.html',slug:'sobre',heading:/Treino de entrevista/i},
  {path:'/privacidade.html',slug:'privacidade',heading:/Você pode treinar/i},
  {path:'/termos.html',slug:'termos',heading:/O feedback é treino/i},
];

test('QA visual: rotas, foco, responsividade e capturas',async ({browser})=>{
  for(const vp of viewports){
    const page=await browser.newPage({viewport:{width:vp.width,height:vp.height},reducedMotion:'reduce'});
    const errors=[];
    await page.route('https://cdn.jsdelivr.net/**',route=>route.fulfill({status:200,contentType:'application/javascript',body:''}));
    page.on('pageerror',err=>errors.push(err.message));
    page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
    for(const route of routes){
      const response=await page.goto('http://127.0.0.1:4173'+route.path,{waitUntil:'domcontentloaded'});
      expect(response?.status(),route.path).toBe(200);
      await expect(page.getByRole('heading',{level:1}).first()).toContainText(route.heading);
      const layout=await page.evaluate(()=>({
        overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,
        hasMain:!!document.querySelector('main'),
        title:document.title
      }));
      expect(layout.overflow,route.path+' '+vp.name).toBeLessThanOrEqual(2);
      expect(layout.hasMain).toBeTruthy();
      if(route.slug==='home'){
        await page.keyboard.press('Tab');
        await expect(page.locator('.skip-link')).toBeFocused();
        const outline=await page.locator('.skip-link').evaluate(el=>getComputedStyle(el).outlineStyle);
        expect(outline).not.toBe('none');
        const minInput=await page.locator('#target-role').evaluate(el=>el.getBoundingClientRect().height);
        expect(minInput).toBeGreaterThanOrEqual(44);
      }
      await page.screenshot({path:'test-results/visual/'+vp.name+'-'+route.slug+'.png',fullPage:true,animations:'disabled'});
    }
    expect(errors,vp.name+' browser errors').toEqual([]);
    await page.close();
  }
});
