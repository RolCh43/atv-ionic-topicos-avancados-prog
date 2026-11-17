# Portal do Aluno UCSal (MVP Front-end)

Protótipo em **Ionic 1 + AngularJS** (ui-router). Sem back-end: todos os dados são mockados em Services/Factories.

## Como executar
Ionic 1 e AngularJS são carregados via CDN (`index.html`), então só é preciso servir a pasta `www` por HTTP:

```bash
npm start            # equivale a: npx http-server www -p 8100 -c-1
# abra http://localhost:8100
```
No GitHub Codespaces, abra a porta 8100 (aba "Ports"). Alternativa: `ionic serve` (Ionic CLI v1/v3 com projeto `ionic1`).

**Login de teste:** matrícula `20261001` / senha `123456` (ou `20261002` / `abc123`).

## Mapeamento dos requisitos
| Requisito | Onde |
|---|---|
| RF01 Login mockado | `AuthService`, `LoginCtrl`, `login.html` |
| RF02 Mural (cards, Ler mais) | `NoticiasService`, `NoticiasCtrl`, `noticias.html`, `noticia-detalhe.html` |
| RF03 Atualização cadastral | `AlunoService`, `PerfilCtrl`, `perfil.html` (localStorage + `$ionicPopup`) |
| RF04 Financeiro por semestre | `FinanceiroService`, `FinanceiroCtrl`, `financeiro.html` |
| Roteamento | `$stateProvider` em `js/app.js` |
| Filtros | `currency`, `date`, `filter` |
| Cores institucionais | variáveis CSS em `css/style.css` |
