const { test, expect } = require("@playwright/test");

async function disableSupabaseNetwork(page) {
  await page.route("https://cdn.jsdelivr.net/**", route => route.fulfill({
    status: 200,
    contentType: "application/javascript",
    body: ""
  }));
}

test("runs a local interview, explains the score and stores history", async ({ page }) => {
  await disableSupabaseNetwork(page);
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  await expect(page.locator("#sync-status")).toHaveText("Modo local");
  await page.locator("#target-role").selectOption("frontend");
  await page.locator("#question-count").selectOption("5");
  await page.locator("#setup-form").getByRole("button", { name: "Começar simulação" }).click();

  await expect(page.locator("#interview")).toBeVisible();
  await expect(page.locator("#progress-label")).toHaveText("1/5");
  await expect(page.locator("#question-title")).not.toHaveText("—");

  const answer = "Eu analisei o problema no DevTools, reproduzi em 3 larguras, implementei a correção no CSS e validei novamente. Com isso, removi o overflow e a página passou a funcionar em 768, 900 e 1024 pixels.";
  await page.locator("#answer").fill(answer);
  await page.locator("[data-star=s]").check();
  await page.locator("[data-star=t]").check();
  await page.locator("[data-star=a]").check();
  await page.locator("[data-star=r]").check();
  await page.locator("#confidence").fill("4");
  await page.locator("#submit-answer").click();

  await expect(page.locator("#feedback")).toBeVisible();
  await expect(page.locator("#feedback-score")).toHaveText(/[4-5]/);
  await expect(page.locator("#feedback-points > div")).toHaveCount(5);

  await page.locator("#next-question").click();
  await expect(page.locator("#progress-label")).toHaveText("2/5");
  await page.locator("#quit-session").click();

  await expect(page.locator("#setup")).toBeVisible();
  await expect(page.locator("#history-preview-list")).toContainText("Desenvolvedor");
  const stored=await page.evaluate(() => JSON.parse(localStorage.getItem("falapro:sessions:v1")||"[]"));
  expect(stored).toHaveLength(1);
  expect(stored[0].answers).toHaveLength(1);
  expect(stored[0].score).toBeGreaterThanOrEqual(4);
});

test("supports English UI and English interview questions", async ({ page }) => {
  await disableSupabaseNetwork(page);
  await page.goto("/?lang=en");
  await expect(page.locator("html")).toHaveAttribute("lang","en");
  await expect(page.locator("#setup-form").getByRole("button")).toHaveText("Start simulation");

  await page.locator("#interview-language").selectOption("en");
  await page.locator("#target-role").selectOption("qa");
  await page.locator("#setup-form").getByRole("button").click();

  await expect(page.locator("#session-meta")).toContainText("Junior QA");
  await expect(page.locator("#question-title")).toHaveText(/Tell me|What|How/);
});

test("syncs local history after optional sign in without blocking local use", async ({ page }) => {
  await page.addInitScript(() => {
    window.__cloudWrites = [];
    let authListener = null;
    let user = null;

    function query(table) {
      const state={table};
      const chain={
        select(){return chain;},
        order(){return chain;},
        limit(){return chain;},
        in(){return chain;},
        upsert(payload){
          window.__cloudWrites.push({table,payload});
          return Promise.resolve({data:Array.isArray(payload)?payload:[payload],error:null});
        },
        then(resolve,reject){
          const data = table==="falapro_sessions" || table==="falapro_answers" ? [] : [];
          return Promise.resolve({data,error:null}).then(resolve,reject);
        }
      };
      return chain;
    }

    window.supabase={
      createClient(){
        return {
          from:query,
          auth:{
            onAuthStateChange(callback){authListener=callback;return {data:{subscription:{unsubscribe(){}}}};},
            getSession(){return Promise.resolve({data:{session:user?{user}:null},error:null});},
            signInWithPassword({email}){
              user={id:"11111111-1111-4111-8111-111111111111",email};
              queueMicrotask(()=>authListener?.("SIGNED_IN",{user}));
              return Promise.resolve({data:{session:{user}},error:null});
            },
            signUp(){return Promise.resolve({data:{session:null},error:null});},
            signOut(){
              user=null;queueMicrotask(()=>authListener?.("SIGNED_OUT",null));
              return Promise.resolve({error:null});
            }
          }
        };
      }
    };
  });
  await page.route("https://cdn.jsdelivr.net/**", route => route.fulfill({
    status:200,contentType:"application/javascript",body:""
  }));

  await page.goto("/");
  await page.locator("#setup-form").getByRole("button").click();
  await page.locator("#answer").fill("Eu analisei um problema real, implementei uma solução específica e validei o resultado com três testes antes de concluir.");
  await page.locator("[data-star=s]").check();
  await page.locator("[data-star=t]").check();
  await page.locator("[data-star=a]").check();
  await page.locator("[data-star=r]").check();
  await page.locator("#submit-answer").click();
  await page.locator("#next-question").click();
  await page.locator("#quit-session").click();

  await page.locator("#account-open").click();
  await page.locator("#auth-email").fill("qa@example.com");
  await page.locator("#auth-password").fill("12345678");
  await page.locator("#auth-form").getByRole("button", { name: "Entrar" }).click();

  await expect(page.locator("#sync-status")).toHaveText("Sincronizado");
  const writes=await page.evaluate(() => window.__cloudWrites);
  expect(writes.some(row=>row.table==="falapro_sessions")).toBeTruthy();
  expect(writes.some(row=>row.table==="falapro_answers")).toBeTruthy();

  const stored=await page.evaluate(() => JSON.parse(localStorage.getItem("falapro:sessions:v1")||"[]"));
  expect(stored).toHaveLength(1);
});
