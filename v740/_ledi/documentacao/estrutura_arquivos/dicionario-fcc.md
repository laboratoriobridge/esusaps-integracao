---
layout: doc
title: Ficha de Cuidado Compartilhado
id: dicionario-fcc
parent: estrutura_arquivos
order: 15
---

## FichaCuidadoCompartilhado

### \#1	uuidEvolucao
Código UUID para identificar a ficha de cuidado compartilhado na base de dados nacional.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 36 | 44 |

**Referência:** Para ver a referência sobre o UUID, acesse: [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### \#2 lotacaoEvolucao
Profissional responsável pela evolução.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| LotacaoThrift | Sim | - | - |

**Regra:** 

- Este profissional obrigatoriamente precisa ser o solicitante ou o executante;
- O Código INE desta lotação deve ser preenchido com a mesma informação do campo {% link camada-transporte#5-inedadoserializado, title: "#5 ineDadoSerializado" %};
- O Código CNES desta lotação deve ser preenchido com a mesma informação do campo {% link camada-transporte#3-cnesdadoserializado, title: "#3 cnesDadoSerializado" %}.
- O Código IBGE desta lotação deve ser preenchido com a mesma informação do campo {% link camada-transporte#4-codibge, title: "#4 codIbge" %}.

**Referências:** [LotacaoThrift]({% url headerTransport %}#lotacaothrift).

## \#3 dataEvolucao
Data em que foi criado a evolução do Compartilhamento de Cuidado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Regra:** 

- Esta data não pode ser anterior à data do DataCriacaoCuidado;
- Não pode ser posterior à data atual.

**Referência:** Deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos. Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).


## \#4 dataEvolucaoAnterior
Data da última evolução que aconteceu antes desta.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Não | - | - |

**Regra:** 

- Deve ser obrigatório caso não seja a primeira evolução do cuidado compartilhado, ou seja, quando o valor de [coSequencialEvolucao](#5-cosequencialevolucao) seja superior a 1;
- Esta data deve ser posterior à data do DataCriacaoCuidado;
- Esta data deve ser anterior à DataEvolucao;
- Esta data deve ser anterior a data atual.

**Referência:** Deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos. Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).


## \#5 coSequencialEvolucao
Código sequencial que ordena as evoluções desde a criação deste Cuidado Compartilhado

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Sim | 1 | 3 |

**Regra:** 

- Não pode ser menor que 1; 
- Não pode ser maior que 999.

## \#6 condutaEvolucao
Nome da conduta adotada na evolução.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Regra:** 

- Condutas válidas: [Condutas]({% url dicionario %}#condutaevolucao)

## \#7 tpCdsOrigem
Tipo de origem dos dados do registro.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Sim | 1 | 1 |

**Regra:** 

- Utilizar valor 3 (sistemas terceiros).

## \#8 cnsCidadao
CNS do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 15 | 15 |

**Regra:**

- CNS validado de acordo com o {% link algoritmo_CNS, title:"algoritmo de validação" %};
- Não pode ser preenchido se o campo CPF do cidadao for preenchido.

## \#9 cpfCidadao
CPF do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 11 | 11 |

**Regra:**

- Somente CPF válido será aceito;
- Não pode ser preenchido se o campo CNS do cidadao for preenchido.

## \#10 sexoCidadao
Código do sexo do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** [Sexo]({% url dicionario %}#sexo).

## \#11 dataNascimentoCidadao
Data de nascimento do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | - | - |

**Regra:** 

- Formato "aaaa-mm-dd";
- Esta data não pode ser posterior à data do DataCriacaoCuidado;
- Não pode ser anterior a 130 anos a partir da data atual.

## \#12 uuidCuidadoCompartilhado
Código UUID para identificar a ficha na base de dados nacional.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 36 | 44 |

**Referência:** Para ver a referência sobre o UUID, acesse: [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

## \#13 solicitante
Profissional solicitante do Cuidado Compartilhado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| LotacaoThrift | Sim | - | - |

**Regra:** 

- Deve ser diferente da lotação do executante. Para fins de comparação, todos os campos do objeto LotacaoThrift serão levados em consideração.

**Referências:** [LotacaoThrift]({% url headerTransport %}#lotacaothrift).

**Observações:** Esta entidade é utilizada para representar o profissional solicitante do Compartilhamento de Cuidado.

## \#14 executante
Profissional executante do Cuidado Compartilhado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| LotacaoThrift | Sim | - | - |

**Regra:** 

- Deve ser diferente a lotação do solicitante. Para fins de comparação, todos os campos do objeto LotacaoThrift serão levados em consideração;
- A equipe do executante é validada, tornando obrigatório o INE na LotacaoThrift neste caso.

**Referências:** [LotacaoThrift]({% url headerTransport %}#lotacaothrift).

**Observações:** Esta entidade é utilizada para representar o profissional executante do Compartilhamento de Cuidado.

## \#15 dataCriacaoCuidado
Data em que foi criado o Compartilhamento de Cuidado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Regra:** 

- Não pode ser posterior à data atual;
- Não pode ser anterior a data de nascimento do cidadão;
- Não pode ser anterior que a data 01/07/2023.

**Referência:** Deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos. Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

## \#16 cid10
Código da CID10 registrada no Compartilhamento de Cuidado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | - | - |

**Regra:** 

- Deve ser apresentada somente CID10 permitida para o [sexo do cidadão](#10-sexocidadao);
- Deve ser obrigatório caso o CIAP2 não seja informado. 

## \#17 ciap
Código da CIAP registrada no Compartilhamento de Cuidado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | - | - |

**Regra:** 

- Deve ser apresentada somente CIAP2 permitida para o [sexo do cidadão](#10-sexocidadao);
- Deve ser obrigatório caso o CID10 não seja informado;
- Inserir o código em caracteres maiúsculos sem espaços.

## \#18 uuidFichaOrigem;
Código UUID da ficha que originou o Compartilhamento de Cuidado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 36 | 44 |

**Regra:** Deve ser obrigatório caso o campo [tpDadoTranspFichaOrigem](#19-tpdadotranspfichaorigem) seja informado.

**Referência:** Para ver a referência sobre o UUID, acesse: [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

**Observação:** Não obrigatório por conta de sistemas terceiros.

## \#19 tpDadoTranspFichaOrigem;

Informa qual o tipo da ficha que originou o Compartilhamento de Cuidado. 

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Não | - | - |

**Regra:** Deve ser obrigatório caso o campo [uuidFichaOrigem](#18-uuidfichaorigem) seja informado.

**Observação:** Valores válidos:

- 4 = Ficha Atendimento Individual;
- 5 = Ficha Atendimento Odontológico;
- 7 = Ficha Procedimentos;
- 10 = Ficha Atendimento Domiciliar;
- 16 = ESUS-PEC Cuidado Compartilhado.

## \#20 prioridadeCuidado
Classificação de prioridade do Cuidado Compartilhado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Sim | 1 | 1 |

Referência: [Classificação de Prioridade]({% url dicionario %}#prioridadecuidado)

## \#21 reclassificacaoPrioridadeCuidado
Informa qual a nova classificação de prioridade escolhida na evolução, após uma reclassificação de prioridade do Cuidado Compartilhado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Não | 1 | 1 |

**Regra:** Deve ser diferente do campo [prioridadeCuidado](#20-prioridadecuidado) 

Referência: [Classificação de Prioridade]({% url dicionario %}#prioridadecuidado)


