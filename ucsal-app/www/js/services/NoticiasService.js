/**
 * NoticiasService - noticias institucionais e eventos mockados.
 */
angular.module('ucsalApp')

.factory('NoticiasService', function() {
  // ---- MOCK ----
  var publicacoes = [
    {
      id: 1, categoria: 'Notícia', data: '2026-11-10',
      titulo: 'Rematrícula 2027.1 está aberta',
      imagem: 'img/noticia1.png',
      resumo: 'Prazo para rematrícula vai até 30 de novembro.',
      conteudo: 'A rematrícula para o semestre 2027.1 já está disponível. Os alunos devem regularizar pendências financeiras e confirmar a matrícula até o dia 30 de novembro. Em caso de dúvidas, procure a Secretaria Acadêmica nos campi Pituaçu ou Federação.'
    },
    {
      id: 2, categoria: 'Notícia', data: '2026-11-05',
      titulo: 'Edital de Iniciação Científica 2027',
      imagem: 'img/noticia2.png',
      resumo: 'Inscrições abertas para bolsas de IC.',
      conteudo: 'Estão abertas as inscrições para o programa de Iniciação Científica 2027. Podem participar estudantes regularmente matriculados a partir do 3º semestre. O edital completo contém cronograma, critérios de seleção e valores das bolsas.'
    },
    {
      id: 3, categoria: 'Evento', data: '2026-11-20',
      titulo: 'Semoc UCSal 2026',
      imagem: 'img/evento1.png',
      resumo: 'Semana de Mobilização Científica no campus Pituaçu.',
      conteudo: 'A UCSal participa da Semoc com palestras, minicursos, apresentações de trabalhos e exposição de projetos de extensão. A entrada é gratuita para alunos mediante apresentação da carteirinha.'
    },
    {
      id: 4, categoria: 'Evento', data: '2026-12-02',
      titulo: 'Maratona de Programação',
      imagem: 'img/evento2.png',
      resumo: 'Equipes da Engenharia de Software competem na regional.',
      conteudo: 'A UCSal inscreveu equipes na Maratona de Programação. Os treinos acontecem às quartas-feiras, no laboratório de informática do campus Federação. Venha torcer ou participe da próxima edição!'
    },
    {
      id: 5, categoria: 'Evento', data: '2026-12-10',
      titulo: 'Projeto de Extensão: Tecnologia na Comunidade',
      imagem: 'img/evento3.png',
      resumo: 'Oficinas de inclusão digital abertas à comunidade.',
      conteudo: 'Alunos de Engenharia de Software levam oficinas de inclusão digital para a comunidade do entorno. Voluntários podem se inscrever na coordenação do curso e obter horas de atividade complementar.'
    }
  ];

  return {
    listar: function() { return publicacoes; },

    buscarPorId: function(id) {
      id = parseInt(id, 10);
      for (var i = 0; i < publicacoes.length; i++) {
        if (publicacoes[i].id === id) { return publicacoes[i]; }
      }
      return null;
    }
  };
});
