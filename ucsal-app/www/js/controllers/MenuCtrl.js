angular.module('ucsalApp')

.controller('MenuCtrl', function($scope, $state, AuthService) {
  $scope.aluno = AuthService.getAlunoLogado();

  $scope.sair = function() {
    AuthService.logout();
    $state.go('login');
  };
});
