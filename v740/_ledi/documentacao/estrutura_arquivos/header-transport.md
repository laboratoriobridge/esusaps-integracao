---
layout: doc
title: Cabeçalho (headerTransport)
id: headerTransport
parent: estrutura_arquivos
order: 1
---

# UnicaLotacaoHeader

### \#1 profissionalCNS

CNS do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 15     | 15     |

**Regras:**

- CNS validado de acordo com o {% link algoritmo_CNS, title:"algoritmo de validação" %};
- Somente fichas de profissionais com vínculo com o respectivo município são consideradas válidas.

**Observações:** Esta entidade é utilizada para representar o profissional responsável pelas fichas.

### \#2 cboCodigo_2002

Código do CBO do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | -      | -      |

**Regras:** Somente as CBOs apresentadas na tabela da respectiva ficha podem ser adicionadas neste campo.

**Referências:** {% link grupo_cbo %}.

**Observações:** Esta entidade é utilizada para representar o profissional responsável pelas fichas.

### \#3 cnes

Código do CNES do estabelecimento de saúde onde o profissional está lotado.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 7      | 7      |

**Regras:** Deve ser preenchido com a mesma informação do campo {% link camada-transporte#3-cnesdadoserializado, title: "#3 cnesDadoSerializado" %}.

**Observações:** Esta entidade é utilizada para representar o profissional responsável pelas fichas.

### \#4 ine

Código INE da equipe do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Não         | 10     | 10     |

**Regras:** Deve ser preenchido com a mesma informação do campo {% link camada-transporte#5-inedadoserializado, title: "#5 ineDadoSerializado" %}.

**Observações:** Esta entidade é utilizada para representar o profissional responsável pelas fichas.

### \#5 dataAtendimento

Data em que está sendo realizada a ação.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Referências:** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos. Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

**Regras:** Não pode ser posterior à data atual.

### \#6 codigoIbgeMunicipio

Código IBGE do município.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 7      | 7      |

**Regras:** Deve ser preenchido com a mesma informação do campo {% link camada-transporte#4-codibge, title: "#4 codIbge" %}.

**Referências:** {% link municipios %}.

---

## LotacaoHeader

<a name = "#1-profissionalcnslotacaoheader"></a>

<h3>#1	profissionalCNS</h3>

CNS do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 15     | 15     |

**Regras:**

- CNS validado de acordo com o {% link algoritmo_CNS, title:"algoritmo de validação" %};
- Somente fichas de profissionais com vínculo com o respectivo município são consideradas válidas.

<a name = "#2-cbocodigo_2002lotacaoheader"></a>

<h3>#2	cboCodigo_2002</h3>

Código do CBO do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | -      | -      |

**Regras:**

- Se for registro de [lotacaoFormPrincipal](#1-lotacaoformprincipal) somente as {% link grupo_cbo %} apresentadas na tabela da respectiva ficha podem ser adicionadas neste campo;
- Se for registro de [lotacaoFormAtendimentoCompartilhado](#2-lotacaoformatendimentocompartilhado) a referência é a [Lista com todas as CBOs]({% url cbo %}).

<a name = "#3-cneslotacaoheader"></a>

<h3>#3 cnes</h3>

Código do CNES da unidade de saúde que o profissional está lotado.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 7      | 7      |

**Regras:**

- Se for registro de [lotacaoFormPrincipal](#1-lotacaoformprincipal), deve ser preenchido com a mesma informação do campo {% link camada-transporte#3-cnesdadoserializado, title: "#3 cnesDadoSerializado" %};
- Se for registro de [lotacaoFormAtendimentoCompartilhado](#2-lotacaoformatendimentocompartilhado), pode ser preenchido com qualquer CNES pertencente ao respectivo município.

<a name = "#4-inelotacaoheader"></a>

<h3>#4 ine</h3>

Código INE da equipe do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Não         | 10     | 10     |

**Regras:**

- Se for registro de [lotacaoFormPrincipal](#1-lotacaoformprincipal), deve ser preenchido com a mesma informação do campo {% link camada-transporte#5-inedadoserializado, title: "#5 ineDadoSerializado" %};
- Se for registro de [lotacaoFormAtendimentoCompartilhado](#2-lotacaoformatendimentocompartilhado), pode ser preenchido com qualquer INE pertencente ao respectivo município.

# VariasLotacoesHeader

### \#1 lotacaoFormPrincipal

Profissional responsável pelo atendimento.

| Tipo          | Obrigatório | Mínimo | Máximo |
| ------------- | ----------- | ------ | ------ |
| LotacaoHeader | Sim         | -      | -      |

**Referências:** [LotacaoHeader](#lotacaoheader).

**Observações:** Esta entidade é utilizada para representar o profissional responsável pela ficha.

### \#2 lotacaoFormAtendimentoCompartilhado

Profissional auxiliar no atendimento.

| Tipo          | Obrigatório | Mínimo | Máximo |
| ------------- | ----------- | ------ | ------ |
| LotacaoHeader | Não         | -      | -      |

**Referências:** [LotacaoHeader](#lotacaoheader).

**Observações:** Esta entidade é utilizada para representar um profissional que auxiliou o profissional responsável pela ficha.

### \#3 dataAtendimento

Data em que está sendo realizada a ação.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim         | -      | -      |

**Regras:** Não pode ser posterior à data atual.

**Referências:** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos. Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#4 codigoIbgeMunicipio

Código IBGE do município.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 7      | 7      |

**Regras:** Deve ser preenchido com a mesma informação do campo {% link camada-transporte#4-codibge, title: "#4 codIbge" %}.

**Referências:** {% link municipios %}.

# LotacaoThrift

### \#1 CPF

CPF do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 11     | 11     |

**Regras:**

- Somente CPF válido;
- Somente CPF já existente na base de dados será considerado válido.

### \#2 CNS

CNS do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 15     | 15     |

**Regras:**

- CNS validado de acordo com o {% link algoritmo_CNS, title:"algoritmo de validação" %};
- Somente CNS já existente na base de dados será considerado válido.
- Somente fichas de profissionais com vínculo com o respectivo município são consideradas válidas.

### \#3 cboCodigo_2002

Código do CBO do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | -      | -      |

**Regras:** Somente CBO Válido.

### \#4 ine

Código INE da equipe do profissional.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Não         | 10     | 10     |

### \#5 cnes

Código do CNES do estabelecimento de saúde onde o profissional está lotado.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 7      | 7      |

### \#6 codigoIbgeMunicipio

Código IBGE do município.

| Tipo   | Obrigatório | Mínimo | Máximo |
| ------ | ----------- | ------ | ------ |
| String | Sim         | 7      | 7      |

**Referências:** {% link municipios %}.
