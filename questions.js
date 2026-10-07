window.FALAPRO_QUESTIONS = Object.freeze({
  common: [
    {
      id:"intro",
      category:"opening",
      pt:"Conte um pouco sobre você e por que está buscando esta vaga.",
      en:"Tell me about yourself and why you are pursuing this role.",
      tipPt:"Conecte sua formação, experiências e objetivo com a vaga. Evite contar toda a sua vida.",
      tipEn:"Connect your background, experience and goal to the role. Avoid telling your entire life story."
    },
    {
      id:"challenge",
      category:"behavioral",
      pt:"Fale sobre um problema difícil que você precisou resolver. Como você chegou à solução?",
      en:"Tell me about a difficult problem you had to solve. How did you reach the solution?",
      tipPt:"Use STAR: situação, tarefa, ação e resultado. Foque no que você fez.",
      tipEn:"Use STAR: situation, task, action and result. Focus on what you personally did."
    },
    {
      id:"learning",
      category:"behavioral",
      pt:"Conte sobre algo que você precisou aprender rapidamente para entregar um resultado.",
      en:"Tell me about something you had to learn quickly to deliver a result.",
      tipPt:"Mostre como você aprende, valida entendimento e aplica o conhecimento.",
      tipEn:"Show how you learn, validate understanding and apply the knowledge."
    },
    {
      id:"priority",
      category:"behavioral",
      pt:"Como você decide o que fazer primeiro quando recebe várias tarefas ao mesmo tempo?",
      en:"How do you decide what to do first when several tasks arrive at the same time?",
      tipPt:"Explique critérios: impacto, urgência, dependências, risco e alinhamento com o time.",
      tipEn:"Explain your criteria: impact, urgency, dependencies, risk and team alignment."
    },
    {
      id:"mistake",
      category:"behavioral",
      pt:"Conte sobre um erro que você cometeu e o que mudou depois dele.",
      en:"Tell me about a mistake you made and what changed after it.",
      tipPt:"Assuma responsabilidade, explique a correção e mostre o aprendizado prático.",
      tipEn:"Take ownership, explain the fix and show the practical lesson."
    },
    {
      id:"feedback",
      category:"behavioral",
      pt:"Como você reage quando recebe um feedback com o qual não concorda de início?",
      en:"How do you react when you receive feedback you initially disagree with?",
      tipPt:"Mostre escuta, perguntas para entender o contexto e decisão baseada em evidências.",
      tipEn:"Show listening, clarifying questions and evidence-based decision making."
    }
  ],
  frontend: [
    {
      id:"frontend-responsive",
      category:"technical",
      pt:"Uma página está quebrando entre 768 px e 1024 px. Como você investigaria e corrigiria?",
      en:"A page breaks between 768 px and 1024 px. How would you investigate and fix it?",
      tipPt:"Fale de DevTools, layout, overflow, breakpoints, conteúdo real e teste regressivo.",
      tipEn:"Mention DevTools, layout, overflow, breakpoints, real content and regression testing."
    },
    {
      id:"frontend-react-state",
      category:"technical",
      pt:"Quando você usaria estado local, contexto ou estado vindo do servidor em React?",
      en:"When would you use local state, context or server state in React?",
      tipPt:"Diferencie estado de UI, compartilhamento global e dados remotos/cache.",
      tipEn:"Differentiate UI state, shared global state and remote/cache data."
    },
    {
      id:"frontend-api",
      category:"technical",
      pt:"Como você trataria loading, erro, vazio e sucesso ao consumir uma API REST?",
      en:"How would you handle loading, error, empty and success states when consuming a REST API?",
      tipPt:"Explique estados explícitos, retry quando fizer sentido e feedback acessível.",
      tipEn:"Explain explicit states, sensible retries and accessible feedback."
    },
    {
      id:"frontend-accessibility",
      category:"technical",
      pt:"Quais verificações básicas de acessibilidade você faria antes de entregar uma tela?",
      en:"What basic accessibility checks would you perform before shipping a screen?",
      tipPt:"Teclado, foco, labels, contraste, semântica e leitores de tela são bons pontos.",
      tipEn:"Keyboard, focus, labels, contrast, semantics and screen readers are strong points."
    },
    {
      id:"frontend-performance",
      category:"technical",
      pt:"Uma página está lenta no celular. Como você encontraria a causa antes de otimizar?",
      en:"A page is slow on mobile. How would you find the cause before optimizing?",
      tipPt:"Fale de medir primeiro: rede, imagens, JavaScript, renderização e Core Web Vitals.",
      tipEn:"Talk about measuring first: network, images, JavaScript, rendering and Core Web Vitals."
    },
    {
      id:"frontend-git",
      category:"technical",
      pt:"Você abriu uma feature branch e surgiu um conflito com a main. Como procede?",
      en:"You opened a feature branch and a conflict with main appeared. What do you do?",
      tipPt:"Explique atualização da branch, leitura do conflito, teste e commit limpo.",
      tipEn:"Explain updating the branch, reading the conflict, testing and a clean commit."
    }
  ],
  software: [
    {
      id:"software-debug",
      category:"technical",
      pt:"Um bug acontece só em produção e não localmente. Como você organiza a investigação?",
      en:"A bug happens only in production, not locally. How do you organize the investigation?",
      tipPt:"Comece por evidências: logs, versão, dados, ambiente, reprodução e hipótese mínima.",
      tipEn:"Start with evidence: logs, version, data, environment, reproduction and a minimal hypothesis."
    },
    {
      id:"software-api",
      category:"technical",
      pt:"Como você desenharia um endpoint para criar um recurso sem gerar duplicatas em retries?",
      en:"How would you design an endpoint that creates a resource without duplicates on retries?",
      tipPt:"Idempotência, chave de requisição, constraints e transação são pontos úteis.",
      tipEn:"Idempotency, request keys, constraints and transactions are useful points."
    },
    {
      id:"software-quality",
      category:"technical",
      pt:"Que testes você priorizaria antes de alterar uma regra de negócio importante?",
      en:"Which tests would you prioritize before changing an important business rule?",
      tipPt:"Pense em comportamento existente, casos-limite, integração e regressão.",
      tipEn:"Think about existing behavior, edge cases, integration and regression."
    },
    {
      id:"software-design",
      category:"technical",
      pt:"Como você evita transformar uma solução simples em uma arquitetura complexa demais?",
      en:"How do you avoid turning a simple solution into an overly complex architecture?",
      tipPt:"Fale de requisitos reais, evolução incremental, interfaces pequenas e custo de manutenção.",
      tipEn:"Talk about real requirements, incremental evolution, small interfaces and maintenance cost."
    }
  ],
  qa: [
    {
      id:"qa-bug",
      category:"technical",
      pt:"O que torna um relatório de bug realmente útil para quem vai corrigir?",
      en:"What makes a bug report truly useful for the person fixing it?",
      tipPt:"Passos, esperado, atual, ambiente, evidência, frequência e impacto.",
      tipEn:"Steps, expected result, actual result, environment, evidence, frequency and impact."
    },
    {
      id:"qa-regression",
      category:"technical",
      pt:"Como você decide o que testar em regressão quando o tempo é curto?",
      en:"How do you decide what to regression test when time is short?",
      tipPt:"Priorize risco, fluxo crítico, área alterada, integrações e histórico de falhas.",
      tipEn:"Prioritize risk, critical flows, changed area, integrations and failure history."
    },
    {
      id:"qa-severity",
      category:"technical",
      pt:"Qual a diferença entre severidade e prioridade de um bug? Dê um exemplo.",
      en:"What is the difference between bug severity and priority? Give an example.",
      tipPt:"Severidade mede impacto técnico/usuário; prioridade mede urgência de correção.",
      tipEn:"Severity measures technical/user impact; priority measures urgency to fix."
    },
    {
      id:"qa-plan",
      category:"technical",
      pt:"Você recebe uma feature nova sem casos de teste. Como começa o plano?",
      en:"You receive a new feature with no test cases. How do you start the plan?",
      tipPt:"Entenda objetivo, riscos, critérios de aceite, caminhos felizes e negativos.",
      tipEn:"Understand the goal, risks, acceptance criteria, happy paths and negative paths."
    }
  ],
  support: [
    {
      id:"support-troubleshoot",
      category:"technical",
      pt:"Um usuário diz apenas: “não funciona”. Como você conduz o diagnóstico?",
      en:"A user only says: 'it doesn't work'. How do you conduct the diagnosis?",
      tipPt:"Colete contexto, reproduza, isole variáveis e confirme cada hipótese.",
      tipEn:"Gather context, reproduce, isolate variables and confirm each hypothesis."
    },
    {
      id:"support-pressure",
      category:"behavioral",
      pt:"Como você atende uma pessoa frustrada sem prometer algo que não consegue entregar?",
      en:"How do you handle a frustrated person without promising something you cannot deliver?",
      tipPt:"Reconheça o impacto, seja claro sobre próximos passos e mantenha atualização objetiva.",
      tipEn:"Acknowledge the impact, be clear about next steps and provide objective updates."
    },
    {
      id:"support-access",
      category:"technical",
      pt:"Como você diferencia um problema de permissão de um problema de aplicação?",
      en:"How do you distinguish a permission problem from an application problem?",
      tipPt:"Compare usuários/roles, mensagens, logs, recurso acessado e comportamento esperado.",
      tipEn:"Compare users/roles, messages, logs, accessed resource and expected behavior."
    },
    {
      id:"support-network",
      category:"technical",
      pt:"Um sistema abre em alguns computadores e em outros não. O que você verifica primeiro?",
      en:"A system opens on some computers but not others. What do you check first?",
      tipPt:"Rede, DNS, proxy, navegador, horário/certificado e diferenças de ambiente.",
      tipEn:"Network, DNS, proxy, browser, clock/certificate and environment differences."
    }
  ]
});

window.FALAPRO_ROLES = Object.freeze([
  {id:"frontend",pt:"Desenvolvedor(a) Front-End Jr",en:"Junior Front-End Developer"},
  {id:"web",pt:"Desenvolvedor(a) Web Jr",en:"Junior Web Developer",bank:"frontend"},
  {id:"software",pt:"Desenvolvedor(a) de Software Jr",en:"Junior Software Developer"},
  {id:"qa",pt:"QA Jr",en:"Junior QA"},
  {id:"support",pt:"Suporte / TI",en:"IT Support"},
  {id:"intern",pt:"Estágio em Desenvolvimento / TI",en:"Development / IT Internship",bank:"frontend"}
]);
