include "./common.thrift"

namespace java br.gov.saude.esusab.ras.consumoalimentar
namespace php br.gov.saude.esusab.ras.consumoalimentar
namespace delphi br.gov.saude.esusab.ras.consumoalimentar
namespace csharp br.gov.saude.esusab.ras.consumoalimentar
namespace rb br.gov.saude.esusab.ras.consumoalimentar
namespace go br.gov.saude.esusab.ras.consumoalimentar
namespace py br.gov.saude.esusab.ras.consumoalimentar

enum PerguntaCriancasMenoresSeisMesesEnumThrift {
	A_CRIANCA_ONTEM_TOMOU_LEITE_DO_PEITO = 1,
	MINGAU = 3,
	AGUA_CHA = 4,
	LEITE_VACA = 5,
	FORMULA_INFANTIL = 6,
	SUCO_FRUTA = 7,
	FRUTA = 8,
	COMIDA_DE_SAL = 9,
	OUTROS_ALIMENTOS_BEBIDAS = 10
}

enum PerguntaCriancasDeSeisVinteTresMesesEnumThrift {
	A_CRIANCA_ONTEM_TOMOU_LEITE_PEITO = 21,
	ONTEM_A_CRIANCA_COMEU_FRUTA_INTEIRA_PEDACO_AMASSADO = 22,
	SE_SIM_QUANTAS_VEZES = 23,
	ONTEM_A_CRIANCA_COMEU_COMIDA_DE_SAL = 24,
	SE_COMEU_COMIDA_DE_SAL_QUANTAS_VEZES = 25,
	SE_SIM_ESSA_COMIDA_FOI_OFERECIDA = 26,
	OUTRO_LEITE_QUE_NAO_LEITE_DO_PEITO = 28,
	MINGAU_COM_LEITE = 29,
	IOGURTE = 30,
	LEGUMES = 31,
	VEGETAL_OU_FRUTAS_COR_ALARANJADA_OU_FOLHAS_ESCURAS = 32,
	VERDURA_DE_FOLHA = 33,
	CARNE = 34,
	FIGADO = 35,
	FEIJAO = 36,
	ARROZ_BATATA_INHAME_MANDIOCA_FARINHA_MACARRAO = 37,
	HAMBURGUER_E_OU_EMBUTIDOS = 38,
	BEBIDAS_ADOCADAS = 39,
	MACARRAO_INSTANTANEO_SALGADINHOS_BISCOITOS = 40,
	BISCOITO_RECHEADO_DOCES_OU_GULOSEIMAS = 41
}

enum PerguntaCriancasComMaisDoisAnosEnumThrift {
	VOCE_TEM_COSTUME_DE_REALIZAR_AS_REFEICOES_ASSISTINDO_TV_MEXENDO_NO_COMPUTADOR_E_OU_CELULAR = 11,
	QUAIS_REFEICOES_VOCE_FAZ_AO_LONGO_DO_DIA = 12,
	FEIJAO = 14,
	FRUTAS_FRESCAS = 15,
	VERDURAS_E_OU_LEGUMES = 16,
	HAMBURGUER_E_OU_EMBUTIDOS = 17,
	BEBIDAS_ADOCADAS = 18,
	MACARRAO_INSTANTANEO_SALGADINHOS_BISCOITOS = 19,
	BISCOITO_RECHEADO_DOCES_OU_GULOSEIMAS = 20
}

enum RespostaUnicaEscolhaEnumThrift {
	SIM = 1,
	NAO = 2,
	NAO_SABE = 3,
	UMA_VEZ = 4,
	DUAS_VEZES = 5,
	TRES_VEZES_OU_MAIS = 6,
	EM_PEDACOS = 7,
	AMASSADA = 8,
	PASSADA_NA_PENEIRA = 9,
	LIQUIDIFICADA = 10,
	SO_O_CALDO = 11
}

enum RespostaMultiplaEscolhaEnumThrift {
	CAFE_DA_MANHA = 12,
	LANCHE_DA_MANHA = 13,
	ALMOCO = 14,
	LANCHE_DA_TARDE = 15,
	JANTAR = 16,
	CEIA = 17
}

struct PerguntaQuestionarioCriancasMenoresSeisMesesThrift {
	1:optional PerguntaCriancasMenoresSeisMesesEnumThrift pergunta;
	2:optional RespostaUnicaEscolhaEnumThrift respostaUnicaEscolha;
}

struct PerguntaQuestionarioCriancasDeSeisVinteTresMesesThrift {
	1:optional PerguntaCriancasDeSeisVinteTresMesesEnumThrift pergunta;
	2:optional RespostaUnicaEscolhaEnumThrift respostaUnicaEscolha;
}

struct PerguntaQuestionarioCriancasComMaisDoisAnosThrift {
	1:optional PerguntaCriancasComMaisDoisAnosEnumThrift pergunta;
	2:optional RespostaUnicaEscolhaEnumThrift respostaUnicaEscolha;
	3:optional list<RespostaMultiplaEscolhaEnumThrift> respostaMultiplaEscolha;
}

struct FichaConsumoAlimentarThrift {
	1:optional common.UnicaLotacaoHeaderThrift headerTransport;
	2:optional string cnsCidadao;                       
	4:optional i64 dataNascimento;
	5:optional i64 sexo;
	6:optional i64 localAtendimento;
	7:optional list<PerguntaQuestionarioCriancasMenoresSeisMesesThrift> perguntasQuestionarioCriancasMenoresSeisMeses;
	8:optional list<PerguntaQuestionarioCriancasDeSeisVinteTresMesesThrift> perguntasQuestionarioCriancasDeSeisVinteTresMeses;
	9:optional list<PerguntaQuestionarioCriancasComMaisDoisAnosThrift> perguntasQuestionarioCriancasComMaisDoisAnos;
	10:required string uuidFicha;
	11:optional i32 tpCdsOrigem;
	12:optional string cpfCidadao;
	13:optional bool stNaoPossuiCpf;
	14:optional i64 justificativaNaoPossuiCpf;
}