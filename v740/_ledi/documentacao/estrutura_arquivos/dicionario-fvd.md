---
layout: doc
title: Ficha de Visita Domiciliar e Territorial
id: dicionario-fvd
parent: estrutura_arquivos
order: 9
---

## FichaVisitaDomiciliarMaster

### \#1 uuidFicha
Código UUID para identificar a ficha na base de dados nacional.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 36 | 44 |

**Regra:** É recomendado concatenar o CNES na frente do UUID, de modo que os 7 dígitos (CNES) + 1 de hífen somados aos 36 (32 caracteres + 4 hífen) do UUID são a limitação de 44 bytes do campo. Formato canônico.

**Referência:** Para ver a referência sobre o UUID, acesse [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### \#2 tpCdsOrigem
Tipo de origem dos dados do registro.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Sim | 1 | 1 |

**Regra:** Utilizar valor 3 (sistemas terceiros).

### \#3 headerTransport
Profissional que realizou a visita.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| UnicaLotacaoHeader | Sim | - | - |

**Regra:** Somente as CBOs apresentadas na [Tabela 7 - CBOs que podem registrar ficha de visita domiciliar e territorial]({% url grupo_cbo %}#ficha-de-visita-domiciliar-e-territorial) podem ser adicionadas no campo CBO do profissional.

**Referência:** [UnicaLotacaoHeader]({% url headerTransport %}#unicalotacaoheader).

### \#4 visitasDomiciliares
Lista de Fichas de Visita Domiciliar e Territorial.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| List\<FichaVisitaDomiciliarChild\> | Sim | 0 | 99 |

**Referência:** [FichaVisitaDomiciliarChild](#fichavisitadomiciliarchild).

## FichaVisitaDomiciliarChild

### \#1 turno
Código do turno onde aconteceu o atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** [Turno]({% url dicionario %}#turno).

### \#2 numProntuario
Número do prontuário do cidadão na UBS.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 0 | 30 |

**Regras:**

* Somente letras e números;
* Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI.

### \#3 cnsCidadao
CNS do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 15 | 15 |

**Regras:**

- Validado pelo algoritmo;
- Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
- Para visita periódica ou visita domiciliar para controle vetorial preencher este campo com o CNS do responsável familiar;
- Não pode ser preenchido se o campo [cpfCidadao](#14-cpfcidadao) for preenchido.

**Referência:** O algoritmo de validação está presente em {% link algoritmo_CNS %}.

### \#4 dtNascimento
Data de nascimento do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regras:**

* Não pode ser posterior à [dataAtendimento]({% url headerTransport %}#5-dataatendimento) e anterior a 130 anos a partir da [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
* Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
* É de preenchimento obrigatório somente se [tipoDeImovel](#11-tipodeimovel) = `01` Domicílio, `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida sócio educativa, `11` Delegacia ou `99` Outros **e** pelo menos uma das condições a seguir seja obedecida:

	- Campo "CNS do cidadão";
	- Campo "Sexo";
	- Campo [motivosVisita](#7-motivosvisita) possuir qualquer opção dos grupos `#BUSCA_ATIVA` ou `#ACOMPANHAMENTO` inserida;
	- Campo [motivosVisita](#7-motivosvisita) possuir pelo menos uma das opções `25` Egresso de internação ou `31` Orientação / Prevenção inseridas;
	- Pelo menos um dos campos [pesoAcompanhamentoNutricional](#12-pesoacompanhamentonutricional) e [alturaAcompanhamentoNutricional](#13-alturaacompanhamentonutricional) for preenchido.

**Referência:** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#5 sexo
Código do sexo do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regras:**

* Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` Comércio, `03` Terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
* É de preenchimento obrigatório somente se [tipoDeImovel](#11-tipodeimovel) =`01` Domicílio, `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida sócio educativa, `11` Delegacia ou `99` Outros **e** pelo menos uma das condições a seguir seja obedecida:

	- Campo "CNS do cidadão";
	- Campo "Data de nascimento";
	- Campo [motivosVisita](#7-motivosvisita) possuir qualquer opção dos grupos `#BUSCA_ATIVA` ou `#ACOMPANHAMENTO` inserida;
	- Campo [motivosVisita](#7-motivosvisita) possuir pelo menos uma das opções `25` Egresso de internação ou `31` Orientação / Prevenção inseridas;
	- Pelo menos um dos campos [pesoAcompanhamentoNutricional](#12-pesoacompanhamentonutricional) e [alturaAcompanhamentoNutricional](#13-alturaacompanhamentonutricional) estiver preenchido.

**Referência:** [Sexo]({% url dicionario %}#sexo).

### \#6 statusVisitaCompartilhadaOutroProfissional
Marcador que indica se a visita foi compartilhada com outro profissional.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Boolean | Não | - | - |

### \#7 motivosVisita
Código dos motivos da visita.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| List\<Long\> | Condicional | 0 | 36 |

**Regras:**

- Não deve ser preenchido caso o campo [desfecho](#8-desfecho) = `3` Ausente ou `2` Visita Recusada;
- Se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI, então as opções selecionadas deste campo só podem ser:

	- `1` Cadastramento / Atualização;
	- `34` Ação educativa;
	- `35` Imóvel com foco;
	- `36` Ação mecânica;
	- `37` Tratamento focal;
	- `27` Convite para atividades coletivas / campanha de saúde;
	- `31` Orientação / Prevenção;
	- `28` Outros.

- As opções `5 (Gestante)` e `6 (Puérpera)` não podem ser informadas se o [Sexo](#5-sexo) = `0 (masculino)`.

**Referência:** [MotivoVisita]({% url dicionario %}#motivovisita).

### \#8 desfecho
Código dos resultados da ação de visita.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** [Desfecho]({% url dicionario#desfecho %}).

### \#9 microarea

Microárea na qual o cidadão se encontra.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 2 | 2 |

**Regra:** Não deve ser preenchido se o campo [stForaArea](#10-stforaarea) = `true`. Caso contrário, o preenchimento é obrigatório.

### \#10 stForaArea
Marcador que indica que o cidadão está fora da área.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Boolean | Não | - | - |

### \#11 tipoDeImovel
Indica o tipo de imóvel do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** [tipoDeImovel]({% url dicionario %}#tipodeimovel).

### \#12 pesoAcompanhamentoNutricional
Peso do cidadão em Quilogramas.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Double | Não | 1 | 7 |

**Regras:**

* Apenas números e ponto (`.`);
* Máximo de 3 casas decimais;
* Valor mínimo 0.5 e máximo 500;
* Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
* Não deve ser preenchido caso o campo [desfecho](#8-desfecho) = `3` Ausente ou `2` Visita Recusada.

### \#13 alturaAcompanhamentoNutricional
Altura do cidadão em centímetros.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Double | Não | 2 | 5 |

**Regras:**

* Apenas números e ponto (`.`);
* Máximo de 1 casa decimal;
* Valor mínimo 20 e máximo 250;
* Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
* Não deve ser preenchido caso o campo [desfecho](#8-desfecho) = `3` Ausente ou `2` Visita Recusada.

### \#14 cpfCidadao

CPF do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 11 | 11 |

**Regras:** 

- Somente CPF válido será aceito;
- Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
- Para visita periódica ou visita domiciliar para controle vetorial preencher este campo com o CPF do responsável familiar;
- Não pode ser preenchido se o campo [cnsCidadao](#3-cnscidadao) for preenchido.

### \#15 pressaoSistolica

Pressão sistólica do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Não | 0 | 3 |

**Regras:** 

- Caso este campo seja preenchido, torna-se obrigatório o preenchimento do campo [pressaoDiastolica](#16-pressaodiastolica);
- Valor mínimo 0 e máximo 999;
- Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
- Não deve ser preenchido caso o campo [desfecho](#8-desfecho) = `3` Ausente ou `2` Visita Recusada.

### \#16 pressaoDiastolica

Pressão diastólica do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Não | 0 | 3 |

**Regras:** 

- Caso este campo seja preenchido, torna-se obrigatório o preenchimento do campo [pressaoSistolica](#15-pressaosistolica).
- Valor mínimo 0 e máximo 999;
- Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
- Não deve ser preenchido caso o campo [desfecho](#8-desfecho) = `3` Ausente ou `2` Visita Recusada.

### \#17 temperatura
Aferição de temperatura do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Double | Não | 0 | 4 |

**Regras:** 

- Este campo só aceita valores entre 20 e 45;
- Máximo de 1 casa decimal;
- Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
- Não deve ser preenchido caso o campo [desfecho](#8-desfecho) = `3` Ausente ou `2` Visita Recusada.

### \#18 glicemia
Glicemia capilar do cidadão em mg/dL.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Condicional | 0 | 3 |

**Regras:** 

- Este campo só aceita valores entre 0 e 800;
- Caso este campo seja preenchido, torna-se obrigatório o preenchimento do campo [tipoGlicemia](#19-tipoglicemia);
- Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
- Não deve ser preenchido caso o campo [desfecho](#8-desfecho) = `3` Ausente ou `2` Visita Recusada.

### \#19 tipoGlicemia
Momento da coleta da glicemia capilar.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Condicional | - | - |

**Regras:** 

- Caso este campo seja preenchido, torna-se obrigatório o preenchimento do campo [glicemia](#18-glicemia);
- Não deve ser preenchido se o campo [tipoDeImovel](#11-tipodeimovel) = `02` comércio, `03` terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento religioso ou `13` CASAI;
- Não deve ser preenchido caso o campo [desfecho](#8-desfecho) = `3` Ausente ou `2` Visita Recusada.

**Referência:** [TipoGlicemiaCapilar]({% url dicionario %}#tipoglicemiacapilar).

### \#20 latitude

Informação da latitude do imóvel onde a visita foi realizada.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
| Double | Condicional | - | 10 |

**Regras**

- É de preenchimento obrigatório se o campo [longitude](#21-longitude) for preenchido;
- Os valores são limitados por -90 a 90 e apresentam até 8 casas decimais.

### \#21 longitude

Informação da longitude do imóvel onde a visita foi realizada.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Double | Condicional | - | 11 |

**Regras:**

- É de preenchimento obrigatório se o campo [latitude](#20-latitude) for preenchido;
- Os valores são limitados por -180 a 180 e apresentam até 8 casas decimais.

### \#22 uuidOrigemCadastroDomiciliar

Código UUID Origem da ficha de cadastro domiciliar onde a visita foi realizada.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 36 | 44 |

**Regra:** Quando preenchido, deverá ser informado o valor do campo {% link dicionario-fcd#11-uuidfichaoriginadora, title: "UUID origem da ficha de cadastro domiciliar" %} pertencente à {% link dicionario-fcd %}.

**Referência:** Para ver a referência sobre o UUID, acesse: [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### \#23 ivcf

{% include ledi_ivcf_campo.md %}

{% include ledi_ivcf_secao.md %}
