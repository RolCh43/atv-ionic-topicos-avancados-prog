/**
 * AuthService - credenciais mockadas e sessao do aluno (em memoria).
 */
angular.module('ucsalApp')

.factory('AuthService', function($rootScope, AlunoService) {
  // ---- MOCK de credenciais ----
  var credenciais = [
    { matricula: '20261001', senha: '123456' },
    { matricula: '20261002', senha: 'abc123' }
  ];

  var alunoLogado = null;

  return {
    /** Retorna { sucesso: boolean, mensagem: string } */
    login: function(matricula, senha) {
      if (!matricula || !senha) {
        return { sucesso: false, mensagem: 'Informe matricula e senha.' };
      }
      for (var i = 0; i < credenciais.length; i++) {
        if (credenciais[i].matricula === matricula && credenciais[i].senha === senha) {
          alunoLogado = AlunoService.buscarPorMatricula(matricula);
          $rootScope.alunoLogado = alunoLogado;
          return { sucesso: true, mensagem: 'Login realizado.' };
        }
      }
      return { sucesso: false, mensagem: 'Matricula ou senha invalidos.' };
    },

    logout: function() {
      alunoLogado = null;
      $rootScope.alunoLogado = null;
    },

    estaAutenticado: function() { return alunoLogado !== null; },

    getAlunoLogado: function() { return alunoLogado; }
  };
});
