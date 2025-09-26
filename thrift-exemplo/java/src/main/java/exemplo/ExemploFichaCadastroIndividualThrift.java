package exemplo;

import java.util.Arrays;
import java.util.Calendar;
import java.util.UUID;

import br.gov.saude.esus.transport.common.api.configuracaodestino.VersaoThrift;
import br.gov.saude.esus.transport.common.generated.thrift.DadoInstalacaoThrift;
import br.gov.saude.esus.transport.common.generated.thrift.DadoTransporteThrift;
import br.gov.saude.esusab.ras.cadastroindividual.CadastroIndividualThrift;
import br.gov.saude.esusab.ras.cadastroindividual.CondicoesDeSaudeThrift;
import br.gov.saude.esusab.ras.cadastroindividual.EmSituacaoDeRuaThrift;
import br.gov.saude.esusab.ras.cadastroindividual.IdentificacaoUsuarioCidadaoThrift;
import br.gov.saude.esusab.ras.cadastroindividual.InformacoesSocioDemograficasThrift;
import br.gov.saude.esusab.ras.cadastroindividual.InformacoesSocioEconomicasThrift;
import br.gov.saude.esusab.ras.cadastroindividual.SaidaCidadaoCadastroThrift;
import br.gov.saude.esusab.ras.common.UnicaLotacaoHeaderThrift;

import exemplo.common.SerializadorThrift;

public class ExemploFichaCadastroIndividualThrift {
	private static long TIPO_DADO_SERIALIZADO_FICHA_CADASTRO_INDIVIDUAL = 2;

	public static DadoTransporteThrift getDadoTransporte() {
		// Passo 1: Popular a ficha
		CadastroIndividualThrift thriftFichaCadIndividual = getFicha();

		// Passo 2: Popular o DadoTransporte usando os dados da ficha e do software que está enviando.
		DadoTransporteThrift dadoTransporteThrift = getDadoTransporte(thriftFichaCadIndividual);

		// Passo 3: Serializar a ficha utilizando o TBinaryProtocol da biblioteca thrift.
		byte[] fichaSerializada = SerializadorThrift.serializar(thriftFichaCadIndividual);

		// Passo 4: Adicionar a ficha serializada e seu tipo no DadoTransporte.
		dadoTransporteThrift.setTipoDadoSerializado(TIPO_DADO_SERIALIZADO_FICHA_CADASTRO_INDIVIDUAL);
		dadoTransporteThrift.setDadoSerializado(fichaSerializada);

		// Não esquecer de informar a versão da ficha a ser exportada (não é a versão do e-SUS AB)
		VersaoThrift versaoThrift = new VersaoThrift(5, 4, 0);
		dadoTransporteThrift.setVersao(versaoThrift);

		return dadoTransporteThrift;
	}

	/**
	 * Retorna um DadoTransporteThrift preenchido com valores válidos fictícios.
	 *
	 * @return DadoTransporteThrift
	 */

	public static DadoTransporteThrift getDadoTransporte(CadastroIndividualThrift ficha) {
		DadoTransporteThrift dadoTransporteThrift = new DadoTransporteThrift();

		dadoTransporteThrift.setUuidDadoSerializado(ficha.getUuid());
		dadoTransporteThrift.setIneDadoSerializado(ficha.getHeaderTransport().getIne());
		dadoTransporteThrift.setCodIbge(ficha.getHeaderTransport().getCodigoIbgeMunicipio());
		dadoTransporteThrift.setCnesDadoSerializado(ficha.getHeaderTransport().getCnes());

		DadoInstalacaoThrift originadora = new DadoInstalacaoThrift();
		originadora.setContraChave("123456");
		originadora.setCpfOuCnpj("11111111111");
		originadora.setEmail("a@b.com");
		originadora.setFone("999999999");
		originadora.setNomeOuRazaoSocial("Nome ou Razao Social Originadora");
		originadora.setUuidInstalacao(UUID.randomUUID().toString());
		dadoTransporteThrift.setOriginadora(originadora);

		DadoInstalacaoThrift remetente = new DadoInstalacaoThrift();
		remetente.setContraChave("789010");
		remetente.setCpfOuCnpj("11111111111");
		remetente.setEmail("b@a.com");
		remetente.setFone("98888888");
		remetente.setNomeOuRazaoSocial("Nome ou Razao Social Remetente");
		remetente.setUuidInstalacao(UUID.randomUUID().toString());
		dadoTransporteThrift.setRemetente(remetente);

		dadoTransporteThrift.setNumLote(0l);



		return dadoTransporteThrift;
	}

	/**
	 * Retorna um CadastroIndividualThrift preenchido com valores válidos fictícios..
	 */
	private static CadastroIndividualThrift getFicha() {
		CadastroIndividualThrift thriftCadIndividual = new CadastroIndividualThrift();

		thriftCadIndividual.setCondicoesDeSaude(getCondicoesDeSaude());
		thriftCadIndividual.setEmSituacaoDeRua(getEmSituacaoDeRua());
		thriftCadIndividual.setFichaAtualizada(true);
		thriftCadIndividual.setIdentificacaoUsuarioCidadao(getIdentificacaoUsuarioCidadao());
		thriftCadIndividual.setInformacoesSocioDemograficas(getInformacoesSocioDemograficas());
		thriftCadIndividual.setStatusTermoRecusaCadastroIndividualAtencaoBasica(false);
		thriftCadIndividual.setTpCdsOrigem(1);
		thriftCadIndividual.setUuid(UUID.randomUUID().toString());
		thriftCadIndividual.setUuidFichaOriginadora(UUID.randomUUID().toString());
		thriftCadIndividual.setSaidaCidadaoCadastro(getSaidaCidadaoCadastro());
		thriftCadIndividual.setHeaderTransport(getHeaderTransport());
		thriftCadIndividual.setInformacoesSocioEconomicas(getInformacoesSocioEconomicas());

		return thriftCadIndividual;
	}

	/**
	 * Retorna um CondicoesDeSaudeThrift preenchido com valores válidos fictícios..
	 */
	private static CondicoesDeSaudeThrift getCondicoesDeSaude() {
		CondicoesDeSaudeThrift thriftCondicoesDeSaude = new CondicoesDeSaudeThrift();

		thriftCondicoesDeSaude.setDescricaoCausaInternacaoEm12Meses("Descrição causa internação últimos 12 meses");
		thriftCondicoesDeSaude.setDescricaoOutraCondicao1("Condicao 1");
		thriftCondicoesDeSaude.setDescricaoOutraCondicao2("Condicao 2");
		thriftCondicoesDeSaude.setDescricaoOutraCondicao3("Condicao 3");
		thriftCondicoesDeSaude.setDescricaoPlantasMedicinaisUsadas("Plantas medicinais usadas");

		thriftCondicoesDeSaude.setDoencaCardiaca(Arrays.asList(24L, 25L));
		thriftCondicoesDeSaude.setDoencaRespiratoria(Arrays.asList(30L, 31L, 32L, 33L));
		thriftCondicoesDeSaude.setDoencaRins(Arrays.asList(27L, 28L, 29L));

		thriftCondicoesDeSaude.setMaternidadeDeReferencia("Maternidade de Referência");

		thriftCondicoesDeSaude.setSituacaoPeso(75L);

		thriftCondicoesDeSaude.setStatusEhDependenteAlcool(false);
		thriftCondicoesDeSaude.setStatusEhDependenteOutrasDrogas(true);
		thriftCondicoesDeSaude.setStatusEhFumante(false);
		thriftCondicoesDeSaude.setStatusEhGestante(true);
		thriftCondicoesDeSaude.setStatusEstaAcamado(false);
		thriftCondicoesDeSaude.setStatusEstaDomiciliado(true);
		thriftCondicoesDeSaude.setStatusTemDiabetes(true);
		thriftCondicoesDeSaude.setStatusTemDoencaRespiratoria(false);
		thriftCondicoesDeSaude.setStatusTemHanseniase(true);
		thriftCondicoesDeSaude.setStatusTemHipertensaoArterial(false);
		thriftCondicoesDeSaude.setStatusTemTeveCancer(true);
		thriftCondicoesDeSaude.setStatusTemTeveDoencasRins(false);
		thriftCondicoesDeSaude.setStatusTemTuberculose(true);
		thriftCondicoesDeSaude.setStatusTeveAvcDerrame(false);
		thriftCondicoesDeSaude.setStatusTeveDoencaCardiaca(true);
		thriftCondicoesDeSaude.setStatusTeveInfarto(false);
		thriftCondicoesDeSaude.setStatusTeveInternadoEm12Meses(true);
		thriftCondicoesDeSaude.setStatusUsaOutrasPraticasIntegrativasOuComplementares(false);
		thriftCondicoesDeSaude.setStatusUsaPlantaMedicinais(true);
		thriftCondicoesDeSaude.setStatusDiagnosticoMental(false);

		return thriftCondicoesDeSaude;
	}

	/**
	 * Retorna um EmSituacaoDeRuaThrift preenchido com valores válidos fictícios..
	 */
	private static EmSituacaoDeRuaThrift getEmSituacaoDeRua() {
		EmSituacaoDeRuaThrift situacaoRua = new EmSituacaoDeRuaThrift();

		situacaoRua.setGrauParentescoFamiliarFrequentado("Irmão");
		situacaoRua.setHigienePessoalSituacaoRua(Arrays.asList(42L, 43L, 44L, 45L));
		situacaoRua.setOrigemAlimentoSituacaoRua(Arrays.asList(37L, 38L, 39L, 40L, 41L));
		situacaoRua.setOutraInstituicaoQueAcompanha("Centro de Apoio Social");
		situacaoRua.setQuantidadeAlimentacoesAoDiaSituacaoRua(34L);
		situacaoRua.setStatusAcompanhadoPorOutraInstituicao(true);
		situacaoRua.setStatusPossuiReferenciaFamiliar(false);
		situacaoRua.setStatusRecebeBeneficio(true);
		situacaoRua.setStatusSituacaoRua(true);
		situacaoRua.setStatusTemAcessoHigienePessoalSituacaoRua(false);
		situacaoRua.setStatusVisitaFamiliarFrequentemente(true);
		situacaoRua.setTempoSituacaoRua(24L);

		return situacaoRua;
	}

	/**
	 * Retorna um IdentificacaoUsuarioCidadaoThrift preenchido com valores válidos fictícios..
	 */
	private static IdentificacaoUsuarioCidadaoThrift getIdentificacaoUsuarioCidadao() {
		IdentificacaoUsuarioCidadaoThrift identificacaoUsuarioCidadao = new IdentificacaoUsuarioCidadaoThrift();

		identificacaoUsuarioCidadao.setNomeSocial("Nome Social Fictício");
		identificacaoUsuarioCidadao.setCodigoIbgeMunicipioNascimento("2708501");
		identificacaoUsuarioCidadao.setDataNascimentoCidadao(System.currentTimeMillis());
		identificacaoUsuarioCidadao.setDesconheceNomeMae(false);
		identificacaoUsuarioCidadao.setEmailCidadao("email@ficticio.com");
		identificacaoUsuarioCidadao.setNacionalidadeCidadao(1L);
		identificacaoUsuarioCidadao.setNomeCidadao("Nome Cidadão Fictício");
		identificacaoUsuarioCidadao.setNomeMaeCidadao("Nome Mãe Cidadão Fictício");
		identificacaoUsuarioCidadao.setCnsCidadao("231259791070009");
		identificacaoUsuarioCidadao.setCnsResponsavelFamiliar("543210987654321");
		identificacaoUsuarioCidadao.setTelefoneCelular("48999999999");
		identificacaoUsuarioCidadao.setNumeroNisPisPasep("98765432100");
		identificacaoUsuarioCidadao.setPaisNascimento(1L);
		identificacaoUsuarioCidadao.setRacaCorCidadao(3L);
		identificacaoUsuarioCidadao.setSexoCidadao(0L);
		identificacaoUsuarioCidadao.setStatusEhResponsavel(true);
		identificacaoUsuarioCidadao.setEtnia(2L);
		identificacaoUsuarioCidadao.setNomePaiCidadao("Nome Pai Cidadão Fictício");
		identificacaoUsuarioCidadao.setDesconheceNomePai(false);
		identificacaoUsuarioCidadao.setDtNaturalizacao(System.currentTimeMillis());
		identificacaoUsuarioCidadao.setPortariaNaturalizacao(null);
		identificacaoUsuarioCidadao.setDtEntradaBrasil(System.currentTimeMillis() - 100000);
		identificacaoUsuarioCidadao.setMicroArea("02");
		identificacaoUsuarioCidadao.setStForaArea(false);
		identificacaoUsuarioCidadao.setCpfCidadao("78231092048");
		identificacaoUsuarioCidadao.setCpfResponsavelFamiliar("70789564009");

		return identificacaoUsuarioCidadao;
	}

	/**
	 * Retorna um InformacoesSocioDemograficasThrift preenchido com valores válidos fictícios..
	 */
	private static InformacoesSocioDemograficasThrift getInformacoesSocioDemograficas() {
		InformacoesSocioDemograficasThrift informacoesSocioDemograficas = new InformacoesSocioDemograficasThrift();

		informacoesSocioDemograficas.setDeficienciasCidadao(Arrays.asList(1L, 2L));
		informacoesSocioDemograficas.setGrauInstrucaoCidadao(3L);
		informacoesSocioDemograficas.setOcupacaoCodigoCbo2002("301105");
		informacoesSocioDemograficas.setStatusDesejaInformarOrientacaoSexual(true);
		informacoesSocioDemograficas.setOrientacaoSexualCidadao(148L);
		informacoesSocioDemograficas.setRelacaoParentescoCidadao(144L);
		informacoesSocioDemograficas.setSituacaoMercadoTrabalhoCidadao(66L);
		informacoesSocioDemograficas.setStatusFrequentaBenzedeira(false);
		informacoesSocioDemograficas.setStatusFrequentaEscola(true);
		informacoesSocioDemograficas.setStatusMembroPovoComunidadeTradicional(false);
		informacoesSocioDemograficas.setStatusParticipaGrupoComunitario(true);
		informacoesSocioDemograficas.setStatusPossuiPlanoSaudePrivado(false);
		informacoesSocioDemograficas.setStatusTemAlgumaDeficiencia(true);
		informacoesSocioDemograficas.setStatusDesejaInformarIdentidadeGenero(true);
		informacoesSocioDemograficas.setIdentidadeGeneroCidadao(149L);
		informacoesSocioDemograficas.setResponsavelPorCrianca(Arrays.asList(133L, 134L));
		informacoesSocioDemograficas.setCoPovoComunidadeTradicional(1L);

		return informacoesSocioDemograficas;
	}

	/**
	 * Retorna um SaidaCidadaoCadastroThrift preenchido com valores válidos fictícios..
	 */
	private static SaidaCidadaoCadastroThrift getSaidaCidadaoCadastro() {
		SaidaCidadaoCadastroThrift saidaCidadaoCadastro = new SaidaCidadaoCadastroThrift();

		saidaCidadaoCadastro.setMotivoSaidaCidadao(1L);
		saidaCidadaoCadastro.setDataObito(System.currentTimeMillis());
		saidaCidadaoCadastro.setNumeroDO("123456789");

		return saidaCidadaoCadastro;
	}

	/**
	 * Retorna um InformacoesSocioEconomicasThrift preenchido com valores válidos fictícios..
	 */
	private static InformacoesSocioEconomicasThrift getInformacoesSocioEconomicas() {
		InformacoesSocioEconomicasThrift informacoesSocioEconomicas = new InformacoesSocioEconomicasThrift();

		informacoesSocioEconomicas.setAlimentosAcabaramAntesTerDinheiroComprarMais(true);
		informacoesSocioEconomicas.setComeuAlgunsAlimentosQueTinhaDinheiroAcabou(true);

		return informacoesSocioEconomicas;
	}


	/**
	 * Retorna um UnicaLotacaoHeaderThrift preenchido com valores válidos fictícios..
	 */
	private static UnicaLotacaoHeaderThrift getHeaderTransport() {
		UnicaLotacaoHeaderThrift headerThrift = new UnicaLotacaoHeaderThrift();

		Calendar dataAtendimento = Calendar.getInstance();
		dataAtendimento.set(2019, 11, 20);
		headerThrift.setDataAtendimento(dataAtendimento.getTimeInMillis());

		headerThrift.setCboCodigo_2002("223212");
		headerThrift.setCnes("7381123");
		headerThrift.setCodigoIbgeMunicipio("4205407");
		headerThrift.setIne("0000406465");
		headerThrift.setProfissionalCNS("898001160660761");

		return headerThrift;
	}
}
