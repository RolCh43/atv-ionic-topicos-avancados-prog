angular.module('ucsalApp')

.controller('NoticiasCtrl', function($scope, $state, NoticiasService) {
  $scope.publicacoes = NoticiasService.listar();
  $scope.filtro = { categoria: '' };   // '' = todas
  $scope.categorias = ['Notícia', 'Evento'];

  $scope.lerMais = function(publicacao) {
    $state.go('app.noticiaDetalhe', { id: publicacao.id });
  };
});
