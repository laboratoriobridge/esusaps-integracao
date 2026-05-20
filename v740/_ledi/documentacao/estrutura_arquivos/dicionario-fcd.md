---
layout: doc
title: Ficha de Cadastro Domiciliar e Territorial
id: dicionario-fcd
parent: estrutura_arquivos
order: 4
---

## CadastroDomiciliar

### \#1	animaisNoDomicilio
Lista de código dos animais no domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|List\<Long\>|	Condicional| 0|	4|

**Regras:**

* Só pode ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `01` Domicílio;
* Não pode ser preenchido se o campo [stAnimaisNoDomicilio](#7-stanimaisnodomicilio) = `false`;
* Não pode ser preenchido se o campo [statusTermoRecusa](#8-statustermorecusa) = `true`.

**Referências:** [AnimalNoDomicilio]({% url dicionario %}#animalnodomicilio).

### \#2	condicaoMoradia
Condições de moradia do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---| --- |---  | --- |
| CondicaoMoradia	| Condicional	| - |	-	|

**Regras:**

* Não deve ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `02` Comércio, `03` Terreno baldio, `04` Ponto Estratégico, `05` Escola, `06` Creche, `12` Estabelecimento Religioso, `13` CASAI ou `99` Outros;
* Não deve ser preenchido se o campo [statusTermoRecusa](#8-statustermorecusa) = `true`.

**Referências:** [CondicaoMoradia](#condicaomoradia).

### \#3	enderecoLocalPermanencia
Informações sobre o endereço do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---| --- |---  | --- |
| EnderecoLocalPermanencia|	Condicional |  - | -|

**Regras:** Preenchimento obrigatório caso o campo [statusTermoRecusa](#8-statustermorecusa) = `false`.

**Referências:** [EnderecoLocalPermanencia](#enderecolocalpermanencia).

### \#4	familias
Lista das famílias que residem no domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|List\<FamiliaRow>| Condicional| -|	-|

**Regras:**

- Só pode ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `01` Domicílio;
- Não podem ser cadastradas famílias com o mesmo [numeroCnsResponsavel](#2-numerocnsresponsavel);
- Não pode ser preenchido caso o campo [statusTermoRecusa](#8-statustermorecusa) = `true`.

**Referências:** [FamiliaRow](#familiarow).

### \#5	fichaAtualizada
Marcador que indica se a ficha é uma atualização.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Boolean|	Sim|	1|	1|

**Regra:** Caso seja uma ficha de atualização, o campo [uuidFichaOriginadora](#11-uuidfichaoriginadora) deve ser preenchido com o UUID da ficha que deu origem ao registro.

### \#6	quantosAnimaisNoDomicilio
Número de animais no domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String	|Condicional| 	0|	2|

**Regras:**

* Só pode ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `01` Domicílio;
* Não pode ser preenchido se o campo [stAnimaisNoDomicilio](#7-stanimaisnodomicilio) = `false`;
* Não pode ser preenchido se o campo [statusTermoRecusa](#8-statustermorecusa) = `true`;
* Não pode ser preenchido com o valor "0" (zero);
* Deve ser maior ou igual ao número de opções selecionadas no campo [animaisNoDomicilio](#1-animaisnodomicilio).

### \#7	stAnimaisNoDomicilio
Marcador que indica se existem animais no domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Boolean|	Condicional| 	-	| - |

**Regras:**

* Só pode ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `01` Domicílio;
* Não pode ser preenchido se o campo [statusTermoRecusa](#8-statustermorecusa) = `true`.

### \#8	statusTermoRecusa
Marcador que indica se o termo de recusa de cadastro do domicílio foi selecionado.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Boolean|	Não|	-|	-|

### \#9	tpCdsOrigem
Tipo de origem dos dados do registro.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Integer|	Sim|	1|	1|

**Regras:** Utilizar valor 3 (sistemas terceiros).

### \#10	uuid
Código UUID para identificar a ficha na base de dados nacional.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	36|	44|

**Regras:** É recomendado concatenar o CNES na frente do UUID, de modo que os 7 dígitos (CNES) + 1 de hífen somados aos 36 (32 caracteres + 4 hífen) do UUID são a limitação de 44 bytes do campo. Formato canônico.

**Referências:** Para ver a referência sobre o UUID, acesse: [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### \#11	uuidFichaOriginadora
Código UUID para identificar a ficha que deu origem ao cadastro do registro.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	36|	44|

**Regra:** Se for uma ficha de atualização, deve ser preenchido com o UUID da ficha que deu origem ao registro. Se for uma ficha de cadastro, este campo deve ser igual ao campo [UUID](#10-uuid).

**Referências:** Para ver a referência sobre o UUID, acesse: [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### \#12 tipoDeImovel
Indica o tipo de imóvel do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Sim|	-|	-|

**Referências:** [tipoDeImovel]({% url dicionario %}#tipodeimovel).

### \#13	instituicaoPermanencia
Informações referentes a instituição de permanência.

| Tipo | Obrigatório | Mínimo | Máximo |
| --- | --- | ---  | --- |
| InstituicaoPermanencia	| Não	| - | - |

**Regras:**

* Só pode ser preenchido quando o campo [tipoDeImovel](#12-tipodeimovel) = `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida socioeducativa ou `11` Delegacia;
* Não deve ser preenchido se o campo [statusTermoRecusa](#8-statustermorecusa) = `true`.

**Referências:** [InstituicaoPermanencia](#instituicaopermanencia).

### \#14 headerTransport
Informações sobre o profissional e a data do cadastro.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---| --- |---  | --- |
| UnicaLotacaoHeader|	Sim|	-|	-|

**Regras:** Somente as CBOs apresentadas na [Tabela 2 - CBOs que podem registrar ficha de cadastro domiciliar e territorial]({% url grupo_cbo %}#ficha-de-cadastro-domiciliar-e-territorial) podem ser adicionadas no campo CBO do profissional.

**Referências:** [UnicaLotacaoHeader]({% url headerTransport %}#unicalotacaoheader).

### \#15 latitude

Informação da latitude do imóvel.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
| Double | Condicional | - | 10 |

**Regras:**

- É de preenchimento obrigatório se o campo [longitude](#16-longitude) for preenchido;
- Os valores são limitados por -90 a 90 e apresentam até 8 casas decimais.

### \#16 longitude

Informação da longitude do imóvel.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Double | Condicional | - | 11 |

**Regras:**

- É de preenchimento obrigatório se o campo [latitude](#15-latitude) for preenchido;
- Os valores são limitados por -180 a 180 e apresentam até 8 casas decimais.

### \#17	tipoEndereco
Código do tipo de endereço do cadastro.

| Tipo | Obrigatório | Mínimo | Máximo |
| --- | --- | --- | --- |
| Integer | Sim | 1 | 1 |

**Regras:** Utilizar valor 3 (logradouro).

## EnderecoLocalPermanencia

### \#1	bairro
Bairro onde está localizado o domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	0|	72|

### \#2	cep
CEP do logradouro do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
| String|	Sim|	8|	8|

**Regras:**	Apenas números.

### \#3	codigoIbgeMunicipio
Código IBGE do município.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	7|	7|

**Referências:** [Municipios]({% url municipios %}).

### \#4	complemento
Complemento do endereço do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Não|	0|	30|

### \#5	nomeLogradouro
Nome do logradouro.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	0|	72|

### \#6	numero
Número do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	1|	10|

**Regras:**

* Apenas letras e números;
* Não pode ser preenchido caso [stSemNumero](#11-stsemnumero) = `true`.

### \#7	numeroDneUf
Código indexador referente a Unidade Federativa.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	-|	-|

**Referências:** [Estados]({% url ufs %}).

### \#8	telefoneContato
Telefone para contato.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Não|	10|	11|

**Regras:** Mínimo 10 dígitos, máximo 11 (DDD + 8 ou 9).

### \#9	telefoneResidencia
Telefone residencial.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Não|	10|	11|

**Regras:** 

- Mínimo de 10 e máximo de 11 dígitos (DDD + 8 ou 9 dígitos);
- Só pode ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `01` Domicílio.

### \#10	tipoLogradouroNumeroDne
Tipo do logradouro onde está o domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	-|	-|

**Regras:** Deve ser informado o código DNE.

**Referências:** [TipoLogradouro]({% url ufs %}#tipo-de-logradouro).

### \#11	stSemNumero
Marcador que indica que o domicílio não possui número.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Boolean|	Não|	-|	-|

### \#12	pontoReferencia
Indica um ponto de referência para o domicílio do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String |	Não|	0|	40|

### \#13 microArea

Microárea na qual o cidadão se encontra.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|String |Condicional | 2 | 2 |

**Regras:** Não deve ser preenchido se o campo [stForaArea](#14-stforaarea) = `true`. Caso contrário, o preenchimento é obrigatório.

### \#14 stForaArea
Marcador que indica que o cidadão está fora da área.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Boolean |Não |- |- |

##CondicaoMoradia

### \#1	abastecimentoAgua
Código do tipo de abastecimento de água.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Referências:** [AbastecimentoDeAgua]({% url dicionario %}#abastecimentodeagua).

### \#2	areaProducaoRural
Código da condição de posse e uso da terra.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Condicional | 	-|	-|

**Regras:**

* Não deve ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida socioeducativa, `11` Delegacia ou `13` CASAI;
* Não deve ser preenchido se o campo [localizacao](#5-localizacao) = `83 - Urbana` ou `205 - Periurbana`.

**Referências:** [CondicaoDePosseEUsoDaTerra]({% url dicionario %}#condicaodeposseeusodaterra).

### \#3	destinoLixo
Código do destino do lixo.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Referências:** [DestinoDoLixo]({% url dicionario %}#destinodolixo).

### \#4	formaEscoamentoBanheiro
Código da forma de escoamento do banheiro ou sanitário.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Referências:** [FormaDeEscoamentoDoBanheiroOuSanitario]({% url dicionario %}#formadeescoamentodobanheiroousanitario).

### \#5	localizacao
Código da localização do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Sim|	-|	-|

**Referências:** [LocalizacaoDaMoradia]({% url dicionario %}#localizacaodamoradia).

### \#6	materialPredominanteParedesExtDomicilio
Código do tipo de material predominante nas paredes externas do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Regras:** Não deve ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida socioeducativa, `11` Delegacia ou `13` CASAI.

**Referências:** [MaterialPredominanteNaConstrucao]({% url dicionario %}#materialpredominantenaconstrucao).

### \#7	nuComodos
Número de cômodos do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Não|	0|	2|

**Regras:** 

- Não deve ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida socioeducativa, `11` Delegacia ou `13` CASAI.
- Não pode ser preenchido com o valor "0" (zero).

### \#8	nuMoradores
Número de moradores do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Não|	0|	4|

**Regras:**

- Não pode ser menor que o número de [familias](#4-familias) cadastradas;
- Não pode ser menor que o somatório dos valores preenchidos no campo [numeroMembrosFamilia](#3-numeromembrosfamilia), considerando o valor `1` quando este campo não foi informado no cadastro de uma família.

### \#9 situacaoMoradiaPosseTerra
Código da situação de moradia ou de posse da terra.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Sim|	-|	-|


**Regras:** Não devem ser preenchidos se o campo [tipoDeImovel](#12-tipodeimovel) = `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida socioeducativa ou `11` Delegacia.

**Referências:** [SituacaoDeMoradia]({% url dicionario %}#situacaodemoradia).

### \#10 stDisponibilidadeEnergiaEletrica
Marcador que indica se existe disponibilidade de energia elétrica.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Boolean|	Não|	-|	-|

### \#11 tipoAcessoDomicilio
Código do tipo de acesso ao domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Regras:** Não deve ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida socioeducativa, `11` Delegacia ou `13` CASAI.

**Referências:** [TipoDeAcessoAoDomicilio]({% url dicionario %}#tipodeacessoaodomicilio).

### \#12 tipoDomicilio
Código do tipo de domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Regras:** Não deve ser preenchido se o campo [tipoDeImovel](#12-tipodeimovel) = `07` Abrigo, `08` Instituição de longa permanência para idosos, `09` Unidade prisional, `10` Unidade de medida socioeducativa, `11` Delegacia ou `13` CASAI.

**Referências:** [TipoDeDomicilio]({% url dicionario %}#tipodedomicilio).

### \#13 aguaConsumoDomicilio
Código do tipo do tratamento de água para consumo do domicílio.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Referências:** [AguaConsumoDomicilio]({% url dicionario %}#aguaconsumodomicilio).

### \#14 tipoOrigemEnergiaEletrica
Código do tipo de energia elétrica disponível.

| Tipo | Obrigatório | Mínimo | Máximo |
|----- | ----------- |------  | ------ |
|Long  |	Não         |	-      |	-      |

**Regras:** Não deve ser preenchido se o campo [stDisponibilidadeEnergiaEletrica](#10-stdisponibilidadeenergiaeletrica) = `false`.

**Referências:** [TipoOrigemEnergiaEletrica]({% url dicionario %}#tipoorigemenergiaeletrica).

## FamiliaRow

### \#1	dataNascimentoResponsavel
Data de nascimento, no formato epoch time, do cidadão responsável pela família.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Referências:** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

**Regras:**

- Não pode ser posterior a [dataAtendimento]({% url headerTransport %}#5-dataatendimento) e anterior a 130 anos a partir da [dataAtendimento]({% url headerTransport %}#5-dataatendimento).

### \#2	numeroCnsResponsavel
CNS do responsável familiar.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	15|	15|

**Regras:**

- Validado por algoritmo;
- Não pode ser preenchido se o campo [cpfResponsavel](#8-cpfresponsavel) for preenchido.

**Referências:** O algoritmo de validação está presente em {% link algoritmo_CNS %}.

### \#3	numeroMembrosFamilia
Quantidade de membros do núcleo familiar.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Integer|	Não|	0|	2|

**Regras:** Não pode ser preenchido com o valor "0" (zero).

### \#4	numeroProntuario
Código do prontuário familiar na UBS.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Não|	0|	30|

**Regras:** Apenas letras e números.

### \#5	rendaFamiliar
Código da renda familiar em salários mínimos.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Referências:** [RendaFamiliar]({% url dicionario %}#rendafamiliar).

### \#6	resideDesde
Mês e ano que a família começou a residir no domicílio, no formato epoch time.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Não|	-|	-|

**Regras:** Não pode ser posterior à data atual.

**Referências:** [Epoch Wikipedia](https://pt.wikipedia.org/wiki/Era_Unix) em milissegundos.

### \#7	stMudanca
Marcador que indica se a familia mudou-se.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Boolean|	Não|	-|	-|

### \#8 cpfResponsavel

CPF do responsável.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 11 | 11 |

**Regras:** 

- Somente CPF válido será aceito;
- Não pode ser preenchido se o campo [numeroCnsResponsavel](#2-numerocnsresponsavel) for preenchido.

## InstituicaoPermanencia

### \#1 nomeInstituicaoPermanencia
Indica o nome da instituição de permanência.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|String |Não | 0 | 100 |

### \#2 stOutrosProfissionaisVinculados
Marcador que indica se existem outros profissional de saúde vinculados à instituição (não inclui profissionais da rede pública de saúde).

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Boolean |Não |- |- |

### \#3 nomeResponsavelTecnico
Indica o nome do responsável técnico da instituição de permanência.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|String |Sim | 3 | 70 |

**Regras:** As regras de validação de um nome estão descritas em {% link validar_nome %}.

### \#4 cnsResponsavelTecnico
Indica o CNS do responsável técnico da instituição de permanência.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|String |Não | 15 | 15 |

**Referências:** O algoritmo de validação está presente em {% link algoritmo_CNS %}.

### \#5 cargoInstituicao
Indica o cargo do responsável técnico da instituição de permanência.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|String |Não | 0 | 100 |

### \#6 telefoneResponsavelTecnico
Indica o telefone para contato do responsável técnico da instituição de permanência.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|String |Não | 10 | 11 |

**Regras:** Mínimo 10 dígitos, máximo 11 (DDD + 8 ou 9).
