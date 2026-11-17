#!/bin/bash
# Cria um historico de commits semanticos e progressivos.
# Uso: crie o repositorio vazio no GitHub e rode: bash commits.sh <url-do-repo>
set -e
git init
git branch -M main

git add package.json ionic.config.json .gitignore README.md
git commit -m "chore: estrutura inicial do projeto Ionic"

git add www/index.html www/css/style.css
git commit -m "feat: adiciona index e identidade visual UCSal (variaveis CSS)"

git add www/js/app.js
git commit -m "feat: configura modulo ucsalApp e rotas com ui-router"

git add www/js/services/AlunoService.js www/js/services/AuthService.js www/js/controllers/LoginCtrl.js www/templates/login.html
git commit -m "feat(RF01): login mockado com AuthService"

git add www/templates/menu.html www/js/controllers/MenuCtrl.js
git commit -m "feat: menu lateral com navegacao entre modulos"

git add www/js/services/NoticiasService.js www/js/controllers/NoticiasCtrl.js www/js/controllers/NoticiaDetalheCtrl.js www/templates/noticias.html www/templates/noticia-detalhe.html www/img
git commit -m "feat(RF02): mural de noticias e eventos com detalhe"

git add www/js/controllers/PerfilCtrl.js www/templates/perfil.html
git commit -m "feat(RF03): atualizacao cadastral com persistencia em localStorage"

git add www/js/services/FinanceiroService.js www/js/controllers/FinanceiroCtrl.js www/templates/financeiro.html
git commit -m "feat(RF04): consulta financeira por semestre e copia de codigo de barras"

git add commits.sh
git commit -m "docs: script de commits" || true

if [ -n "$1" ]; then git remote add origin "$1"; git push -u origin main; fi
