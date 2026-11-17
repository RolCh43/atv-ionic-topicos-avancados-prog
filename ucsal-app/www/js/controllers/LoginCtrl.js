angular.module('ucsalApp')

.controller('LoginCtrl', function($scope, $state, AuthService) {
  $scope.form = { matricula: '', senha: '' };
  $scope.erro = '';

  // Se ja estiver logado (ex.: voltou para a tela de login), encerra a sessao
  AuthService.logout();

  $scope.entrar = function() {
    var resultado = AuthService.login($scope.form.matricula, $scope.form.senha);
    if (resultado.sucesso) {
      $scope.erro = '';
      $scope.form.senha = '';
      $state.go('app.noticias');
    } else {
      $scope.erro = resultado.mensagem;
    }
  };
});
