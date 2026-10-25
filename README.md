<div align="center">
  <h1>🎤 FalaPro</h1>
  <p><strong>Treino de entrevistas de tecnologia com perguntas guiadas, método STAR e feedback explicável.</strong></p>
  <p><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-App%20Web-F7DF1E?logo=javascript&logoColor=black"> <img alt="Status" src="https://img.shields.io/badge/status-MVP%20em%20valida%C3%A7%C3%A3o-64748b"></p>
  <p><a href="https://helioconde.github.io/falapro/"><strong>Experimentar</strong></a> · <a href="#como-usar"><strong>Como usar</strong></a> · <a href="#desenvolvimento"><strong>Desenvolvimento</strong></a></p>
</div>

## O que é

O **FalaPro** ajuda quem está se preparando para entrevistas de emprego na área de tecnologia a **praticar respostas e transformar feedback em ações de melhoria**. O usuário escolhe o cargo, o nível e o idioma, recebe perguntas e registra respostas por texto ou pela função de voz do navegador, quando suportada.

> **Sem promessa de aprovação:** a nota de 1 a 5 é calculada a partir de critérios visíveis e heurísticos, não por um recrutador nem por uma IA avaliadora secreta. Não prevê contratação.

## Como usar

1. Selecione a vaga e a experiência desejada.
2. Escolha o idioma e o número de perguntas.
3. Responda por texto ou ditado de voz, quando disponível.
4. Revise sua resposta usando o método **STAR** (Situação, Tarefa, Ação e Resultado).
5. Receba feedback por critério e continue a sessão.
6. Consulte seu histórico local para identificar pontos de evolução.

**Áreas iniciais:** Desenvolvimento Front-End/Web, Software, QA, Suporte/TI e Estágio em Desenvolvimento.

## Recursos e dados

| Funcionalidade | Situação no MVP |
| --- | --- |
| Perguntas por cargo e nível | Implementada |
| Resposta por texto | Implementada |
| Reconhecimento de voz | Depende do navegador e permissão |
| Critérios STAR e feedback | Heurístico, explicável |
| Histórico | Local no dispositivo |
| Sincronização | Opcional, requer Supabase configurado |
| Português e inglês | Interfaces disponíveis |

O histórico salvo em `localStorage` pode desaparecer ao limpar dados do site. Não insira informações pessoais sensíveis ou dados de terceiros nas respostas de teste.

## Desenvolvimento

O site é estático, feito com **HTML, CSS e JavaScript**, com `questions.js` para conteúdo e arquivos opcionais de integração Supabase.

```bash
git clone https://github.com/HelioConde/falapro.git
cd falapro
python -m http.server 8000
```

Abra `http://localhost:8000`. Para executar QA com Node.js:

```bash
npm install
npm run check
npm run test:e2e
```

Playwright precisa dos navegadores de teste instalados. Os comandos são os scripts definidos no repositório; **esta atualização de README não equivale à execução dos testes**.

## O que falta para lançar amplamente

Validar o feedback com entrevistas simuladas reais, usabilidade mobile e acessibilidade, além de confirmar autenticação e permissões na sincronização opcional.

[**Repositório**](https://github.com/HelioConde/falapro) · [**Projetos relacionados**](https://github.com/HelioConde/ideias-ia-lab)

Desenvolvido por [Hélio Conde](https://github.com/HelioConde).
