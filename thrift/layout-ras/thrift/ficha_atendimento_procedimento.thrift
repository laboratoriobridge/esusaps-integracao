include "./common.thrift"

namespace java br.gov.saude.esusab.ras.atendprocedimentos
namespace php br.gov.saude.esusab.ras.atendprocedimentos
namespace delphi br.gov.saude.esusab.ras.atendprocedimentos
namespace csharp br.gov.saude.esusab.ras.atendprocedimentos
namespace rb br.gov.saude.esusab.ras.atendprocedimentos
namespace go br.gov.saude.esusab.ras.atendprocedimentos
namespace py br.gov.saude.esusab.ras.atendprocedimentos

struct FichaProcedimentoChildThrift {
	1:optional string numProntuario;
	2:optional string cnsCidadao;
	3:optional i64 dtNascimento;
	4:optional i64 sexo;
	5:optional i64 localAtendimento;
	6:optional i64 turno;
	7:optional bool statusEscutaInicialOrientacao;
	8:optional list<string> procedimentos;
	10:optional i64 dataHoraInicialAtendimento;
	11:optional i64 dataHoraFinalAtendimento;
	12:optional string cpfCidadao;
	16:optional common.MedicoesThrift medicoes;
	17:optional common.IvcfThrift ivcf;
	18:optional bool stNaoPossuiCpf;
	19:optional i64 justificativaNaoPossuiCpf;
}

struct FichaProcedimentoMasterThrift {
	1:required string uuidFicha;
	2:optional i32 tpCdsOrigem;
	3:optional common.UnicaLotacaoHeaderThrift headerTransport;
	4:optional list<FichaProcedimentoChildThrift> atendProcedimentos;
	5:optional i64 numTotalAfericaoPa;
	6:optional i64 numTotalGlicemiaCapilar;
	7:optional i64 numTotalAfericaoTemperatura;
	8:optional i64 numTotalMedicaoAltura;
	9:optional i64 numTotalCurativoSimples;
	10:optional i64 numTotalMedicaoPeso;
	11:optional i64 numTotalColetaMaterialParaExameLaboratorial;
}
