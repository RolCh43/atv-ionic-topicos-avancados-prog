/**
 * Modulo principal e roteamento (ui-router).
 */
angular.module('ucsalApp', ['ionic'])

.run(function($ionicPlatform, $rootScope, $state, AuthService) {
  $ionicPlatform.ready(function() {
    if (window.StatusBar) { StatusBar.styleLightContent(); }
  });

  // Guarda de rotas: sem login, so a tela 'login' fica acessivel.
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name !== 'login' && !AuthService.estaAutenticado()) {
      event.preventDefault();
      $state.go('login');
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  // Estado abstrato: casca com o menu lateral
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.noticias', {
    url: '/noticias',
    views: {
      'menuContent': {
        templateUrl: 'templates/noticias.html',
        controller: 'NoticiasCtrl'
      }
    }
  })

  .state('app.noticiaDetalhe', {
    url: '/noticias/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/noticia-detalhe.html',
        controller: 'NoticiaDetalheCtrl'
      }
    }
  })

  .state('app.perfil', {
    url: '/perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  })

  .state('app.financeiro', {
    url: '/financeiro',
    views: {
      'menuContent': {
        templateUrl: 'templates/financeiro.html',
        controller: 'FinanceiroCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');
});
