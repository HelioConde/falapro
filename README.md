# FalaPro

Treino estruturado de entrevistas de emprego, local-first, com sincronização opcional.

## Estado atual

> **MVP funcional implementado em 07/10/2026.** O produto entra em validação; novas features ficam congeladas até QA publicado e uso real.

## Fluxo principal

1. escolha o cargo;
2. escolha nível, idioma da entrevista e quantidade de perguntas;
3. responda por texto ou por reconhecimento de voz do navegador;
4. marque sua autoavaliação STAR;
5. receba feedback estruturado e explicável;
6. avance para a próxima pergunta;
7. acompanhe o histórico local;
8. opcionalmente entre na conta para sincronizar.

## Cargos iniciais

- Desenvolvedor(a) Front-End Jr;
- Desenvolvedor(a) Web Jr;
- Desenvolvedor(a) de Software Jr;
- QA Jr;
- Suporte / TI;
- Estágio em Desenvolvimento / TI.

## Feedback do MVP

A nota atual **não é uma previsão de contratação** e não usa uma IA avaliadora escondida.

Ela observa sinais objetivos:

- tamanho/contexto suficiente;
- cobertura STAR;
- detalhes concretos/números;
- autoria da ação;
- resultado ou aprendizado.

A pontuação vai de 1 a 5 e cada ponto é explicado na tela.

## Voz

Quando disponível, o navegador pode usar `SpeechRecognition` / `webkitSpeechRecognition` para transformar fala em texto.

- texto continua sendo o fluxo principal;
- nenhuma gravação de áudio é salva pelo FalaPro;
- o processamento de reconhecimento pode depender do navegador/provedor.

## Dados

### Sem conta

`localStorage` mantém até 50 sessões recentes.

### Com conta

Supabase compartilhado `pizzaria-db`:

- `falapro_sessions`;
- `falapro_answers`.

O frontend usa somente a **publishable key**.

Em 07/10/2026 os grants foram reduzidos para:

- `anon`: sem acesso às tabelas FalaPro;
- `authenticated`: `SELECT, INSERT, UPDATE, DELETE`.

As duas tabelas possuem RLS com `auth.uid() = user_id`.

O SQL equivalente está versionado em `supabase/sql/falapro_security_hardening.sql`.

## Idiomas

- PT-BR: principal e fallback;
- EN: obrigatório;
- idioma da interface e idioma da entrevista são independentes.

## QA

Automação cobre:

- entrevista local;
- feedback estruturado;
- STAR;
- histórico local;
- PT-BR/EN;
- perguntas em inglês;
- sincronização local → nuvem simulada;
- desktop e mobile;
- ausência de secret/service_role no frontend.

```bash
npm install
npm run check
npm run test:e2e
```

## Gate antes de V2

- [x] MVP navegável;
- [x] local-first;
- [x] banco existente integrado;
- [x] hardening de grants aplicado;
- [x] PT-BR/EN;
- [x] voz opcional;
- [x] QA/E2E;
- [x] Pages preparado;
- [ ] confirmar Actions verdes;
- [ ] confirmar Pages publicado;
- [ ] validar login/sync com duas contas reais;
- [ ] validar reconhecimento de voz em Chrome Android/Desktop;
- [ ] testar com pessoas em busca de vaga;
- [ ] corrigir somente P0/P1 encontrados.

## V2 — somente depois da validação

- pergunta personalizada por descrição da vaga;
- feedback com modelo de IA, sempre rotulado e com critérios visíveis;
- análise de repetição/vícios de linguagem;
- metas semanais;
- comparação de evolução entre sessões;
- simulação por tempo;
- compartilhamento de plano de melhoria.

## Monetização

Produto gratuito com publicidade preparada fora do fluxo principal. Anúncios não podem interromper pergunta, resposta, voz ou feedback.

## Deploy

https://helioconde.github.io/falapro/
