include "./common.thrift"

namespace java br.gov.saude.esusab.ras.cadastroindividual
namespace php br.gov.saude.esusab.ras.cadastroindividual
namespace delphi br.gov.saude.esusab.ras.cadastroindividual
namespace csharp br.gov.saude.esusab.ras.cadastroindividual
namespace rb br.gov.saude.esusab.ras.cadastroindividual
namespace go br.gov.saude.esusab.ras.cadastroindividual
namespace py br.gov.saude.esusab.ras.cadastroindividual

struct CondicoesDeSaudeThrift {
	1:optional string descricaoCausaInternacaoEm12Meses,
	2:optional string descricaoOutraCondicao1,
	3:optional string descricaoOutraCondicao2,
	4:optional string descricaoOutraCondicao3,
	5:optional string descricaoPlantasMedicinaisUsadas,
	6:optional list<i64> doencaCardiaca,
	7:optional list<i64> doencaRespiratoria,
	8:optional list<i64> doencaRins,
	9:optional string maternidadeDeReferencia,
	10:optional i64 situacaoPeso,
	11:optional bool statusEhDependenteAlcool,
	12:optional bool statusEhDependenteOutrasDrogas,
	13:optional bool statusEhFumante,
	14:optional bool statusEhGestante,
	15:optional bool statusEstaAcamado,
	16:optional bool statusEstaDomiciliado,
	17:optional bool statusTemDiabetes,
	18:optional bool statusTemDoencaRespiratoria,
	19:optional bool statusTemHanseniase,
	20:optional bool statusTemHipertensaoArterial,
	21:optional bool statusTemTeveCancer,
	22:optional bool statusTemTeveDoencasRins,
	23:optional bool statusTemTuberculose,
	24:optional bool statusTeveAvcDerrame,
	25:optional bool statusTeveDoencaCardiaca,
	26:optional bool statusTeveInfarto,
	27:optional bool statusTeveInternadoEm12Meses,
	29:optional bool statusUsaOutrasPraticasIntegrativasOuComplementares,
	30:optional bool statusUsaPlantaMedicinais,
	31:optional bool statusDiagnosticoMental
}

struct EmSituacaoDeRuaThrift {
	1:optional string grauParentescoFamiliarFrequentado,
	2:optional list<i64> higienePessoalSituacaoRua,
	3:optional list<i64> origemAlimentoSituacaoRua,
	4:optional string outraInstituicaoQueAcompanha,
	5:optional i64 quantidadeAlimentacoesAoDiaSituacaoRua,
	6:optional bool statusAcompanhadoPorOutraInstituicao,
	7:optional bool statusPossuiReferenciaFamiliar,
	8:optional bool statusRecebeBeneficio,
	9:optional bool statusSituacaoRua,
	10:optional bool statusTemAcessoHigienePessoalSituacaoRua,
	11:optional bool statusVisitaFamiliarFrequentemente,
	12:optional i64 tempoSituacaoRua
}

struct IdentificacaoUsuarioCidadaoThrift {
	1:optional string nomeSocial,
	2:optional string codigoIbgeMunicipioNascimento,
	3:optional i64 dataNascimentoCidadao,
	5:optional bool desconheceNomeMae,
	6:optional string emailCidadao,
	7:optional i64 nacionalidadeCidadao,
	8:optional string nomeCidadao,
	9:optional string nomeMaeCidadao,
	10:optional string cnsCidadao,
	11:optional string cnsResponsavelFamiliar,
	12:optional string telefoneCelular,
	13:optional string numeroNisPisPasep,
	14:optional i64 paisNascimento,
	15:optional i64 racaCorCidadao,
	16:optional i64 sexoCidadao,
	17:optional bool statusEhResponsavel,
	18:optional i64 etnia,
	19:optional string nomePaiCidadao,
	20:optional bool desconheceNomePai,
	21:optional i64 dtNaturalizacao,
	22:optional string portariaNaturalizacao,
	23:optional i64 dtEntradaBrasil,
	24:optional string microArea,
	25:optional bool stForaArea,
	26:optional string cpfCidadao,
	27:optional string cpfResponsavelFamiliar;
	28:optional i64 estadoCivil;
	29:optional i64 tipoSanguineo;
	30:optional string dnv;
	31:optional bool stNaoPossuiCpf;
	32:optional i64 justificativaNaoPossuiCpf;
}

struct InformacoesSocioDemograficasThrift {
	1:optional list<i64> deficienciasCidadao,
	2:optional i64 grauInstrucaoCidadao,
	4:optional string ocupacaoCodigoCbo2002,
	5:optional i64 orientacaoSexualCidadao,
	7:optional i64 relacaoParentescoCidadao,
	9:optional i64 situacaoMercadoTrabalhoCidadao,
	10:optional bool statusDesejaInformarOrientacaoSexual,
	11:optional bool statusFrequentaBenzedeira,
	12:optional bool statusFrequentaEscola,
	13:optional bool statusMembroPovoComunidadeTradicional,
	14:optional bool statusParticipaGrupoComunitario,
	15:optional bool statusPossuiPlanoSaudePrivado,
	16:optional bool statusTemAlgumaDeficiencia,
	17:optional i64 identidadeGeneroCidadao,
	18:optional bool statusDesejaInformarIdentidadeGenero,
	19:optional list<i64> responsavelPorCrianca,
	20:optional i64 coPovoComunidadeTradicional;
}

struct InformacoesSocioEconomicasThrift {
	1:optional bool alimentosAcabaramAntesTerDinheiroComprarMais;
	2:optional bool comeuAlgunsAlimentosQueTinhaDinheiroAcabou;
}

struct SaidaCidadaoCadastroThrift {
	1:optional i64 motivoSaidaCidadao;
	2:optional i64 dataObito;
	3:optional string numeroDO;
}

struct CadastroIndividualThrift {
	1:optional CondicoesDeSaudeThrift condicoesDeSaude,
	3:optional EmSituacaoDeRuaThrift emSituacaoDeRua,
	4:optional bool fichaAtualizada,
	5:optional IdentificacaoUsuarioCidadaoThrift identificacaoUsuarioCidadao,
	6:optional InformacoesSocioDemograficasThrift informacoesSocioDemograficas,
	7:optional bool statusTermoRecusaCadastroIndividualAtencaoBasica,
	8:optional i32 tpCdsOrigem,
	9:required string uuid,
	10:optional string uuidFichaOriginadora,
	12:optional SaidaCidadaoCadastroThrift saidaCidadaoCadastro,
	13:optional common.UnicaLotacaoHeaderThrift headerTransport,
	16:optional InformacoesSocioEconomicasThrift informacoesSocioEconomicas;
}
