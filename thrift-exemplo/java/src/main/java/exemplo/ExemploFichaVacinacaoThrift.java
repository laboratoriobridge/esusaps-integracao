package exemplo;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

import br.gov.saude.esus.transport.common.api.configuracaodestino.VersaoThrift;
import br.gov.saude.esus.transport.common.generated.thrift.DadoInstalacaoThrift;
import br.gov.saude.esus.transport.common.generated.thrift.DadoTransporteThrift;
import br.gov.saude.esusab.ras.vacinacao.FichaVacinacaoChildThrift;
import br.gov.saude.esusab.ras.vacinacao.FichaVacinacaoMasterThrift;
import br.gov.saude.esusab.ras.vacinacao.VacinaRowThrift;
import br.gov.saude.esusab.ras.common.UnicaLotacaoHeaderThrift;

import exemplo.common.SerializadorThrift;

public class ExemploFichaVacinacaoThrift {
	private static long TIPO_DADO_SERIALIZADO_FICHA_VACINACAO = 14;

	public static DadoTransporteThrift getDadoTransporte() {
		// Passo 1: Popular a ficha
		FichaVacinacaoMasterThrift thriftFichaVacinacao = getFicha();

		// Passo 2: Popular o DadoTransporte usando os dados da ficha e do software que está enviando.
		DadoTransporteThrift dadoTransporteThrift = getDadoTransporte(thriftFichaVacinacao);

		// Passo 3: Serializar a ficha utilizando o TBinaryProtocol da biblioteca thrift.
		byte[] fichaSerializada = SerializadorThrift.serializar(thriftFichaVacinacao);

		// Passo 4: Adicionar a ficha serializada e seu tipo no DadoTransporte.
		dadoTransporteThrift.setTipoDadoSerializado(TIPO_DADO_SERIALIZADO_FICHA_VACINACAO);
		dadoTransporteThrift.setDadoSerializado(fichaSerializada);

		// Não esquecer de informar a versão da ficha a ser exportada (não é a versão do e-SUS AB)
		VersaoThrift versaoThrift = new VersaoThrift(7, 3, 0);
		dadoTransporteThrift.setVersao(versaoThrift);

		return dadoTransporteThrift;
	}

	/**
	 * Retorna um DadoTransporteThrift preenchido com valores válidos fictícios.
	 *
	 * @return DadoTransporteThrift
	 */

	private static DadoTransporteThrift getDadoTransporte(FichaVacinacaoMasterThrift ficha) {
		DadoTransporteThrift dadoTransporteThrift = new DadoTransporteThrift();

		dadoTransporteThrift.setUuidDadoSerializado(ficha.getUuidFicha());
		dadoTransporteThrift.setIneDadoSerializado(ficha.getHeaderTransport().getIne());
		dadoTransporteThrift.setCodIbge(ficha.getHeaderTransport().getCodigoIbgeMunicipio());
		dadoTransporteThrift.setCnesDadoSerializado(ficha.getHeaderTransport().getCnes());

		DadoInstalacaoThrift originadora = new DadoInstalacaoThrift();
		originadora.setContraChave("123456");
		originadora.setCpfOuCnpj("11111111111");
		originadora.setEmail("a@b.com");
		originadora.setFone("999999999");
		originadora.setNomeOuRazaoSocial("Nome ou Razao Social Originadora");
		originadora.setUuidInstalacao("UUIDUNICO111");
		dadoTransporteThrift.setOriginadora(originadora);

		DadoInstalacaoThrift remetente = new DadoInstalacaoThrift();
		remetente.setContraChave("789010");
		remetente.setCpfOuCnpj("11111111111");
		remetente.setEmail("b@a.com");
		remetente.setFone("98888888");
		remetente.setNomeOuRazaoSocial("Nome ou Razao Social Remetente");
		remetente.setUuidInstalacao("UUIDUNICO222");
		dadoTransporteThrift.setRemetente(remetente);

		dadoTransporteThrift.setNumLote(0L);

		return dadoTransporteThrift;
	}

	/**
	 * Retorna uma FichaVacinacaoMasterThrift preenchida com valores válidos fictícios..
	 */
	private static FichaVacinacaoMasterThrift getFicha() {
		FichaVacinacaoMasterThrift thriftFichaVacinacao = new FichaVacinacaoMasterThrift();

		String uuidFicha = UUID.randomUUID().toString();
		thriftFichaVacinacao.setUuidFicha(uuidFicha);
		thriftFichaVacinacao.setHeaderTransport(getHeader());
		thriftFichaVacinacao.setTpCdsOrigem(3);
		thriftFichaVacinacao.setVacinacoes(getVacinacoes());

		return thriftFichaVacinacao;
	}

	/**
	 * Retorna um UnicaLotacaoHeaderThrift preenchido com valores válidos fictícios..
	 */
	private static UnicaLotacaoHeaderThrift getHeader() {
		UnicaLotacaoHeaderThrift headerThrift = new UnicaLotacaoHeaderThrift();

		Calendar dataAtendimento = Calendar.getInstance();
		dataAtendimento.set(2025, 8, 11);
		headerThrift.setDataAtendimento(dataAtendimento.getTimeInMillis());

		headerThrift.setCboCodigo_2002("223212");
		headerThrift.setCnes("7381123");
		headerThrift.setCodigoIbgeMunicipio("4205407");
		headerThrift.setIne("0000406465");
		headerThrift.setProfissionalCNS("898001160660761");

		return headerThrift;
	}

	/**
	 * Retorna uma lista de FichaVacinacaoChildThrift preenchida com valores válidos fictícios..
	 */
	private static List<FichaVacinacaoChildThrift> getVacinacoes() {
		List<FichaVacinacaoChildThrift> listaVacinacoes = new ArrayList<>();

		FichaVacinacaoChildThrift vacinacao1 = new FichaVacinacaoChildThrift();

		Calendar dataNascimento1 = Calendar.getInstance();
		dataNascimento1.set(2013, 12, 20);
		vacinacao1.setDtNascimento(dataNascimento1.getTimeInMillis());

		vacinacao1.setLocalAtendimento(2);
		vacinacao1.setCpfCidadao("81381513077");
		vacinacao1.setNumProntuario("35284");
		vacinacao1.setSexo(0);
		vacinacao1.setTurno(2);
		vacinacao1.setComunicanteHanseniase(false);
		vacinacao1.setViajante(false);
		
		vacinacao1.setVacinas(getVacinas1());

		Calendar dataInicioAtendimento = Calendar.getInstance();
		dataInicioAtendimento.set(2025, 8, 11, 10, 00);
		vacinacao1.setDataHoraInicialAtendimento(dataInicioAtendimento.getTimeInMillis());

		Calendar dataFimAtendimento = Calendar.getInstance();
		dataFimAtendimento.set(2025, 8, 11, 10, 20);
		vacinacao1.setDataHoraFinalAtendimento(dataFimAtendimento.getTimeInMillis());

		listaVacinacoes.add(vacinacao1);

		FichaVacinacaoChildThrift vacinacao2 = new FichaVacinacaoChildThrift();

		Calendar dataNascimento2 = Calendar.getInstance();
		dataNascimento2.set(2014, 11, 20);
		vacinacao2.setDtNascimento(dataNascimento2.getTimeInMillis());

		vacinacao2.setLocalAtendimento(1);
		vacinacao2.setCpfCidadao("61228957096");
		vacinacao2.setNumProntuario("43143");
		vacinacao2.setSexo(1);
		vacinacao2.setTurno(1);
		vacinacao2.setComunicanteHanseniase(false);
		vacinacao2.setViajante(false);
		vacinacao2.setCondicaoMaternal(1L); // Nenhuma

		vacinacao2.setVacinas(getVacinas2());

		vacinacao2.setDataHoraInicialAtendimento(dataInicioAtendimento.getTimeInMillis());
		vacinacao2.setDataHoraFinalAtendimento(dataFimAtendimento.getTimeInMillis());


		listaVacinacoes.add(vacinacao2);

		return listaVacinacoes;
	}

	/**
	 * Retorna uma lista de vacinas validas
	 */
	private static List<VacinaRowThrift> getVacinas1() {
		List<VacinaRowThrift> vacinas1 = new ArrayList<>();

		VacinaRowThrift vacina1 = new VacinaRowThrift();
		vacina1.setImunobiologico(5);
		vacina1.setEstrategiaVacinacao(2);
		vacina1.setDose(1);
		vacina1.setLote("DEF01");
		vacina1.setFabricante("BUILD SUSTAINABILITY");
		vacina1.setStRegistroAnterior(false);
		vacina1.setGrupoAtendimento(84);
		vacina1.setViaAdministracao(1);
		vacina1.setLocalAplicacao(17);
		vacina1.setStAplicadoExterior(false);
		vacina1.setCboPrescritorCodigo2002("225124");
		vacina1.setCid10MotivoIndicacao("E511");
		vacina1.setStPesquisaClinica(true);
		vacina1.setAnvisaNumeroRegistro("ABC123");
		vacina1.setAnvisaProtocoloEstudo("202508");
		vacina1.setAnvisaProtocoloVersao("V10");
		vacinas1.add(vacina1);

		VacinaRowThrift vacina2 = new VacinaRowThrift();
		vacina2.setImunobiologico(15);
		vacina2.setEstrategiaVacinacao(1);
		vacina2.setDose(9);
		vacina2.setLote("ABC");
		vacina2.setFabricante("AMERICAN JOIN ULTIMATE");
		vacina2.setStRegistroAnterior(false);
		vacina2.setViaAdministracao(5);
		vacina2.setLocalAplicacao(1);
		vacina2.setGrupoAtendimento(84);
		vacina2.setStAplicadoExterior(false);
		vacina2.setStPesquisaClinica(false);
		vacinas1.add(vacina2);				
		
		return vacinas1;
	}

private static List<VacinaRowThrift> getVacinas2() {
		List<VacinaRowThrift> vacinas2 = new ArrayList<>();

		Calendar dataRegAnterior = Calendar.getInstance();
		dataRegAnterior.set(2014, 11, 20);

		VacinaRowThrift vacina1 = new VacinaRowThrift();
		vacina1.setImunobiologico(25);
		vacina1.setDose(1);
		vacina1.setStRegistroAnterior(true);
		vacina1.setDataRegistroAnterior(dataRegAnterior.getTimeInMillis());
		vacinas2.add(vacina1);

		VacinaRowThrift vacina2 = new VacinaRowThrift();
		vacina2.setImunobiologico(9);
		vacina2.setDose(1);
		vacina2.setStRegistroAnterior(true);
		vacina2.setDataRegistroAnterior(dataRegAnterior.getTimeInMillis());
		vacinas2.add(vacina2);

		VacinaRowThrift vacina3 = new VacinaRowThrift();
		vacina3.setImunobiologico(15);
		vacina3.setEstrategiaVacinacao(1);
		vacina3.setDose(9);
		vacina3.setLote("ABC");
		vacina3.setFabricante("AMERICAN JOIN ULTIMATE");
		vacina3.setViaAdministracao(3);
		vacina3.setLocalAplicacao(3);
		vacina3.setStRegistroAnterior(false);
		vacina3.setGrupoAtendimento(5);
		vacina3.setStAplicadoExterior(true);
		vacina3.setStPesquisaClinica(false);
		vacinas2.add(vacina3);				

		VacinaRowThrift vacina4 = new VacinaRowThrift();
		vacina4.setImunobiologico(87);
		vacina4.setEstrategiaVacinacao(5);
		vacina4.setDose(2);
		vacina4.setLote("ABCD");
		vacina4.setFabricante("PFIZER/BIONTECH");
		vacina4.setStRegistroAnterior(false);
		vacina1.setViaAdministracao(6);
		vacina1.setLocalAplicacao(6);
		vacina4.setGrupoAtendimento(95);
		vacina4.setStAplicadoExterior(false);
		vacina4.setStPesquisaClinica(false);
		vacinas2.add(vacina4);		

		VacinaRowThrift vacina5 = new VacinaRowThrift();
		vacina5.setImunobiologico(87);
		vacina5.setEstrategiaVacinacao(11);
		vacina5.setDose(1);
		vacina5.setLote("ABC");
		vacina5.setFabricante("PFIZER/BIONTECH");
		vacina5.setStRegistroAnterior(true);
		vacina5.setDataRegistroAnterior(dataRegAnterior.getTimeInMillis());
		vacina5.setStAplicadoExterior(true);
		vacina5.setStPesquisaClinica(false);
		vacinas2.add(vacina5);
		
		return vacinas2;
	}

}
