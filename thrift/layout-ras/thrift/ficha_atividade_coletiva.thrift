include "./common.thrift"

namespace java br.gov.saude.esusab.ras.atividadecoletiva
namespace php br.gov.saude.esusab.ras.atividadecoletiva
namespace delphi br.gov.saude.esusab.ras.atividadecoletiva
namespace csharp br.gov.saude.esusab.ras.atividadecoletiva
namespace rb br.gov.saude.esusab.ras.atividadecoletiva
namespace go br.gov.saude.esusab.ras.atividadecoletiva
namespace py br.gov.saude.esusab.ras.atividadecoletiva

struct ParticipanteRowItemThrift {
	1:optional string cnsParticipante;
	2:optional i64 dataNascimento;
	3:optional bool avaliacaoAlterada;
	4:optional double peso;
	5:optional double altura;
	6:optional bool cessouHabitoFumar;
	7:optional bool abandonouGrupo;
	8:optional i64 sexo;
	9:optional string cpfParticipante;
	10:optional bool stNaoPossuiCpf;
	11:optional i64 justificativaNaoPossuiCpf;
}

struct ProfissionalCboRowItemThrift {
	1:optional string cnsProfissional;
	2:optional string codigoCbo2002;
}

struct FichaAtividadeColetivaThrift {
	1:required string uuidFicha;
	4:optional string outraLocalidade;
	7:optional i64 inep;
	11:optional i32 numParticipantes;
	12:optional i32 numAvaliacoesAlteradas;
	13:optional list<ProfissionalCboRowItemThrift> profissionais;
	14:optional i64 atividadeTipo;
	15:optional list<i64> temasParaReuniao;
	16:optional list<i64> publicoAlvo;
	18:optional list<ParticipanteRowItemThrift> participantes;
	19:optional i32 tbCdsOrigem;
	21:optional string cnesLocalAtividade;
	22:optional string procedimento;
	23:optional i64 turno;
	24:optional common.UnicaLotacaoHeaderThrift headerTransport;	
	25:optional list<i64> temasParaSaude;
	26:optional list<i64> praticasEmSaude;
	27:optional bool pseEducacao;
	28:optional bool pseSaude;
}