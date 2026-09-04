package exemplo;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

import br.gov.saude.esus.transport.common.api.configuracaodestino.VersaoThrift;
import br.gov.saude.esus.transport.common.generated.thrift.DadoInstalacaoThrift;
import br.gov.saude.esus.transport.common.generated.thrift.DadoTransporteThrift;
import br.gov.saude.esusab.ras.atendprocedimentos.FichaProcedimentoChildThrift;
import br.gov.saude.esusab.ras.atendprocedimentos.FichaProcedimentoMasterThrift;
import br.gov.saude.esusab.ras.common.UnicaLotacaoHeaderThrift;

import exemplo.common.SerializadorThrift;

public class ExemploFichaProcedimentoThrift {
	private static long TIPO_DADO_SERIALIZADO_FICHA_PROCEDIMENTO = 7;

	public static DadoTransporteThrift getDadoTransporte() {
		// Passo 1: Popular a ficha
		FichaProcedimentoMasterThrift thriftFichaProcedimento = getFicha();

		// Passo 2: Popular o DadoTransporte usando os dados da ficha e do software que está enviando.
		DadoTransporteThrift dadoTransporteThrift = getDadoTransporte(thriftFichaProcedimento);

		// Passo 3: Serializar a ficha utilizando o TBinaryProtocol da biblioteca thrift.
		byte[] fichaSerializada = SerializadorThrift.serializar(thriftFichaProcedimento);

		// Passo 4: Adicionar a ficha serializada e seu tipo no DadoTransporte.
		dadoTransporteThrift.setTipoDadoSerializado(TIPO_DADO_SERIALIZADO_FICHA_PROCEDIMENTO);
		dadoTransporteThrift.setDadoSerializado(fichaSerializada);

		// Não esquecer de informar a versão da ficha a ser exportada (não é a versão do e-SUS AB)
		VersaoThrift versaoThrift = new VersaoThrift(6, 3, 0);
		dadoTransporteThrift.setVersao(versaoThrift);

		return dadoTransporteThrift;
	}

	/**
	 * Retorna um DadoTransporteThrift preenchido com valores válidos fictícios.
	 *
	 * @return DadoTransporteThrift
	 */

	private static DadoTransporteThrift getDadoTransporte(FichaProcedimentoMasterThrift ficha) {
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
	 * Retorna uma FichaProcedimentoMasterThrift preenchida com valores válidos fictícios..
	 */
	private static FichaProcedimentoMasterThrift getFicha() {
		FichaProcedimentoMasterThrift thriftProcedimentos = new FichaProcedimentoMasterThrift();

		String uuidFicha = UUID.randomUUID().toString();
		thriftProcedimentos.setUuidFicha(uuidFicha);

		thriftProcedimentos.setAtendProcedimentos(getAtendimentos());
		thriftProcedimentos.setHeaderTransport(getHeader());

		thriftProcedimentos.setNumTotalAfericaoPa(1);
		thriftProcedimentos.setNumTotalAfericaoTemperatura(1);
		thriftProcedimentos.setNumTotalColetaMaterialParaExameLaboratorial(1);
		thriftProcedimentos.setNumTotalCurativoSimples(1);
		thriftProcedimentos.setNumTotalGlicemiaCapilar(1);
		thriftProcedimentos.setNumTotalMedicaoAltura(1);
		thriftProcedimentos.setNumTotalMedicaoPeso(1);

		thriftProcedimentos.setTpCdsOrigem(3);

		return thriftProcedimentos;
	}

	/**
	 * Retorna um UnicaLotacaoHeaderThrift preenchido com valores válidos fictícios..
	 */
	private static UnicaLotacaoHeaderThrift getHeader() {
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

	/**
	 * Retorna uma lista de FichaProcedimentoChildThrift preenchida com valores válidos fictícios..
	 */
	private static List<FichaProcedimentoChildThrift> getAtendimentos() {
		List<FichaProcedimentoChildThrift> listaProcedimentosAtendimento = new ArrayList<>();

		FichaProcedimentoChildThrift atendimentoProcedimentoThrift1 = new FichaProcedimentoChildThrift();

		Calendar dataNascimento = Calendar.getInstance();
		dataNascimento.set(2013, 12, 20);
		atendimentoProcedimentoThrift1.setDtNascimento(dataNascimento.getTimeInMillis());

		atendimentoProcedimentoThrift1.setLocalAtendimento(2);
		atendimentoProcedimentoThrift1.setCpfCidadao("81381513077");
		atendimentoProcedimentoThrift1.setStNaoPossuiCpf(false);
		atendimentoProcedimentoThrift1.setNumProntuario("35284");
		atendimentoProcedimentoThrift1.setSexo(0);
		atendimentoProcedimentoThrift1.setTurno(2);

		Calendar dataInicioAtendimento = Calendar.getInstance();
		dataInicioAtendimento.set(2020, 12, 20, 10, 00);
		atendimentoProcedimentoThrift1.setDataHoraInicialAtendimento(dataInicioAtendimento.getTimeInMillis());

		Calendar dataFimAtendimento = Calendar.getInstance();
		dataFimAtendimento.set(2020, 12, 20, 10, 20);
		atendimentoProcedimentoThrift1.setDataHoraFinalAtendimento(dataFimAtendimento.getTimeInMillis());

		atendimentoProcedimentoThrift1.setProcedimentos(getProcedimentosSia());
		atendimentoProcedimentoThrift1.setProcedimentos(getProcedimentos());

		listaProcedimentosAtendimento.add(atendimentoProcedimentoThrift1);

		FichaProcedimentoChildThrift atendimentoProcedimentoThrift2 = new FichaProcedimentoChildThrift();

		Calendar dataNascimento1 = Calendar.getInstance();
		dataNascimento1.set(2014, 11, 20);
		atendimentoProcedimentoThrift2.setDtNascimento(dataNascimento1.getTimeInMillis());

		atendimentoProcedimentoThrift2.setLocalAtendimento(1);
		atendimentoProcedimentoThrift2.setCpfCidadao("61228957096");
		atendimentoProcedimentoThrift2.setStNaoPossuiCpf(false);
		atendimentoProcedimentoThrift2.setNumProntuario("43143");
		atendimentoProcedimentoThrift2.setSexo(1);
		atendimentoProcedimentoThrift2.setTurno(1);

		atendimentoProcedimentoThrift2.setDataHoraInicialAtendimento(dataInicioAtendimento.getTimeInMillis());
		atendimentoProcedimentoThrift2.setDataHoraFinalAtendimento(dataFimAtendimento.getTimeInMillis());

		atendimentoProcedimentoThrift2.setProcedimentos(getProcedimentosSia());
		atendimentoProcedimentoThrift2.setProcedimentos(getProcedimentos());

		listaProcedimentosAtendimento.add(atendimentoProcedimentoThrift2);

		return listaProcedimentosAtendimento;
	}

	/**
	 * Retorna códigos gerais de procedimentos SIA.
	 */
	private static List<String> getProcedimentosSia() {
		List<String> siaList = new ArrayList<>();

		siaList.add("ABEX010"); // MAMOGRAFIA BILATERAL;
		siaList.add("ABEX007"); // HDL;
		siaList.add("ABEX009"); // LDL;

		return siaList;
	}

	/**
	 * Retorna códigos gerais de procedimentos realizados.
	 */
	private static List<String> getProcedimentos() {
		List<String> procedimentosList = new ArrayList<>();

		procedimentosList.add("ABPG019"); // SUTURA SIMPLES;
		procedimentosList.add("ABEX004"); // ELETROCARDIOGRAMA;

		return procedimentosList;
	}

}
