include "./common.thrift"
include "./solicitacao_oci.thrift"

namespace java br.gov.saude.esusab.ras.atendindividual
namespace php br.gov.saude.esusab.ras.atendindividual
namespace delphi br.gov.saude.esusab.ras.atendindividual
namespace csharp br.gov.saude.esusab.ras.atendindividual
namespace rb br.gov.saude.esusab.ras.atendindividual
namespace go br.gov.saude.esusab.ras.atendindividual
namespace py br.gov.saude.esusab.ras.atendindividual

struct ProblemaCondicaoAvaliacaoAIThrift {
	1:optional list<string> ciaps;
	2:optional string outroCiap1;
	3:optional string outroCiap2;
	4:optional string cid10;
	5:optional string cid10_2;
}

struct FichaAtendimentoIndividualChildThrift {
	1:optional string numeroProntuario;
	2:optional string cns;
	3:optional i64 dataNascimento;
	4:optional i64 localDeAtendimento;
	5:optional i64 sexo;
	6:optional i64 turno;
	7:optional i64 tipoAtendimento;
	10:optional i64 aleitamentoMaterno;
	11:optional i64 dumDaGestante;
	12:optional i32 idadeGestacional;
	13:optional i64 atencaoDomiciliarModalidade;
	17:optional list<common.ExameThrift> exame;
	18:optional bool vacinaEmDia;
	19:optional i64 pic;
	20:optional bool ficouEmObservacao;
	21:optional list<i64> nasfs;
	22:optional list<i64> condutas;
	23:optional bool stGravidezPlanejada;
	24:optional i32 nuGestasPrevias;
	25:optional i32 nuPartos;
	26:optional i64 racionalidadeSaude;
	28:optional i64 dataHoraInicialAtendimento;
	29:optional i64 dataHoraFinalAtendimento;
	30:optional string cpfCidadao;
	31:optional list<common.MedicamentoThrift> medicamentos;
	32:optional list<common.EncaminhamentoExternoThrift> encaminhamentos;
	33:optional list<common.ResultadosExameThrift> resultadosExames;
	35:optional common.LotacaoHeaderThrift finalizadorObservacao;
	36:optional i64 tipoParticipacaoCidadao;
	37:optional i64 tipoParticipacaoProfissionalConvidado;
	38:optional list<i64> emultis;
	39:optional common.MedicoesThrift medicoes;
	40:optional list<common.ProblemaCondicaoThrift> problemasCondicoes;
	41:optional common.IvcfThrift ivcf;
	43:optional list<solicitacao_oci.SolicitacaoOciThrift> solicitacoesOci;
	44:optional bool stNaoPossuiCpf;
	45:optional i64 justificativaNaoPossuiCpf;
}

struct FichaAtendimentoIndividualMasterThrift {
	1:optional common.VariasLotacoesHeaderThrift headerTransport;
	2:optional list<FichaAtendimentoIndividualChildThrift> atendimentosIndividuais;
	3:required string uuidFicha;
	4:optional i32 tpCdsOrigem;
}
