---
id: dicionario-fv
title: Modelo de Informação de Vacinação
order: 14
parent: estrutura_arquivos
---

### FichaVacinacaoMaster

#### \#1 uuidFicha

Código UUID para identificar o registro na base de dados nacional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 36     | 44     |

**Regra:** É recomendado concatenar o CNES na frente do UUID, de modo que os 7 dígitos (CNES) + 1 de hífen somados aos 36 (32 caracteres + 4 hífen) do UUID são a limitação de 44 bytes do campo. Formato canônico.

**Referência:** Para ver a referência sobre o UUID, acesse [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

#### \#2 tpCdsOrigem

Tipo de origem dos dados do registro.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Integer | Sim         | 1      | 1      |

**Regra:** Utilizar valor 3 (sistemas terceiros).

#### \#3 headerTransport

Profissional que realizou a vacinação.

| Tipo               | Obrigatório | Mínimo | Máximo |
| ------------------ | ----------- | ------ | ------ |
| UnicaLotacaoHeader | Sim         | -      | -      |

**Regra:** Somente as CBOs apresentadas na :link[Tabela 12 - CBOs que podem registrar o Modelo de Informação de Vacinação]{id=grupo_cbo anchor=modelo-de-informa-o-de-vacina-o} podem ser adicionadas no campo CBO do profissional.

**Referência:** :link[UnicaLotacaoHeader]{id=headerTransport anchor=unicalotacaoheader}.

#### \#4 vacinacoes

Lista de registros de Vacinação.

| Tipo                        | Obrigatório | Mínimo | Máximo |
| --------------------------- | ----------- | ------ | ------ |
| List\<FichaVacinacaoChild\> | Sim         | 1      | 99     |

**Referência:** [FichaVacinacaoChild](#fichavacinacaochild).

### FichaVacinacaoChild

#### \#1 turno

Código do turno onde aconteceu o atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Referência:** :link[Turno]{id=dicionario anchor=turno}.

#### \#2 numProntuario

Número do prontuário do cidadão na UBS.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Não         | 0      | 30     |

#### \#3 cnsCidadao

CNS do cidadão.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ----   | ----------- | ------ | ------ |
| String | Condicional | 15     | 15     |

**Regras**:

- Validado por algoritmo;
- É de preenchimento obrigatório se o campo [stNaoPossuiCpf](#18-stnaopossuicpf) = `true`;
- Não pode ser preenchido se o campo [cpfCidadao](#12-cpfcidadao) for preenchido.

**Referência:** O algoritmo de validação está presente em :link{id=algoritmo_CNS}.

#### \#4 dtNascimento

Data de nascimento do cidadão no formato epoch time.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Regra:** Não pode ser posterior à :link[dataAtendimento]{id=headerTransport anchor=5-dataatendimento} e anterior à 130 anos a partir da :link[dataAtendimento]{id=headerTransport anchor=5-dataatendimento}.

**Referência:** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Epoch Converter](https://www.epochconverter.com/).

#### \#5 sexo

Código do sexo do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Referência:** :link[Sexo]{id=dicionario anchor=sexo}.

#### \#6 localAtendimento

Código do local onde o atendimento foi realizado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Regra:** Apenas valores de `1` a `10`.

**Referência:** :link[LocalDeAtendimento]{id=dicionario anchor=localdeatendimento}.

#### \#7 viajante

Marcador que indica se o cidadão é viajante.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Boolean | Sim         | -      | -      |

#### \#8 comunicanteHanseniase

Marcador que indica se o cidadão é comunicante de hanseníase.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Boolean | Condicional | -      | -      |

**Regras:**

- O campo somente pode ser preenchido se for registrada uma vacinação com o imunobiológico `15 - BCG`;
- O campo é de preenchimento obrigatório quando for registrada uma vacinação com o imunobiológico `15 - BCG`.

#### \#9 vacinas

Registro das vacinas aplicadas.

| Tipo                    | Obrigatório | Mínimo | Máximo |
| ----------------------- | ----------- | ------ | ------ |
| List\<VacinaRowThrift\> | Sim         | 1      | 10     |

**Regras:**

- Não pode ter [imunobiológicos](#1-imunobiologico) repetidos se o campo [stRegistroAnterior](#7-stregistroanterior) = `false`;
- Quando o campo [stRegistroAnterior](#7-stregistroanterior) = `false`, o registro da vacina deve estar de acordo com os relacionamentos de Imunobiológico x Estratégia x Dose definidos na tabela :link{id=regras_vacinacao};
- Quando o campo [stRegistroAnterior](#7-stregistroanterior) = `true`, o registro da vacina não irá considerar os relacionamentos de Imunobiológico x Estratégia x Dose definidos na tabela :link{id=regras_vacinacao}.

**Referência:** [VacinaRowThrift](#vacinarowthrift).

#### \#10 dataHoraInicialAtendimento

Data e hora do início do atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Regras:**

- Não pode ser anterior à :link[dataAtendimento]{id=headerTransport anchor=5-dataatendimento};
- Não pode ser posterior à [dataHoraFinalAtendimento](#11-datahorafinalatendimento) e à data atual.

**Referência:** Deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos. Para realizar a conversão, pode ser utilizado o conversor [Epoch Converter](https://www.epochconverter.com/).

#### \#11 dataHoraFinalAtendimento

Data e hora do fim do atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Regras:**

- Não pode ser anterior à [dataHoraInicialAtendimento](#10-datahorainicialatendimento);
- Não pode ser posterior à data atual.

**Referência:** Deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos. Para realizar a conversão, pode ser utilizado o conversor [Epoch Converter](https://www.epochconverter.com/).

#### \#12 cpfCidadao

CPF do cidadão.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Condicional | 11     | 11     |

**Regras:**

- Somente CPF válido será aceito;
- É de preenchimento obrigatório se o campo [stNaoPossuiCpf](#18-stnaopossuicpf) = `false`;
- Não pode ser preenchido se o campo [cnsCidadao](#3-cnscidadao) for preenchido.

#### \#13 condicaoMaternal

Código que indica o tipo de condição maternal.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Long    | Condicional | -      | -      |

**Regras:**

- Quando o Sexo = 0 (masculino) o campo não deve ser preenchido;
- Quando o [Sexo](#5-sexo) = `1 (Feminino)` ou [Sexo](#5-sexo) = `5 (Indeterminado)` o campo passa a ser obrigatório e pode receber o valor `1` (Nenhuma), `2` (Gestante) ou `3` (Puérpera);

### VacinaRowThrift

#### \#1 imunobiologico

Código do imunobiológico aplicado na vacinação.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Referência:** :link[Imunobiologico]{id=dicionario anchor=imunobiologico}.

#### \#2 estrategiaVacinacao

Código da estratégia da vacinação.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | -      | -      |

**Regras:**

- É de preenchimento obrigatório se o campo [stRegistroAnterior](#7-stregistroanterior) = `false`;
- Se o campo [stRegistroAnterior](#7-stregistroanterior) = `true`, não é de preenchimento obrigatório e pode ser preenchido somente com o valor `11 - Pesquisa`;
- Este campo deverá ser preenchido com o valor da coluna **Código e-SUS APS** da :link[tabela de referência]{id=dicionario anchor=estrategiavacinacao}.

**Referência:** :link[EstrategiaVacinacao]{id=dicionario anchor=estrategiavacinacao}.

#### \#3 dose

Código da dose do imunobiológico aplicado na vacinação.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Referência:** :link[Dose]{id=dicionario anchor=dose}.

#### \#4 lote

Valor do lote do imunobiológico aplicado na vacinação.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Condicional | 1      | 30     |

**Regras:**

- Apenas `letras`, `números`, `/`, `.` e `-`;
- É de preenchimento obrigatório se o campo [stRegistroAnterior](#7-stregistroanterior) = `false`.

#### \#5 coRndsFabricante

Código do fabricante do imunobiológico aplicado na vacinação.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Condicional | -      | -      |

**Regras:**

- É permitido o envio apenas de fabricantes que constam na listagem de referência;
- É de preenchimento obrigatório se o campo [stRegistroAnterior](#7-stregistroanterior) = `false`.

**Referência:** :link[Fabricante]{id=dicionario anchor=corndsfabricante}.

#### \#6 grupoAtendimento

Grupo alvo ao qual o cidadão pertence em vacinações.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | -      | -      |

**Regras:**

- É de preenchimento obrigatório se o campo [stRegistroAnterior](#7-stregistroanterior) = `false`;
- Não pode ser preenchido se o campo [stRegistroAnterior](#7-stregistroanterior) = `true`;

**Referência:** :link[Grupo de Atendimento]{id=dicionario anchor=grupodeatendimento}.

#### \#7 stRegistroAnterior

Indica se o imunobiológico foi aplicado em um atendimento anterior.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Boolean | Sim         | -      | -      |

#### \#8 dataRegistroAnterior

Data em que foi aplicada a vacina.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | -      | -      |

**Regras:**

- É de preenchimento obrigatório se o campo [stRegistroAnterior](#7-stregistroanterior) = `true`;
- Não pode ser preenchido se o campo [stRegistroAnterior](#7-stregistroanterior) = `false`;
- Não pode ser posterior à :link[dataAtendimento]{id=headerTransport anchor=5-dataatendimento} e anterior à [dtNascimento](#4-dtnascimento).

**Referência:** Deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos. Para realizar a conversão, pode ser utilizado o conversor [Epoch Converter](https://www.epochconverter.com/).

#### \#9 stAplicadoExterior

Utilizado para identificar se o cidadão foi vacinado no exterior.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Boolean | Condicional | -      | -      |

**Regra:** Só pode ser preenchido se o campo [stRegistroAnterior](#7-stregistroanterior) = `true` e o campo [Imunobiológico](#1-imunobiologico) receber um dos valores `85`, `86`, `87`, `88`, `89`, `95`, `96`, `97`, `98`, `99`, `102`, `103`, `105` ou `112` pertencentes aos imunobiológicos de COVID-19. Nestas condições, é de preenchimento obrigatório.

#### \#10 cboPrescritorCodigo2002

Código que indica o CBO do profissional prescritor.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| String  | Condicional | -      | -      |

Regra: 

- Obrigatório se [estrategiaVacinacao](#2-estrategiavacinacao) = `02- Especial`;

**Referência:** :link[CBOs específicos]{id=dicionario anchor=cboprescritor}.

#### \#11 cid10MotivoIndicacao

Código que indica o CID10 do motivo da prescrição. 

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| String  | Condicional | -      | -      |

Regra: 

- Obrigatório se [estrategiaVacinacao](#2-estrategiavacinacao) = `02- Especial`;
- Preencher o campo de string com o código CID10.

#### \#12 stPesquisaClinica

Código que indica se a aplicação foi feita no contexto de pesquisa clínica. 

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Boolean | Sim         | -      | -      |

#### \#13 anvisaProtocoloEstudo

Número do protocolo de estudo da ANVISA. 

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| String  | Condicional | -      | 10     |

**Regra:** Só pode ser preenchido e se torna obrigatório se [stPesquisaClinica](#12-stpesquisaclinica) = `true`;

#### \#14 anvisaProtocoloVersao

Número da versão do protocolo da ANVISA. 

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| String  | Condicional | -      | 10     |

**Regra:**  Só pode ser preenchido e se torna obrigatório se [stPesquisaClinica](#12-stpesquisaclinica) = `true`;

#### \#15 anvisaNumeroRegistro

Número do registro da ANVISA. 

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| String  | Condicional | -      | 10     |

**Regra:** Só pode ser preenchido e se torna obrigatório se [stPesquisaClinica](#12-stpesquisaclinica) = `true`;

#### \#16 viaAdministracao

Via de administração do imunobiológico aplicado.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Long    | Sim         | 1      | 1      |

**Referência:** :link[Via de administração]{id=dicionario anchor=viaadministracao-para-imunobiol-gicos}.

#### \#17 localAplicacao

Local em que o imunobiológico foi aplicado.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Long    | Sim         | 1      | 2      |

**Regras:** 

Os dados do campo "Local de aplicação" são validados de acordo com o campo "Via de administração".

- Se `Via de administração` = `Intravenosa`, o campo deve ser preenchido com o valor = `Rede venosa`;
- Se `Via de administração` = `Intramuscular`, o campo deve ser preenchido com um dos valores = `Vastolateral da coxa direito`, `Vastolateral da coxa esquerdo`, `Deltóide direito`, `Deltóide esquerdo`, `Dorso glúteo direito`, `Dorso glúteo esquerdo`, `Vastolateral da coxa direito`, `Vastolateral da coxa esquerdo`, `Ventro glúteo direito`, `Ventro glúteo esquerdo`, `Outro`;
- Se `Via de administração` = `Intradérmica` ou `Subcutânea`, o campo deve ser preenchido com um dos valores = `Face ânterolateral externa da coxa direito`, `Face ânterolateral externa da coxa esquerdo`, `Face ânterolateral externo do antebraço direito`, `Face ânterolateral externo do antebraço esquerdo`, `Face ânterolateral externa do braço direito`, `Face ânterolateral externa do braço esquerdo`, `Face externa superior do braço direito`, `Face externa superior do braço esquerdo`, `Face externa inferior do braço direito`, `Face externa inferior do braço esquerdo`, `Outro`;
- Se `Via de administração` = `Oral`, o campo deve ser preenchido com o valor = `Boca`;
- Se  `Via de administração`= `Intralesional`, o campo deve ser preenchido com o valor `Ferimento Local`.

**Referência:** :link[Local de aplicação]{id=dicionario anchor=localaplicacao}.

#### \#18 stNaoPossuiCpf

Marcador que indica que o CPF do cidadão não existe ou não está disponível no momento do cadastro.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Boolean | Sim         | -      | -      |

**Regras:** 

- Deve ser preenchido com `false` se o campo [cpfCidadao](#12-cpfcidadao) for preenchido.

#### \#19 justificativaNaoPossuiCpf

Justificativa para o cidadão não possuir ou não informar CPF.

| Tipo    | Obrigatório | Mínimo | Máximo |
| ------- | ----------- | ------ | ------ |
| Long    | Sim         | -      | -      |

**Regras:** 

- É permitido o envio apenas de justificativas que constam na listagem de referência;
- É de preenchimento obrigatório se o campo [stNaoPossuiCpf](#18-stnaopossuicpf) = `true` e o campo [cpfCidadao](#12-cpfcidadao) não for preenchido.

**Referências:** :link[justificativaNaoPossuiCpf]{id=dicionario anchor=justificativanaopossuicpf}.
