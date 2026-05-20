---
layout: doc
title: Ficha de Avaliação de Elegibilidade
id: dicionario-fae
parent: estrutura_arquivos
order: 11
---

## FichaAvaliacaoElegibilidade

### \#1	uuidFicha
Código UUID para identificar a ficha na base de dados nacional.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 36 | 44 |

**Regra:** É recomendado concatenar o CNES na frente do UUID, de modo que os 7 dígitos (CNES) + 1 de hífen somados aos 36 (32 caracteres + 4 hífen) do UUID são a limitação de 44 bytes do campo. Formato canônico.

**Referência:**  [Wikipedia UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### \#2	tpCdsOrigem
Tipo de origem dos dados do registro.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Integer | Sim | 1 | 1 |

**Observação**: Utilizar valor 3 (sistemas terceiros).

### \#3	cnsCidadao
CNS do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 15 | 15 |

**Regras:**

- CNS validado de acordo com o algoritmo;
- Não pode ser preenchido se o campo [cpfCidadao](#36-cpfcidadao) for preenchido;
- Este campo é de preenchimento obrigatório apenas se o campo [cpfCidadao](#36-cpfcidadao) não estiver preenchido.

**Referência:** O algoritmo de validação está presente em {% link algoritmo_CNS %}.

### \#4	nomeCidadao
Nome do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 3 | 70 |

**Regras:**

* As regras de validação de um nome estão descritas em {% link validar_nome %};
* É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

### \#5	nomeSocialCidadao
Nome social do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não| 0 | 70 |

**Regra:** Somente texto e apóstrofo (`'`).

### \#6	dataNascimentoCidadao

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Regra:** Não pode ser posterior a [dataAtendimento]({% url headerTransport %}#5-dataatendimento) e anterior a 130 anos a partir da [dataAtendimento]({% url headerTransport %}#5-dataatendimento).

**Referência:** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#7	sexoCidadao
Código do sexo do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** [Sexo]({% url dicionario %}#sexo).

### \#8	racaCorCidadao
Código da raça / cor do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regra:** É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

**Referência:** [RacaCor]({% url dicionario %}#racacor).

### \#9	nomeMaeCidadao
Nome da mãe do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 3 | 70 |

**Regras:**

* As regras de validação de um nome estão descritas em {% link validar_nome %};
* Não pode ser preenchido se o campo [desconheceNomeMae](#10-desconhecenomemae) = `true`;
* É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

### \#10 desconheceNomeMae
Marcador que indica que o cidadão desconhece o nome da mãe.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Boolean | Não | - | - |

### \#11 codigoIbgeMunicipioNascimento
Código IBGE do município de nascimento do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 7 | 7 |

**Regra:** Só pode ser preenchido se [nacionalidadeCidadao](#12-nacionalidadecidadao) = `1 (brasileiro)`. Neste caso é de preenchimento obrigatório.

**Referência:** [Municípios]({% url municipios %}).

### \#12 nacionalidadeCidadao
Código do marcador que indica se o cidadão é brasileiro, naturalizado ou estrangeiro.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regra:**	É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

**Referência:** [Nacionalidade]({% url dicionario %}#nacionalidade).

### \#13 emailCidadao
E-mail do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 6 | 100 |

**Regras:** Requerido seguir o padrão `endereco@domínio.extensão`.

### \#14 numeroNisPisPasep
Número do PIS/PASEP do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 11 | 11 |

**Regra:** Apenas números.

### \#15 endereco
Informações sobre o endereço do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
|EnderecoLocalPermanencia|	Condicional |	-|	-|

**Regra:**	É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

**Referência:**	[EnderecoLocalPermanencia](#enderecolocalpermanencia).

### \#16 atencaoDomiciliarProcedencia
Código do local de atendimento de origem do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** [AtencaoDomiciliarProcedencia]({% url dicionario %}#atencaodomiciliarprocedencia).

### \#17 atencaoDomiciliarModalidade
Código das opções de modalidade, indica se o cidadão é elegível ou inelegível.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** [ModalidadeAD]({% url dicionario %}#modalidadead).

### \#18 condicoesAvaliadas
Condições avaliadas do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| List\<Long> | Não | 0 | 24 |

**Referência:** [Condições Avaliadas](#condi-es-avaliadas).

### \#19 cid10Principal
Código do CID10 principal registrado na avaliação.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | - | - |

**Regras:**

- Não pode ser igual ao [cid10SecundarioUm](#20-cid10secundarioum) nem [cid10SecundarioDois](#21-cid10secundariodois);
- Devem ser apresentadas somente CID-10 permitidas para o [sexoCidadao](#7-sexocidadao).

### \#20 cid10SecundarioUm
Código do CID10 secundário registrado na avaliação.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | - | - |

**Regras:**

- Não pode ser igual ao [CID10Principal](#19-cid10principal) nem [cid10SecundarioDois](#21-cid10secundariodois);
- Devem ser apresentadas somente CID-10 permitidas para o [sexoCidadao](#7-sexocidadao).

### \#21 cid10SecundarioDois
Código do CID10 secundário registrado na avaliação.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | - | - |

**Regras:**

- Não pode ser igual ao [CID10Principal](#19-cid10principal) nem [cid10SecundarioUm](#20-cid10secundarioum);
- Devem ser apresentadas somente CID-10 permitidas para o [sexoCidadao](#7-sexocidadao).

### \#22 conclusaoDestinoElegivel
Código da conduta adotada caso cidadão seja `Elegível`.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regra:** Só pode ser preenchido se [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) for diferente de `4 (inelegível)`.

**Referência:** [ConclusaoDestinoElegivel]({% url dicionario %}#conclusaodestinoelegivel).

**Observação:** Os campos `#22` e `#23` são mutuamente exclusivos.

### \#23 conclusaoDestinoInelegivel
Código da conduta adotada caso cidadão seja `Inelegível`.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| List\<Long> | Condicional | 0 | 5 |

**Regra:** Só pode ser preenchido se [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) for igual a `4 (Inelegível)`.

**Referência:** [ConclusaoDestinoInelegivel]({% url dicionario %}#conclusaodestinoinelegivel).

**Observação:** Os campos `#22` e `#23` são mutuamente exclusivos.

### \#24 cuidadorCidadao
Código da relação de parentesco do cuidador com o cidadão em atenção domiciliar.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Não | - | - |

**Referência:** [CuidadorCidadao]({% url dicionario %}#cuidadorcidadao).

### \#25 turno
Código do turno em que o atendimento foi realizado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | - | - |

**Referência:** [Turno]({% url dicionario %}#turno).

### \#26 headerTransport
Profissional que realizou a visita.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| VariasLotacoesHeader | Sim | - | - |

**Regra:** Somente as CBOs apresentadas na [Tabela 9 - CBOs que podem registrar ficha de avaliação de elegibilidade]({% url grupo_cbo %}#ficha-de-avalia-o-de-elegibilidade) podem ser adicionadas no campo CBO do profissional principal.

**Referência:** [VariasLotacoesHeader]({% url headerTransport %}#variaslotacoesheader).

### \#27 nomePaiCidadao
Nome do pai do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 3 | 70 |

**Regras:**

* As regras de validação de um nome estão descritas em {% link validar_nome %};
* Não deve ser preenchido se o campo [desconheceNomePai](#28-desconhecenomepai) = `true`;
* É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

### \#28 desconheceNomePai
Marcador que indica que o cidadão desconhece o nome do pai.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Boolean | Não | - | - |

### \#29 dtNaturalizacao
Data de naturalização do cidadão no formato epoch time.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regras:**

* Só deve ser preenchido se o campo [nacionalidadeCidadao](#12-nacionalidadecidadao) = `2`. Neste caso, é de preenchimento obrigatório;
* Não pode ser posterior a [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
* Não pode ser anterior a [dataNascimentoCidadao](#6-datanascimentocidadao).

### \#30 portariaNaturalizacao
Portaria de naturalização do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 0 | 16 |

**Regra:** Só deve ser preenchido se o campo [nacionalidadeCidadao](#12-nacionalidadecidadao) = `2`. Neste caso o preenchimento é obrigatório.

### \#31 dtEntradaBrasil
Data em que o cidadão entrou no Brasil.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regras:**

* Só deve ser preenchido se o campo [nacionalidadeCidadao](#12-nacionalidadecidadao) = `3`. Neste caso o preenchimento é obrigatório;
* Não pode ser posterior a [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
* Não pode ser anterior a [dataNascimentoCidadao](#6-datanascimentocidadao).

### \#32 paisNascimento
Código do país de nascimento do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regras:**

* Só pode ser preenchido se o campo [nacionalidadeCidadao](#12-nacionalidadecidadao) = `3 (Estrangeiro)`. Neste caso o preenchimento é obrigatório;
* Se o campo [nacionalidadeCidadao](#12-nacionalidadecidadao) for igual a `1 (Brasileira)`, este campo deve ser preenchido com `31 (BRASIL)`.

**Referência:** [País]({% url paises %}).

## \#33 etnia
Etnia do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Condicional | - | - |

**Regras:** 

- Só deve ser preenchido se o campo [racaCorCidadao](#8-racacorcidadao) = `5`. Neste caso o preenchimento é obrigatório;
- O campo deve ser preenchido com a informação da coluna **Código** descrito no {% link dicionario#etnia, title:"Dicionário de dados" %}.

**Referência:** [etnia]({% url dicionario %}#etnia).

### \#34 cnsCuidador
CNS do cuidador.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 15 | 15 |

**Regras:**

- CNS validado de acordo com o algoritmo;
- Não pode ser preenchido se o campo [cuidadorCidadao](#24-cuidadorcidadao) = `1`;
- Não pode ser preenchido se o campo [cpfCuidador](#37-cpfcuidador) for preenchido.

**Referência:** O algoritmo de validação está presente em {% link algoritmo_CNS %}.

### \#36 cpfCidadao

CPF do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 11 | 11 |

**Regras:** 

- Somente CPF válido será aceito;
- Não pode ser preenchido se o campo [cnsCidadao](#3-cnscidadao) for preenchido;
- Este campo é de preenchimento obrigatório apenas se o campo [cnsCidadao](#3-cnscidadao) não estiver preenchido.

### \#37 cpfCuidador

CPF do cuidador.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 11 | 11 |

**Regras:** 

- Somente CPF válido será aceito;
- Não pode ser preenchido se o campo [cuidadorCidadao](#24-cuidadorcidadao) = `1`;
- Não pode ser preenchido se o campo [cnsCuidador](#34-cnscuidador) for preenchido.

## EnderecoLocalPermanencia

### \#1	bairro
Bairro onde está localizado o domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 0 | 72 |

**Regra:** É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

### \#2	cep
CEP do logradouro do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 8 | 8 |

**Regra:**

- Apenas números;
- É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

### \#3	codigoIbgeMunicipio
Código IBGE do município.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 7 | 7 |

**Regra:** É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

**Referência:** [Municipios]({% url municipios %}).

### \#4	complemento
Complemento do endereço do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 0 | 30 |

### \#5	nomeLogradouro
Nome do logradouro.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 0 | 72 |

**Regra:** É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

### \#6	numero
Número do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 1 | 10 |

**Regras:**

* Apenas letras e números;
* Não pode ser preenchido caso [stSemNumero](#11-stsemnumero) = `true`;
* É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

### \#7	numeroDneUf
Código indexador referente a Unidade Federativa.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | - | - |

**Regra:** É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

**Referência:** [Estados]({% url ufs %}).

### \#8	telefoneContato
Telefone para contato.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 10 | 11 |

**Regras:** 

- Este campo é de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`;
- Este campo não é de preenchimento obrigatório caso o campo [telefoneResidencia](#9-telefoneresidencia) estiver preenchido.

**Observação:** Mínimo 10 dígitos, máximo 11 (DDD + 8 ou 9).

### \#9	telefoneResidencia
Telefone residencial.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | 10 | 11 |

**Regras:** 

- Este campo é de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`;
- Este campo não é de preenchimento obrigatório caso o campo [telefoneContato](#8-telefonecontato) estiver preenchido.

**Observação:** Mínimo 10 dígitos, máximo 11 (DDD + 8 ou 9).

### \#10 tipoLogradouroNumeroDne
Código do tipo do logradouro onde está o domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Condicional | - | - |

**Regras:**

- Deve ser informado o código DNE;
- É de preenchimento obrigatório caso [conclusaoDestinoElegivel](#22-conclusaodestinoelegivel) = `1 (Admissão na própria EMAD)` e [atencaoDomiciliarModalidade](#17-atencaodomiciliarmodalidade) = `1 (AD1)`, `2 (AD2)` ou `3 (AD3)`.

**Referência:** [TipoLogradouro]({% url ufs %}#tipo-de-logradouro).

### \#11 stSemNumero
Marcador que indica que o domicílio não possui número.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Boolean | Não | - | - |

### \#12 pontoReferencia
Indica um ponto de referência para o domicílio do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 0 | 40 |

## Condições Avaliadas
|Descrição | Código |
| -------- | ------ |
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