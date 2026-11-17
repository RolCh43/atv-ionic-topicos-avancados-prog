/**
 * FinanceiroService - mensalidades mockadas agrupadas por semestre letivo.
 */
angular.module('ucsalApp')

.factory('FinanceiroService', function() {
  // ---- MOCK ----
  var mensalidadesPorSemestre = {
    '2025.2': [
      { mes: 'Julho', vencimento: '2025-07-10', valor: 1720.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000010 12345.678901 1 90100000172000' },
      { mes: 'Agosto', vencimento: '2025-08-10', valor: 1720.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000020 12345.678901 1 90200000172000' },
      { mes: 'Setembro', vencimento: '2025-09-10', valor: 1720.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000030 12345.678901 1 90300000172000' },
      { mes: 'Outubro', vencimento: '2025-10-10', valor: 1720.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000040 12345.678901 1 90400000172000' },
      { mes: 'Novembro', vencimento: '2025-11-10', valor: 1720.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000050 12345.678901 1 90500000172000' },
      { mes: 'Dezembro', vencimento: '2025-12-10', valor: 1720.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000060 12345.678901 1 90600000172000' }
    ],
    '2026.1': [
      { mes: 'Janeiro', vencimento: '2026-01-10', valor: 1780.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000010 12345.678901 1 90100000178000' },
      { mes: 'Fevereiro', vencimento: '2026-02-10', valor: 1780.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000020 12345.678901 1 90200000178000' },
      { mes: 'Março', vencimento: '2026-03-10', valor: 1780.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000030 12345.678901 1 90300000178000' },
      { mes: 'Abril', vencimento: '2026-04-10', valor: 1780.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000040 12345.678901 1 90400000178000' },
      { mes: 'Maio', vencimento: '2026-05-10', valor: 1780.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000050 12345.678901 1 90500000178000' },
      { mes: 'Junho', vencimento: '2026-06-10', valor: 1780.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000060 12345.678901 1 90600000178000' }
    ],
    '2026.2': [
      { mes: 'Julho', vencimento: '2026-07-10', valor: 1850.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000010 12345.678901 1 90100000185000' },
      { mes: 'Agosto', vencimento: '2026-08-10', valor: 1850.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000020 12345.678901 1 90200000185000' },
      { mes: 'Setembro', vencimento: '2026-09-10', valor: 1850.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000030 12345.678901 1 90300000185000' },
      { mes: 'Outubro', vencimento: '2026-10-10', valor: 1850.00, status: 'Paga',
        codigoBarras: '23793.38128 60000.000040 12345.678901 1 90400000185000' },
      { mes: 'Novembro', vencimento: '2026-11-10', valor: 1850.00, status: 'A Pagar',
        codigoBarras: '23793.38128 60000.000050 12345.678901 1 90500000185000' },
      { mes: 'Dezembro', vencimento: '2026-12-10', valor: 1850.00, status: 'A Pagar',
        codigoBarras: '23793.38128 60000.000060 12345.678901 1 90600000185000' }
    ]
  };

  return {
    listarSemestres: function() {
      return Object.keys(mensalidadesPorSemestre).sort().reverse();
    },

    semestreAtual: function() { return '2026.2'; },

    listarMensalidades: function(semestre) {
      return mensalidadesPorSemestre[semestre] || [];
    }
  };
});
