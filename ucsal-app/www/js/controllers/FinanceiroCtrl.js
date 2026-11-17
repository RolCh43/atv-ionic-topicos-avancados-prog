angular.module('ucsalApp')

.controller('FinanceiroCtrl', function($scope, $timeout, $window, FinanceiroService) {
  $scope.semestres = FinanceiroService.listarSemestres();
  $scope.selecao = { semestre: FinanceiroService.semestreAtual() };
  $scope.mensalidades = [];
  $scope.copiadoMes = null;   // mes cuja copia foi confirmada (feedback visual)

  function carregar() {
    $scope.mensalidades = FinanceiroService.listarMensalidades($scope.selecao.semestre);
    $scope.totalAPagar = $scope.mensalidades
      .filter(function(m) { return m.status === 'A Pagar'; })
      .reduce(function(soma, m) { return soma + m.valor; }, 0);
  }

  $scope.trocarSemestre = function() {
    $scope.copiadoMes = null;
    carregar();
  };

  $scope.copiarCodigo = function(mensalidade) {
    var texto = mensalidade.codigoBarras;
    var confirmar = function() {
      $scope.copiadoMes = mensalidade.mes;
      $timeout(function() { $scope.copiadoMes = null; }, 2500);
    };

    if ($window.navigator.clipboard && $window.isSecureContext) {
      $window.navigator.clipboard.writeText(texto).then(function() {
        $scope.$apply(confirmar);
      });
    } else {
      // Fallback para ambientes sem Clipboard API
      var campo = $window.document.createElement('textarea');
      campo.value = texto;
      $window.document.body.appendChild(campo);
      campo.select();
      try { $window.document.execCommand('copy'); } catch (e) {}
      $window.document.body.removeChild(campo);
      confirmar();
    }
  };

  carregar();
});
