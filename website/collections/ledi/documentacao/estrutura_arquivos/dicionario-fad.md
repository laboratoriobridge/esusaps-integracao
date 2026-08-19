---
id: dicionario-fad
title: Modelo de Informação de Atendimento Domiciliar
order: 12
parent: estrutura_arquivos
---

### FichaAtendimentoDomiciliarMaster

#### \#1	uuidFicha
Código UUID para identificar o registro na base de dados nacional.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 36 | 44 |

**Regra:** É recomendado concatenar o CNES na frente do UUID, de modo que os 7 dígitos (CNES) + 1 de hífen somados aos 36 (32 caracteres + 4 hífen) do UUID são a limitação de 44 bytes do campo.

**Referência:** Formato canônico.	Para ver a referência sobre o UUID, acesse: [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

#### \#2	tpCdsOrigem
Tipo de origem dos dados do registro.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Sim | 1 | 1 |

Observação: Utilizar valor 3 (sistemas terceiros).

#### \#3	atendimentosDomiciliares
Lista dos atendimentos realizados pelo profissional.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| List\<FichaAtendimentoDomiciliarChild\> | Sim | 0 | 99 |

**Referência:** [FichaAtendimentoDomiciliarChild](#fichaatendimentodomiciliarchild).

#### \#4	headerTransport
Profissionais que realizaram o atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| VariasLotacoesHeader | Sim | - | - |

**Regra:** Somente as CBOs apresentadas na :link[Tabela 10 - CBOs que podem registrar o Modelo de Informação de Atendimento Domiciliar]{id=grupo_cbo anchor=modelo-de-informa-o-de-atendimento-domiciliar} podem ser adicionadas no campo CBO do profissional principal.

**Referência:** :link[VariasLotacoesHeader]{id=headerTransport anchor=variaslotacoesheader}.

### FichaAtendimentoDomiciliarChild

#### \#1	turno
Código do turno onde aconteceu o atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** :link[Turno]{id=dicionario anchor=turno}.

#### \#2	cnsCidadao
CNS do cidadão que recebeu atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 15 | 15 |

**Regras:**

- Validado pelo algoritmo;
- Não pode ser preenchido se o campo [cpfCidadao](#12-cpfcidadao) for preenchido.

**Referência:** O algoritmo de validação está presente em :link{id=algoritmo_CNS}.

#### \#3	dataNascimento

Data de nascimento do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Regra:** Não pode ser posterior à :link[dataAtendimento]{id=headerTransport anchor=5-dataatendimento} e anterior à 130 anos a partir da :link[dataAtendimento]{id=headerTransport anchor=5-dataatendimento}.

**Referência:** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Epoch Converter](https://www.epochconverter.com/).

#### \#4	sexo
Código do sexo do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:**	:link[Sexo]{id=dicionario anchor=sexo}.

#### \#5	localDeAtendimento
Código do local onde o atendimento foi realizado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** :link[LocalDeAtendimento]{id=dicionario anchor=localdeatendimento}.

#### \#6	atencaoDomiciliarModalidade
Código da modalidade AD do cidadão atendido.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Regras:**

- Apenas as opções `1`, `2` e `3` são aceitas;
- Não pode ser preenchido se o campo [tipoAtendimento](#7-tipoatendimento) = `9 - Visita domiciliar pós-óbito`.

**Referência:** :link[ModalidadeAD]{id=dicionario anchor=modalidadead}.

#### \#7	tipoAtendimento
Código do tipo de atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Regra:** Apenas as opções `7`, `8` ou `9` são aceitas.

**Referência:** :link[TipoDeAtendimento]{id=dicionario anchor=tipodeatendimento}.

#### \#8	condicoesAvaliadas
Condições avaliadas do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| List\<Long\> | Não | 0 | 24 |

**Regra:** Não pode ser preenchido se o campo [tipoAtendimento](#7-tipoatendimento) = `9 - Visita domiciliar pós-óbito`.

**Referência:** [Condições Avaliadas](#condi-es-avaliadas).

#### \#9 problemasCondicoes
Situações de saúde avaliadas no atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| problemacondicao | Sim | 1 | - |

**Referência:** [problemacondicao](#problemacondicao).

#### \#10 procedimentos
Código dos procedimentos registrados no atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| List\<String\> | Não | 0 | 30 |

**Regras:**

- Não dever ser preenchido se o campo [tipoAtendimento](#7-tipoatendimento) = `9 - Visita domiciliar pós-óbito`;
- Não pode conter procedimentos repetidos;
- Podem ser informados os procedimentos pertencentes aos grupos `01 - Ações de promoção e prevenção em saúde`, `02 - Procedimentos com finalidade diagnóstica`, `03 - Procedimentos clínicos`, `04 - Procedimentos cirúrgicos` ou ao subgrupo `04 - Telessaúde`, pertencente ao grupo `08 - Ações complementares da atenção à saúde`;
- Não pode ser preenchido com o procedimento `03.01.05.010-4 - Visita domiciliar pós-óbito`. Esta informação deve ser registrada através do campo [tipoAtendimento](#7-tipoatendimento), opção `9 - Visita domiciliar pós-óbito`.

**Referência:** Tabela do SIGTAP, competência 06/2026 disponível em: [Tabela Unificada SIGTAP](http://sigtap.datasus.gov.br/tabela-unificada/app/sec/procedimento/publicados/consultar).

Observação: Inserir o código do procedimento SIGTAP sem ponto ou hífen, ex: `0214010015`.

#### \#11 condutaDesfecho
Código do desfecho do atendimento do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** :link[CondutaDesfecho]{id=dicionario anchor=condutadesfecho}.

#### \#12 cpfCidadao

CPF do cidadão que recebeu o atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 11 | 11 |

**Regras:** 

- Somente CPF válido será aceito;
- Não pode ser preenchido se o campo [cnsCidadao](#2-cnscidadao) for preenchido.

### ProblemaCondicao

#### \#1 uuidProblema
Código identificador único do problema ou condição.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 0 | 44 |

**Regras:**

- Se torna obrigatório caso preenchido [uuidEvolucaoProblema](#2-uuidevolucaoproblema), [coSequencialEvolucao](#3-cosequencialevolucao) ou [situacao](#6-situacao).

#### \#2 uuidEvolucaoProblema
Código identificador único da evolução do problema ou condição.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 0 | 44 |

**Regras:**

- Se torna obrigatório caso preenchido [uuidProblema](#1-uuidproblema), [coSequencialEvolucao](#3-cosequencialevolucao) ou [situacao](#6-situacao).

#### \#3 coSequencialEvolucao
Código sequencial da evolução dentro do próprio problema e condição atual.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | 0 | 8 |

**Regras:**

- A primeira evolução do problema ou condição possui o valor 1, as evoluções subsequentes incrementam de 1 em 1;
- Não é recomendado repetir dentro do mesmo problema ou condição;
- É recomendado que o valor do sequencial seja reiniciado para cada problema ou condição novo;
- Se torna obrigatório caso preenchido [uuidEvolucaoProblema](#2-uuidevolucaoproblema), [uuidProblema](#1-uuidproblema) ou [situacao](#6-situacao).

#### \#4	ciap
Código da CIAP registrada no atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 0 | 22 |

**Regras:**

- Não deve repetir a mesma CIAP2;
- Não pode conter nenhum dos itens listados no grupo Procedimentos da Tabela CIAP2;
- Não é permitida CIAP2 relacionada ao pré-natal com uma CID de desfecho de gestação (exemplo: CIAP2 "GRAVIDEZ DE ALTO RISCO - W84" relacionada a CID10 "PARTO ÚNICO ESPONTÂNEO - O80");
- Não é permitida CIAP2 relacionada ao pré-natal caso a idade seja inferior a 9 anos;
- A CIAP2 "GRAVIDEZ - W78" só pode ser vinculada a uma CID10 da familia Z34; 
- O código deve ser inserido em caracteres maiúsculos, sem espaços;
- Se torna obrigatório caso o campo [cid10](#5-cid10) não seja preenchido.

#### \#5	cid10
Código da CID10 registrada no atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | - | - |

**Regras:**

- Não deve repetir a mesma CID10;
- Não é permitida mais que uma CID10 da familia Z34 no mesmo registro;
- Se torna obrigatório caso o campo [ciap](#4-ciap) não seja preenchido.

#### \#6 situacao
Situação do problema ou condição.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | - | - |

**Regras:**

- Quando a [ciap](#4-ciap) informada for "GRAVIDEZ - W78" não é permitido preencher a situação com o valor "1 - Latente";
- Apenas valores de `0` a `2`;
- Se torna obrigatório caso preenchido [uuidEvolucaoProblema](#2-uuidevolucaoproblema), [uuidProblema](#1-uuidproblema) ou [coSequencialEvolucao](#3-cosequencialevolucao).

**Referência:** :link[SituacaoProblemasCondicoes]{id=dicionario anchor=situacaoproblemascondicoes}.

#### \#7 dataInicioProblema
Data de inicio do problema ou condição.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Não | - | - |

**Regras:**

- Deve ser igual ou posterior a [dataNascimento](#3-datanascimento);
- Deve ser anterior ou igual :link[dataAtendimento]{id=headerTransport anchor=5-dataatendimento}.

#### \#8 dataFimProblema
Data de finalização do problema ou condição.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regras:**

- Se torna obrigatório quando o campo [situacao](#6-situacao) possuir o valor "2 - Resolvido";
- Deve ser igual ou posterior a [dataNascimento](#3-datanascimento);
- Deve ser anterior ou igual :link[dataAtendimento]{id=headerTransport anchor=5-dataatendimento};
- Deve ser posterior ou igual a [dataInicioProblema](#7-datainicioproblema).

#### \#9 isAvaliado
Indicador se o problema ou condição foi avaliado durante o atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Boolean | Sim | - | - |

### Condições avaliadas

| Nome | Código |
| ---- | ------ |
| Acamado | 1 |
| Domiciliado | 2 |
| Úlceras / Feridas (grau III ou IV) | 3 |
| Acompanhamento nutricional | 4 |
| Uso de sonda naso-gástrica - SNG | 5 |
| Uso de sonda naso-enteral - SNE | 6 |
| Uso de gastrostomia | 7 |
| Uso de colostomia | 8 |
| Uso de cistostomia | 9 |
| Uso de sonda vesical de demora - SVD | 10 |
| Acompanhamento pré-operatório | 11 |
| Acompanhamento pós-operatório | 12 |
| Adaptação ao uso de órtese / prótese | 13 |
| Reabilitação domiciliar | 14 |
| Cuidados paliativos oncológico | 15 |
| Cuidados paliativos não-oncológico | 16 |
| Oxigenoterapia domiciliar | 17 |
| Uso de traqueostomia | 18 |
| Uso de aspirador de vias aéreas para higiene brônquica | 19 |
| Suporte ventilatório não invasivo - CPAP | 20 |
| Suporte ventilatório não invasivo - BiPAP | 21 |
| Diálise peritonial | 22 |
| Paracentese | 23 |
| Medicação parenteral | 24 |

#### \#17 stNaoPossuiCpf

Marcador que indica que o CPF do cidadão não existe ou não está disponível no momento do cadastro.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
|Boolean | Não |- |- |

#### \#18 justificativaNaoPossuiCpf

Justificativa para o cidadão não possuir ou não informar CPF.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
|Long  | Condicional |- |- |

**Regras:** 

- É permitido o envio apenas de justificativas que constam na listagem de referência;
- Não pode ser preenchido se o campo [stNaoPossuiCpf](#17-stnaopossuicpf) = `false`;
- É obrigatório se o campo [stNaoPossuiCpf](#17-stnaopossuicpf) = `true`;

**Referências:** :link[justificativaNaoPossuiCpf]{id=dicionario anchor=justificativanaopossuicpf}.
