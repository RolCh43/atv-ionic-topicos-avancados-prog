angular.module('ucsalApp')

.controller('NoticiaDetalheCtrl', function($scope, $stateParams, NoticiasService) {
  $scope.publicacao = NoticiasService.buscarPorId($stateParams.id);
});
