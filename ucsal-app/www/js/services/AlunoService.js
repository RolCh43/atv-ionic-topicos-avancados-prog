/**
 * AlunoService - dados cadastrais mockados + metodos de edicao.
 * Persistencia em memoria com espelho opcional no localStorage.
 */
angular.module('ucsalApp')

.factory('AlunoService', function($window) {
  var CHAVE = 'ucsal.alunos';

  // ---- MOCK ----
  var alunos = [
    {
      matricula: '20261001',
      nome: 'Maria Clara Santos Oliveira',
      curso: 'Engenharia de Software',
      email: 'maria.clara@email.com',
      telefone: '(71) 99999-1001',
      endereco: { cep: '41720-200', rua: 'Av. Prof. Pinto de Aguiar, 2589', bairro: 'Pituacu', cidade: 'Salvador' }
    },
    {
      matricula: '20261002',
      nome: 'Joao Pedro Almeida Costa',
      curso: 'Engenharia de Software',
      email: 'joao.pedro@email.com',
      telefone: '(71) 98888-2002',
      endereco: { cep: '40170-110', rua: 'Rua Principal, 100', bairro: 'Federacao', cidade: 'Salvador' }
    }
  ];

  // Recupera edicoes salvas anteriormente (se houver)
  try {
    var salvo = $window.localStorage.getItem(CHAVE);
    if (salvo) { alunos = JSON.parse(salvo); }
  } catch (e) { /* localStorage indisponivel: segue em memoria */ }

  function persistir() {
    try { $window.localStorage.setItem(CHAVE, JSON.stringify(alunos)); } catch (e) {}
  }

  return {
    buscarPorMatricula: function(matricula) {
      for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula === matricula) { return alunos[i]; }
      }
      return null;
    },

    /** Atualiza apenas os campos editaveis (matricula/curso/nome ficam intactos). */
    atualizarContato: function(matricula, dados) {
      var aluno = this.buscarPorMatricula(matricula);
      if (!aluno) { return null; }
      aluno.email = dados.email;
      aluno.telefone = dados.telefone;
      aluno.endereco = angular.copy(dados.endereco);
      persistir();
      return aluno;
    }
  };
});
