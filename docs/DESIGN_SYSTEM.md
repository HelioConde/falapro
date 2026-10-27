# FalaPro — Design system e auditoria de modernização

## Identidade e propósito
Uma aplicação de preparação para entrevistas técnicas: séria, acolhedora e orientada a progresso. Manter o **verde-profissional** `#1d6a5e`, o **terracota** `#d9693c` e as superfícies em papel `#f7f4ee`, sem transformar o treino em uma interface de jogos.

## 1. Taste Skill
Em `style.css`:
- `--space-1/2/3/4/6/8/12`: 4, 8, 12, 16, 24, 32, 48 px.
- `--radius-sm`, `--radius-card`: 10 e 18 px.
- `--focus`: verde de alto contraste; contorno de 3 px com distância e halo discreto.
- Escala legível para microtexto: mínimo aproximado de 12 px em legendas; controles maiores para toque.

## 2. Web Design Guidelines
- Skip link visível ao foco para preparação da entrevista.
- Inputs, selects, textarea e botões com foco visível; meta mínimo de 44 px de área tocável.
- Texto secundário escurecido para contraste; labels e indicadores de progresso preservados.
- `prefers-reduced-motion`: elimina transições, inclusive scroll suave.
- Histórico, feedback e formulário continuam usáveis apenas com teclado.
- O botão de ditado depende de permissões e suporte do navegador; alternativa textual é sempre disponível.

## 3. Awesome Design
Composição com bloco editorial forte e método STAR em quatro cartões/linhas ritmadas: letras de 44 px, bordas e superfícies com contraste; indicadores de progresso claros. Cartões de resultados receberam maior espaçamento e textos legíveis.

## 4. Image to Code
O redesenho é baseado na identidade existente do próprio projeto: `hero`, `hero-card`, `star-row`, `panel`, `feedback-card`. Não inventa imagens externas; usa somente componentes CSS e um favicon vetorial simples. Antes/depois devem ser comparados nas capturas reais do Playwright.

## 5. Playwright e QA
`tests/visual-qa.spec.js` percorre home e páginas informativas nas resoluções 390×844, 768×1024 e 1440×900; identifica overflow, erros JavaScript, navegação por teclado e gera screenshots completos. O workflow publica os artefatos em todas as execuções; validações funcionais históricas continuam em `tests/e2e.spec.js`.

## GitHub Pages sem banco
A funcionalidade primária usa `localStorage`; o Supabase é **opcional** e nunca requisito para praticar. O workflow de Pages testa código, cria pacote estático com allowlist e só tenta implantar quando Pages está habilitado. O token do Actions não consegue obrigatoriamente habilitar Pages por conta própria: ação manual em **Settings → Pages → GitHub Actions** pode ser necessária.

## Critérios de aceitação
- [ ] CI Playwright e sintaxe aprovados após PR.
- [ ] Screenshots inspecionadas em desktop/tablet/mobile.
- [ ] Nenhuma mudança de layout horizontal, erro de script ou quebra de sessão.
- [ ] GitHub Pages habilitado e endereço público testado; pipeline verde sem deploy **não** prova publicação.
