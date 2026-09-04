include "./common.thrift"

namespace java br.gov.saude.esusab.ras.complementarzika
namespace php br.gov.saude.esusab.ras.complementarzika
namespace delphi br.gov.saude.esusab.ras.complementarzika
namespace csharp br.gov.saude.esusab.ras.complementarzika
namespace rb br.gov.saude.esusab.ras.complementarzika
namespace go br.gov.saude.esusab.ras.complementarzika
namespace py br.gov.saude.esusab.ras.complementarzika

struct FichaComplementarZikaMicrocefaliaThrift {
	1:optional common.UnicaLotacaoHeaderThrift headerTransport;
	2:required string uuidFicha;
	3:optional i32 tpCdsOrigem;
	4:optional i64 turno;
	5:optional string cnsCidadao;
	6:optional string cnsResponsavelFamiliar;
	7:optional i64 dataRealizacaoTesteOlhinho;
	8:optional i64 coResultadoTesteOlhinho;
	9:optional i64 dataRealizacaoExameFundoOlho;
	10:optional i64 coResultadoExameFundoOlho;
	11:optional i64 dataRealizacaoTesteOrelhinha;
	12:optional i64 coResultadoTesteOrelhinha;
	13:optional i64 dataRealizacaoUSTransfontanela;
	14:optional i64 coResultadoUsTransfontanela;
	15:optional i64 dataRealizacaoTomografiaComputadorizada;
	16:optional i64 coResultadoTomografiaComputadorizada;
	17:optional i64 dataRealizacaoRessonanciaMagnetica;
	18:optional i64 coResultadoRessonanciaMagnetica;
	19:optional string cpfCidadao;
	20:optional string cpfResponsavelFamiliar;
	21:optional bool stNaoPossuiCpf;
	22:optional i64 justificativaNaoPossuiCpf;
}