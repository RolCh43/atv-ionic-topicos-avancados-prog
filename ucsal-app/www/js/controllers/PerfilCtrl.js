angular.module('ucsalApp')

.controller('PerfilCtrl', function($scope, $ionicPopup, AuthService, AlunoService) {
  var aluno = AuthService.getAlunoLogado();

  // Campos somente leitura (institucionais)
  $scope.aluno = aluno;

  // Copia de trabalho dos campos editaveis (so grava ao salvar)
  $scope.form = {
    email: aluno.email,
    telefone: aluno.telefone,
    endereco: angular.copy(aluno.endereco)
  };

  $scope.salvar = function(formulario) {
    if (formulario.$invalid) {
      $ionicPopup.alert({
        title: 'Atenção',
        template: 'Verifique os campos preenchidos (e-mail inválido ou campos vazios).'
      });
      return;
    }
    AlunoService.atualizarContato(aluno.matricula, $scope.form);
    $ionicPopup.alert({
      title: 'Sucesso',
      template: 'Dados atualizados com sucesso!'
    });
  };
});
