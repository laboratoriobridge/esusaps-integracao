---
layout: doc
title: Ficha complementar - Síndrome neurológica por Zika / Microcefalia
id: dicionario-fczm
parent: estrutura_arquivos
order: 13
---

## FichaComplementarZikaMicrocefalia

### \#1 headerTransport
Dados referentes ao profissional e a data do cadastro.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|UnicaLotacaoHeader |Sim |- |- |

**Regra:** Somente as CBOs apresentadas na [Tabela 11 - CBOs que podem registrar ficha complementar - Síndrome neurológica por Zika / Microcefalia]({% url grupo_cbo %}#ficha-complementar-s-ndrome-neurol-gica-por-zika-microcefalia) podem ser adicionadas no campo CBO do profissional.

**Referência:** [UnicaLotacaoHeader]({% url headerTransport %}#unicalotacaoheader).

### \#2	uuidFicha
Código UUID para identificar a ficha na base de dados nacional.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|String|	Sim|	36|	44|

**Regra:** É recomendado concatenar o CNES na frente do UUID, de modo que os 7 dígitos (CNES) + 1 de hífen somados aos 36 (32 caracteres + 4 hífen) do UUID são a limitação de 44 bytes do campo. Formato canônico.

**Referência:** [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### \#3	tpCdsOrigem
Tipo de origem dos dados do registro.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Integer|	Obrigatório|	1|	1|

Observações: Utilizar valor 3 (sistemas terceiros).

### \#4	turno
Código do turno onde aconteceu o atendimento.

| Tipo | Obrigatório | Mínimo | Máximo |
|---| --- |---  | --- |
|Long|	Sim|	-|	-|

**Referência:** [Turno]({% url dicionario %}#turno).

### \#5 cnsCidadao
CNS do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|String |Sim |15 |15 |

**Regras:**

- Validado por algoritmo;
- Não pode ser preenchido se o campo [cpfCidadao](#19-cpfcidadao) for preenchido.

**Referência:** O algoritmo de validação está presente em {% link algoritmo_CNS %}.

### \#6 cnsResponsavelFamiliar
CNS do responsável do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|String |Não |15 |15 |

**Regras:**

- Validado por algoritmo;
- Não pode ser preenchido se o campo [cpfResponsavelFamiliar](#20-cpfresponsavelfamiliar) for preenchido.

**Referência:** O algoritmo de validação está presente em {% link algoritmo_CNS %}.

### \#7 dataRealizacaoTesteOlhinho
Data de realização do "Teste do olhinho (TRV)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- Não pode ser anterior em 20 anos ou posterior à [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
- Se este campo for preenchido, o campo [coResultadoTesteOlhinho](#8-coresultadotesteolhinho) é obrigatório.

**Referência:** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#8 coResultadoTesteOlhinho
Resultado do "Teste do olhinho (TRV)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- É obrigatório o preenchimento de pelo menos um destes campos: `8`, `10`, `12`, `14`, `16` e `18`;
- Se este campo for preenchido, o campo [dataRealizacaoTesteOlhinho](#7-datarealizacaotesteolhinho) é obrigatório.

**Referência:** [testeOlhinho]({% url dicionario %}#testeolhinho).

### \#9 dataRealizacaoExameFundoOlho
Data de realização do "Exame de fundo de olho (02.11.06.010-0 - Fundoscopia)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- Não pode ser anterior em 20 anos ou posterior à [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
- Se este campo for preenchido, o campo [coResultadoExameFundoOlho](#10-coresultadoexamefundoolho) é obrigatório.

**Referências:**

**1.** O código deste exame é compatível com a competência 11/2025 da tabela do SIGTAP, disponível em: [Tabela unificada SIGTAP](http://sigtap.datasus.gov.br/tabela-unificada/app/sec/procedimento/publicados/consultar).

**2.** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#10 coResultadoExameFundoOlho
Resultado do "Exame de fundo de olho (02.11.06.010-0 - Fundoscopia)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- É obrigatório o preenchimento de pelo menos um destes campos: `8`, `10`, `12`, `14`, `16` e `18`;
- Se este campo for preenchido, o campo [dataRealizacaoExameFundoOlho](#9-datarealizacaoexamefundoolho) é obrigatório.

**Referência:** [exameFundoOlho]({% url dicionario %}#examefundoolho).

### \#11 dataRealizacaoTesteOrelhinha
Data de realização do "Teste da orelhinha - PEATE (02.11.07.027-0 - Potencial evocado auditivo para triagem auditiva)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- Não pode ser anterior em 20 anos ou posterior à [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
- Se este campo for preenchido, o campo [coResultadoTesteOrelhinha](#12-coresultadotesteorelhinha) é obrigatório.

**Referências:**

**1.** O código deste exame é compatível com a competência 11/2025 da tabela do SIGTAP, disponível em: [Tabela unificada SIGTAP](http://sigtap.datasus.gov.br/tabela-unificada/app/sec/procedimento/publicados/consultar).

**2.** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#12 coResultadoTesteOrelhinha
Resultado do "Teste da orelhinha - PEATE (02.11.07.027-0 - Potencial evocado auditivo para triagem auditiva)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- É obrigatório o preenchimento de pelo menos um destes campos: `8`, `10`, `12`, `14`, `16` e `18`;
- Se este campo for preenchido, o campo [dataRealizacaoTesteOrelhinha](#11-datarealizacaotesteorelhinha) é obrigatório.

**Referência:** [testeOrelhinha]({% url dicionario %}#testeorelhinha).

### \#13 dataRealizacaoUSTransfontanela
Data de realização do exame de imagem "US transfontanela (02.05.02.017-8 - Ultrassonografia transfontanela)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- Não pode ser anterior em 20 anos ou posterior à [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
- Se este campo for preenchido, o campo [coResultadoUsTransfontanela](#14-coresultadoustransfontanela) é obrigatório.

**Referências:**

**1.** O código deste exame é compatível com a competência 11/2025 da tabela do SIGTAP, disponível em: [Tabela unificada SIGTAP](http://sigtap.datasus.gov.br/tabela-unificada/app/sec/procedimento/publicados/consultar).

**2.** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#14 coResultadoUsTransfontanela
Resultado do exame de imagem "US transfontanela (02.05.02.017-8 - Ultrassonografia transfontanela)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- É obrigatório o preenchimento de pelo menos um destes campos: `8`, `10`, `12`, `14`, `16` e `18`;
- Se este campo for preenchido, o campo [dataRealizacaoUSTransfontanela](#13-datarealizacaoustransfontanela) é obrigatório.

**Referência:** [usTransfontanela]({% url dicionario %}#ustransfontanela).

### \#15 dataRealizacaoTomografiaComputadorizada
Data de realização do exame de imagem "Tomografia computadorizada (02.06.01.007-9 - Tomografia computadorizada do crânio)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- Não pode ser anterior em 20 anos ou posterior à [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
- Se este campo for preenchido, o campo [coResultadoTomografiaComputadorizada](#16-coresultadotomografiacomputadorizada) é obrigatório.

**Referências:**

**1.** O código deste exame é compatível com a competência 11/2025 da tabela do SIGTAP, disponível em: [Tabela unificada SIGTAP](http://sigtap.datasus.gov.br/tabela-unificada/app/sec/procedimento/publicados/consultar).

**2.** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#16 coResultadoTomografiaComputadorizada
Resultado do exame de imagem "Tomografia computadorizada (02.06.01.007-9 - Tomografia computadorizada do crânio)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- É obrigatório o preenchimento de pelo menos um destes campos: `8`, `10`, `12`, `14`, `16` e `18`;
- Se este campo for preenchido, o campo [dataRealizacaoTomografiaComputadorizada](#15-datarealizacaotomografiacomputadorizada) é obrigatório.

**Referência:** [tomografiaComputadorizada]({% url dicionario %}#tomografiacomputadorizada).

### \#17 dataRealizacaoRessonanciaMagnetica
Data de realização do exame de imagem "Ressonância magnética (02.07.01.006-4 - Ressonância magnética de crânio)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- Não pode ser anterior em 20 anos ou posterior à [dataAtendimento]({% url headerTransport %}#5-dataatendimento);
- Se este campo for preenchido, o campo [coResultadoRessonanciaMagnetica](#18-coresultadoressonanciamagnetica) é obrigatório.

**Referências:**

**1.** O código deste exame é compatível com a competência 11/2025 da tabela do SIGTAP, disponível em: [Tabela unificada SIGTAP](http://sigtap.datasus.gov.br/tabela-unificada/app/sec/procedimento/publicados/consultar).

**2.** A data deve ser apresentada seguindo o padrão [Epoch](https://pt.wikipedia.org/wiki/Era_Unix), convertido em milissegundos . Para realizar a conversão, pode ser utilizado o conversor [Current millis](https://currentmillis.com/).

### \#18 coResultadoRessonanciaMagnetica
Resultado do exame de imagem "Ressonância magnética (02.07.01.006-4 - Ressonância magnética de crânio)".

| Tipo | Obrigatório | Mínimo | Máximo |
|--- |--- |--- |--- |
|Long |Condicional |- |- |

**Regras:**

- É obrigatório o preenchimento de pelo menos um destes campos: `8`, `10`, `12`, `14`, `16` e `18`;
- Se este campo for preenchido, o campo [dataRealizacaoRessonanciaMagnetica](#17-datarealizacaoressonanciamagnetica) é obrigatório.

**Referência:** [ressonanciaMagnetica]({% url dicionario %}#ressonanciamagnetica).

### \#19 cpfCidadao

CPF do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 11 | 11 |

**Regras:** 

- Somente CPF válido será aceito;
- Não pode ser preenchido se o campo [cnsCidadao](#5-cnscidadao) for preenchido.

### \#20 cpfResponsavelFamiliar

CPF do responsável do cidadão.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 11 | 11 |

**Regras:** 

- Somente CPF válido será aceito;
- Não pode ser preenchido se o campo [cnsResponsavelFamiliar](#6-cnsresponsavelfamiliar) for preenchido.