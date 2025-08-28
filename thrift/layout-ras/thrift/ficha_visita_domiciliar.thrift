include "./common.thrift"

namespace java br.gov.saude.esusab.ras.visitadomiciliar
namespace php br.gov.saude.esusab.ras.visitadomiciliar
namespace delphi br.gov.saude.esusab.ras.visitadomiciliar
namespace csharp br.gov.saude.esusab.ras.visitadomiciliar
namespace rb br.gov.saude.esusab.ras.visitadomiciliar
namespace go br.gov.saude.esusab.ras.visitadomiciliar
namespace py br.gov.saude.esusab.ras.visitadomiciliar

struct FichaVisitaDomiciliarChildThrift {
	1:optional i64 turno;
	2:optional string numProntuario;
	3:optional string cnsCidadao;
	4:optional i64 dtNascimento;
	5:optional i64 sexo;
	6:optional bool statusVisitaCompartilhadaOutroProfissional;
	7:optional list<i64> motivosVisita;
	8:optional i64 desfecho;
	9:optional string microArea;
	10:optional bool stForaArea;
	11:optional i64 tipoDeImovel;
	12:optional double pesoAcompanhamentoNutricional;
	13:optional double alturaAcompanhamentoNutricional;
	14:optional string cpfCidadao;
	15:optional i32 pressaoSistolica;
	16:optional i32 pressaoDiastolica;
	17:optional double temperatura;
	18:optional i64 tipoGlicemia;
	19:optional i32 glicemia;
	20:optional double latitude;
	21:optional double longitude;
	22:optional string uuidOrigemCadastroDomiciliar;
	23:optional common.IvcfThrift ivcf;
}

struct FichaVisitaDomiciliarMasterThrift {
	1:required string uuidFicha;
	2:optional i32 tpCdsOrigem;
	3:optional common.UnicaLotacaoHeaderThrift headerTransport;
	4:optional list<FichaVisitaDomiciliarChildThrift> visitasDomiciliares;
}