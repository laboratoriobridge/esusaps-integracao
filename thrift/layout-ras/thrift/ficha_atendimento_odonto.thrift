include "./common.thrift"
include "./solicitacao_oci.thrift"

namespace java br.gov.saude.esusab.ras.atendodonto
namespace php br.gov.saude.esusab.ras.atendodonto
namespace delphi br.gov.saude.esusab.ras.atendodonto
namespace csharp br.gov.saude.esusab.ras.atendodonto
namespace rb br.gov.saude.esusab.ras.atendodonto
namespace go br.gov.saude.esusab.ras.atendodonto
namespace py br.gov.saude.esusab.ras.atendodonto

struct ProcedimentoQuantidadeThrift {
	1:optional string coMsProcedimento;
	2:optional i32 quantidade;
}

struct FichaAtendimentoOdontologicoChildThrift {
	1:optional i64 dtNascimento;
	2:optional string cnsCidadao;
	3:optional string numProntuario;
	4:optional bool gestante;
	5:optional bool necessidadesEspeciais;
	6:optional i64 localAtendimento;
	7:optional i64 tipoAtendimento;
	8:optional list<i64> tiposEncamOdonto;
	9:optional list<i64> tiposFornecimOdonto;
	10:optional list<i64> tiposVigilanciaSaudeBucal;
	11:optional list<i64> tiposConsultaOdonto;
	12:optional list<ProcedimentoQuantidadeThrift> procedimentosRealizados;
	14:optional i64 sexo;
	15:optional i64 turno;
	16:optional i64 dataHoraInicialAtendimento;
	17:optional i64 dataHoraFinalAtendimento;
	18:optional string cpfCidadao;
	19:optional list<common.MedicamentoThrift> medicamentos;
	20:optional list<common.EncaminhamentoExternoThrift> encaminhamentos;
	21:optional list<common.ResultadosExameThrift> resultadosExames;
	27:optional common.MedicoesThrift medicoes;
	28:optional list<common.ProblemaCondicaoThrift> problemasCondicoes;
	29:optional common.IvcfThrift ivcf;
	30:optional list<common.ExameThrift> exame;
	31:optional list<solicitacao_oci.SolicitacaoOciThrift> solicitacoesOci;
	32:optional bool stNaoPossuiCpf;
	33:optional i64 justificativaNaoPossuiCpf;
}

struct FichaAtendimentoOdontologicoMasterThrift {
	1:required string uuidFicha;
	2:optional common.VariasLotacoesHeaderThrift headerTransport;
	3:optional list<FichaAtendimentoOdontologicoChildThrift> atendimentosOdontologicos;
	4:optional i32 tpCdsOrigem;
}
