---
id: principais_alteracoes
title: Principais alterações entre versões recentes
order: 5
parent: layout_ab
---

Este documento relata as principais alterações entre as últimas versões do LEDI APS:

### Versão 8.7.0

#### 1. Inclusão de novo item "PNCT manutenção" em AC

Foi incluído o item **"PNCT manutenção"** no campo **Práticas em saúde** da Atividade coletiva, também disponível nos relatórios de produção e em seus filtros personalizados.

#### 2. Despriorização do CPF na Ficha de Avaliação de Elegibilidade

Adição dos campos **"Cidadão não possui CPF"** e **"Justificativa"** na Ficha de Avaliação de Elegibilidade. O CPF permanece como identificador prioritário do cidadão. A exceção se aplica quando o cidadão não possui CPF, situação em que é obrigatório o preenchimento do campo de justificativa para validar o cadastro sem esse dado.

### Versão 8.6.0

#### 1. Atualização da base de endereços 2026

A base de endereços do sistema foi atualizada, mantendo os dados de localidades em conformidade com a versão de 2026.

#### 2. Atualização da tabela SIGTAP para competência de 06/2026

Atualização da tabela de procedimentos SIGTAP para a competência de 06/2026, trazendo inclusões de procedimentos.

#### 3. Inclusão de novo item de Fornecimento de kit bucal em AC

Foi incluído o item **Fornecimento de kit bucal** no campo **Práticas em saúde** da Atividade Coletiva, também disponível nos relatórios de produção e em seus filtros personalizados.

#### 4. Priorização do CPF como chave principal na Ficha de Atividade Coletiva

Adição dos campos "Justificativa" e "Cidadão não possui CPF" na relação de participantes da Ficha de Atividade Coletiva. O CPF permanece como chave principal e única para identificação do participante, sendo utilizado como critério primário em todos os casos. A exceção só se aplica quando o participante não possui CPF, situação em que é sugerido o preenchimento do campo de justificativa para validar o cadastro sem esse dado.

### Versão 8.5.0

#### 1. Suporte ao CNPJ alfanumérico

Foi realizada a adequação do LEDI para suportar o novo CNPJ alfanumérico, conforme a Instrução Normativa 2.229 da Receita Federal. A atualização contempla a validação dos CNPJs com letras e números nos 12 primeiros caracteres, mantendo os 2 últimos dígitos como verificadores, com ajustes nas regras de cálculo e validação dos dígitos verificadores.

#### 2. Priorização do CPF como chave principal na Ficha de Atendimento Domiciliar e Ficha de Visita Domiciliar e Territorial

Adição dos campos "Justificativa" e "Cidadão não possui CPF" nas fichas mencionadas. O CPF permanece como chave principal e única para identificação do cidadão, sendo utilizado como critério primário em todos os casos. A exceção só se aplica quando o cidadão não possui CPF, situação em que é obrigatório o preenchimento do campo de justificativa para validar o cadastro sem esse dado.

#### 3. Substituição do conceito de "Ficha"

Foi substituído o termo "ficha" por "modelo de informação" ou "registro" (a depender do contexto) em todas as páginas da documentação. Nomes de atributos ou valores do sistema em si não foram alterados.

### Versão 8.4.2

#### 1. Atualizações em regras vacinais

Inclusão do fabricante "LIBBS FARMACEUTICA LTDA.".

#### 2. Inclusão de novos itens para seleção nos campos de Tema para reunião e Público-alvo do registro de Atividade coletiva

Foi incluído o novo item de **Vigilância em saúde** no campo de Temas para reunião e os novos itens **Adolescente em atendimento socioeducativo em meio aberto e Adolescente em atendimento socioeducativo em meio fechado** no campo Público-alvo do registro de Atividade coletiva.

### Versão 8.4.1

#### 1. Atualização da tabela SIGTAP para competência de 05/2026

A tabela de procedimentos SIGTAP do sistema foi atualizada para a competência de 05/2026, trazendo a inclusão e atualização de procedimentos.

#### 2. Atualizações em regras vacinais

Atualização das regras para o registro da aplicação do imunobiológico "Vacina inativada poliomielite (cód 22)", além de ajuste no grupo de atendimento "Outros".

### Versão 8.4.0

#### 1. Priorização do CPF como identificador principal da pessoa

Foram incluídos os campos `stNaoPossuiCpf` e `justificativaNaoPossuiCpf` nos modelos de dados do Cadastro Individual, Atendimento Individual, Atendimento Odontológico Individual, Procedimentos, Síndrome neurológica por Zika / Microcefalia, Marcadores de Consumo Alimentar e Vacinação para tornar o CPF o identificador principal da pessoa nos registros sendo que, caso não seja informado um CPF, uma justificativa deverá ser registrada.

#### 2. Atualização do modelo de dados do Cadastro individual

Foram incluídos novos campos de `estadoCivil`, `tipoSanguineo` e `dnv`.

#### 3. Atualização no modelo de dados do Cadastro do imóvel

Foi atualizado o campo `numeroMembrosFamilia` para permitir o registro de valores com até 3 dígitos.

#### 4. Atualização do modelo de dados de Vacinação

Foi feita adequação estrutural para padronização dos fabricantes de imunobiológicos, passando a utilizar o código da RNDS do fabricante como identificador principal, no novo campo `coRndsFabricane` ao invés do nome do mesmo no campo `fabricante`, que foi descontinuado.
Também foram atualizadas as correspondências entre vias de administração e locais de aplicação utilizados no registro de vacinas, além de adequação estrutural do sistema para padronização desses registros com os respectivos códigos da RNDS.

#### 5. Atualização da validação de uso do CID-10 em encaminhamentos

Foi atualizada a regra de validação do campo de CID-10 nos registros de encaminhamentos. A partir desta versão, deixa de existir a restrição por CBO para utilização do CID-10 no transport, permitindo que todos os profissionais habilitados a realizar um atendimento individual possam informar o código CID-10 nesses registros.

#### 6. Inativação de procedimentos AB

Os procedimentos do tipo AB que possuíam equivalência SIGTAP foram inativados para novas seleções no sistema, permanecendo disponíveis para uso apenas os procedimentos SIGTAP correspondentes.

#### 7. Inclusão do CBO Mediador Intercultural 

Foi incluído o CBO `515335 - Mediador Intercultural` na lista de profissionais habilitados para registro dos Modelos de Informação de Cadastro Individual, Cadastro Domiciliar e Territorial e Atividade Coletiva.

### Versão 7.4.2

#### 1. Atualizações em regras vacinais

Foram atualizadas as regras vacinais para aplicação do imunobiológico "vacina influenza trivalente - alta dosagem (cod 117)" para transcrição de caderneta, além de alterações nas nomenclaturas e siglas dos imunobiológicos.

#### 2. Atualização da tabela SIGTAP para competência de 03/2026

A tabela de procedimentos SIGTAP do sistema foi atualizada para a competência de 03/2026, trazendo a inclusão e atualização de procedimentos.

### Versão 7.4.1

#### 1. Atualização da tabela SIGTAP para competência de 02/2026

A tabela de procedimentos SIGTAP do sistema foi atualizada para a competência de 02/2026, trazendo a inclusão e atualização de procedimentos.

#### 2. Atualizações em regras vacinais

Foram atualizadas as regras vacinais para aplicação do imunobiológico "Pneumo 20 (cod 107)".

### Versão 7.4.0

#### 1. Atualizações em regras vacinais

Foram atualizadas as regras vacinais para aplicação dos imunobiológicos "Pneumo 20 (cod 107)", "Varicela (cod 34)", "Meningo C (cód. 41)" e "Covid-19-RNAm, Moderna (Spikevax) (cód. 97)".

### Versão 7.3.7

#### 1. Atualização da validação do CNS

Foi atualizada a validação do CNS para aceitar um novo tipo de CNS iniciado com 5.

### Versão 7.3.6

#### 1. Atualizações em regras vacinais

Foi atualizada a regra para registro de aplicação da dose DU do imunobiológico "Vacina da dengue" na estratégia de rotina.

### Versão 7.3.5

#### 1. Atualizações em regras vacinais

Foram atualizadas os nomes de fabricantes relacionados à COVID-19 e removida a validação de mapeamento obrigatório entre fabricantes e imunobiológicos contra COVID-19.

### Versão 7.3.4

#### 1. Atualizações em regras vacinais

Foram atualizadas as regras para aplicação dos imunobiológicos "Nirsevimabe 0,5ml (cód. 115)", "Nirsevimabe 1,0ml (cód. 116)", não sendo mais permitida a inclusão para a estratégia Serviço privado, e para o imunobiológico "Vacina Covid-19-inativada, Sinopharm (cód. 114)" pode ser aplicado apenas via transcrição de caderneta.

#### 2. Atualização da tabela SIGTAP para competência de 10/2025

A tabela de procedimentos SIGTAP do sistema foi atualizada para a competência de 10/2025. Sendo assim, tivemos a inclusão e atualização de procedimentos.

#### 3. Atualização em validação dos problemas e condições no Modelo de Informação de Atendimento Individual

Foi atualizada a `ListaCiapCondicaoAvaliada` do grupo `ProblemaCondicao`. Somente os códigos AB presentes nessa listagem poderão ser transmitidos no Modelo de Informação de Atendimento Individual.

### Versão 7.3.3

#### 1. Atualização nas regras do Modelo de Informação de Atendimento Individual

A documentação do Modelo de Informação de Atendimento Individual foi atualizada para incluir a referência entre os campos `ficouEmObservacao` e `profissionalFinalizadorObservacao`. O campo `ficouEmObservacao` agora tem a indicação de vínculo com `profissionalFinalizadorObservacao`, e este é descrito como opcional.

### Versão 7.3.2

#### 1. Atualizações em regras vacinais

A regra de validação foi atualizada para permitir o envio apenas de vacinas com fabricantes cadastrados na tabela de Fabricantes.

### Versão 7.3.1

#### 1. Atualização da tabela SIGTAP para competência de 08/2025

A tabela de procedimentos SIGTAP do sistema foi atualizada para a competência de 08/2025. Sendo assim, tivemos a inclusão e atualização de procedimentos e códigos CID-10.

#### 2. Atualizações em regras vacinais

Foram atualizadas as regras para aplicação dos imunobiológicos BCG, SCRV, VVSR-RecAdj, VVSR-Rec e CHIK-A. Também foram atualizadas as diversas siglas e nomes de imunobiológicos, para compatibilidade com a RNDS.

### Versão 7.3.0

#### 1. Atualizações em regras vacinais

Foram atualizadas as regras para aplicação do imunobiológico "Nirsevimabe 0,5ml (cód. 115)", "Nirsevimabe 1,0ml (cód. 116)" e suas nomenclaturas, e alteração da descrição das siglas das doses relacionadas aos códigos de 59 a 82 para Unidades.

#### 2. Novos campos no Modelo de Informação de Vacinação

Inclusão dos campos "Via de administração" e "Local de aplicação" no Modelo de Informação de Vacinação.

### Versão 7.2.3

#### 1. Inclusão de novos medicamentos na tabela CATMAT

Foram incluídos os medicamentos abaixo na :link{id=catmat}:

| Código CATMAT | Princípio Ativo | Concentração | Forma Farmacêutica | Unidade de Fornecimento |
| ------------- | --------------- | ------------ | ------------------ | ----------------------- |
|BR0439142|Entricitabina + Fumarato de Tenofovir Desoproxila|200mg + 300mg|Comprimido revestido|Comprimido|
|BR0446631|Isoniazida + Rifampicina|150 mg + 300 mg|Comprimido revestido|Comprimido|
|BR0470184|Rifapentina|150 mg|Comprimido|Comprimido|
|BR0461235|Rifampicina + Isoniazida + Pirazinamida|75 mg + 50 mg + 150 mg|Comprimido orodispersível|Comprimido|
|BR0466430|Pirazinamida|150 mg|Comprimido orodispersível|Comprimido|
|BR0387488|Isoniazida|300 mg|Comprimido|Comprimido|
|BR0433687|Dolutegravir|50 mg|Comprimido revestido|Comprimido|
|BR0486368|Lamivudina + Dolutegravir sódico |300 mg + 50 mg|Comprimido revestido|Comprimido|
|BR0467108|Tenofovir Alafenamida|25 mg|Comprimido revestido|Comprimido|


### Versão 7.2.2

#### 1. Atualização dos resultados quantitativos de exames estruturados

Os exames estruturados do tipo quantitativo **Colesterol total**, **HDL**, **LDL**, **Triglicerídeos** e **Creatinina** passaram a ter seus resultados com **duas casas decimais após a vírgula**.  Os intervalos de preenchimento desses exames foram atualizados, por exemplo, de `1 a 10000` para `1,00 a 10000,00` e de `0,1 a 500,0` para `0,10 a 500,00`.  

#### 2. Atualizações em regras vacinais

Foram atualizadas as regras para aplicação do imunobiológico "Nirsevimabe 50mg (cód. 115)", "Nirsevimabe 100mg (cód. 116)" e "Vacina pneumo 23 (cód. 21)" e para o fabricante do imunobiológico "Vacina COVID-19-RNAm, Pfizer (Comirnaty) pediátrica menor de 5 anos (cód. 102)".

#### 3. Adição do IVCF-20 no Modelo de Informação de Visita Domiciliar e Territorial

Foram adicionadas as regras para a inclusão do IVCF-20(Índice de Vulnerabilidade Clínico-Funcional) no Modelo de Informação de Visita Domiciliar e Territorial.

#### 4. Inclusão de campos no Modelo de Informação de Vacinação

Foram incluídos novos campos no Modelo de Informação de Vacinação:

- Campo "Condição maternal" que serve para agrupar os antigos campos “Gestante” e “Puérpera”;
- Campo "Especialidade do profissional prescritor" que serve para o usuário informar o CBO do profissional que prescreveu a vacina. Este campo possui uma lista de :link[CBOs específicos]{id=dicionario anchor=cboprescritor};
- Campo "Motivo de indicação" que serve para indicar o CID10 que motivou a indicação da vacina; 
- Grupo de campos relacionados à "Pesquisa Clínica", com os campos:
    - "Anvisa Protocolo Estudo";
    - "Anvisa Protocolo Versão";
    - "Anvisa Número de Registro".


### Versão 7.2.1

#### 1. Atualizações de vacinação

Atualização de regras dos seguintes imunobiológicos:

- Vacina pneumo 10 (código 26);
- Vacina raiva (código 37);
- Vacina penta (DTP/HepB/Hib) (código 42);
- Vacina DTP (código 46);
- Vacina dengue (atenuada) (código 104);
- Vacina febre amarela (código 14);
- Vacina pneumo 10 (código 26);
- Vacina raiva (código 37);
- Vacina meningo C (código 41);
- Vacina DTP (código 46);
- Vacina meningo ACWY (código 74);
- Vacina COVID-19-inativada, Sinovac/Butantan (Coronavac) (código 86);
- Vacina COVID-19-inativada, Sinovac (Coronavac) (código 98);
- Vacina COVID-19-RNAm, Pfizer (Comirnaty) bivalente (código 103).

#### 2. Atualizações em procedimentos de evolução odontológica

Disponibilização dos seguintes procedimentos do grupo `07 - Órteses, próteses e materiais especiais` para registro no Modelo de Informação de Atendimento Odontológico Individual:

- 07.01.07.001-3 - APARELHO FIXO BILATERAL PARA FECHAMENTO DE DIASTEMA;
- 07.01.07.002-1 - APARELHO ORTOPÉDICO E ORTODÔNTICO REMOVÍVEL;
- 07.01.07.003-0 - APARELHO P/ BLOQUEIO MAXILO-MANDIBULAR;
- 07.01.07.017-0 - APARELHO ORTODÔNTICO FIXO;
- 07.01.07.016-1 - APARELHO ORTOPÉDICO FIXO;
- 07.01.07.015-3 - PRÓTESE DENTÁRIA SOBRE IMPLANTE;
- 07.01.07.004-8 - COROA DE ACO E POLICARBOXILATO.

### Versão 7.2.0

#### 1. Atualização no modelo de dados para transmissão de procedimentos de Oferta de Cuidado Integrado

Na estrutura dos arquivos do **Modelo de Informação de Atendimento Individual** e do **Modelo de Informação de Atendimento Odontológico Individual** foi incluído o modelo de dados que permite a **transmissão** de códigos SIGTAP do grupo **09 - Procedimentos para Ofertas de Cuidados Integrados**. 

#### 2. Ajustes nas regras de problemas e condições

Na estrutura dos arquivos do **Modelo de Informação de Atendimento Individual**, **Modelo de Informação de Atendimento Odontológico Individual** e **Modelo de Informação de Atendimento Domiciliar** foram ajustadas as regras do modelo de dados ProblemaCondicao para contemplar as regras que estavam sendo aplicadas na validação durante a importação.

#### 3.  Atualizações em Temas para saúde de Atividade Coletiva

Foi permitido o registro de **Temas para saúde** para atividades em reunião, no contexto em que **Educação permanente** é tema exclusivo da reunião. 
Além disso, foram incluídas duas novas opções de Temas para saúde, disponíveis tanto no registro de atividade em saúde quanto em reunião: **Amamentação** e **Introdução alimentar**.
Por fim, o tema para saúde **Introdução alimentar** passa a ser descrito e utilizado como **Alimentação complementar saudável**.

#### 4. Inclusão de grupo "exame" em Atendimento Odontológico

Foi incluído o grupo "exame" no modelo de dados de Atendimento Odontológico.

#### 5. Atualizações de vacinação

Inclusão do imunobiológico Vacina chikungunya (recombinante e atenuada) (código 113, Sigla "CHIK-A) para transcrição de caderneta. 
Alterações da nomenclatura da Estratégia de código 9, anteriormente denominada "Monitoramento Rápido de Cobertura Vacinal", para "Monitoramento das Estratégias de Vacinação" e das does de "Profilaxia", para "Profilaxia/Tratamento";

#### 6. Atualização da base de endereços

Foi atualizada a base de endereços utilizada no sistema.

### Versão 6.3.9

#### 1. Atualizações em resultados de exames estruturados

Foi adicionada uma nova regra para o exame "0202020509 - Prova do laço", definindo que as opções de resultado disponíveis devem ser: "Positivo", "Negativo" e "Inconclusivo".

#### 2. Atualizações em regras vacinais

Foram atualizadas as regras para aplicação do imunobiológico "Vacina sarampo, rubéola (cód 36)" e para os fabricantes dos imunobiológicos "vacina Covid-19-RNAm, Pfizer (Comirnaty) pediátrica (cód. 99)" e "vacina Covid-19-inativada, Sinopharm (cód. 114)".  

### Versão 6.3.8

Foram incluídas novas regras para aplicação do imunobiológico Covid-19-inativada, Sinopharm (cód. 114) e atualizada as regras do imunobiológico Vacina varíola símia (atenuada) (cód. 100).

### Versão 6.3.7

#### 1. Atualizações em regras de vacinação

Foi alterado o nome e a sigla da Vacina Varíola Bavarian Nordic - VVBN (cód. 100) para, respectivamente, Vacina varíola símia (atenuada) - VVS. Além disso, foram atualizadas as regras para aplicação dos imunobiológicos Vacina Influenza trivalente (cód. 33), Vacina Pneumo 13 (cód. 59) e Vacina Varíola Símia (atenuada) (cód. 100).

#### 2. Atualizações no cadastro individual

Foi incluída a opção de deficiência "TEA", referente ao Transtorno do Espectro Autista, e tornado obrigatório o preenchimento do campo "Está em situação de rua?".

### Versão 6.3.5

#### 1. Inclusão de novo motivo de visita

Foi incluída a opção "Pessoa idosa" como um dos motivos de visita do Modelo de Informação de Visita Domiciliar e Territorial.

#### 2. Remoção de opção de Raça/cor.

Com o objetivo de qualificar os cadastros de cidadão e considerando a [Portaria Nº 344 de 1º de fevereiro de 2017](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt0344_01_02_2017.html), foi removida a possibilidade de informar "Sem informação" no campo "Raça/cor" para o Modelo de Informação de Cadastro Individual e o Modelo de Informação de Avaliação de Elegibilidade.

#### 3. Novas regras para aplicação do imunobiológico Vacina influenza trivalente (33)

Foram atualizadas as regras para aplicação do imunobiológico Vacina influenza trivalente (código 33), adicionando doses da estratégia "Rotina" e alterando doses disponíveis para as estratégias "Especial", "Campanha indiscriminada" e "Vacinação escolar".

### Versão 6.3.4

#### 1. Novas regras para aplicação do imunobiológico Hexa acelular (43)

Foram incluídas novas regras para aplicação do imunobiológico Hexa acelular (43), sendo adicionada a estratégia "Rotina" e suas respectivas doses".

#### 2. Inclusão do procedimento Orientação Individual em Saúde (ABPG042)

Foi incluído o procedimento **ABPG042 - Orientação Individual em Saúde** nos arquivos de estrutura do Modelo de Informação de Atendimento Odontológico Individual e do Modelo de Informação de Procedimentos.

### Versão 6.3.3

#### 1. Inclusão do IVCF-20

Foi incluída a possibilidade de informar o registro de IVCF-20 em registros de atendimentos individuais, atendimentos odontológicos individuais e atendimentos de procedimento.

{/* Esta alteração foi inserida no transport 6.3.1, mas como ela foi enviada em uma versão de produção de forma flagueada apenas para os pilotos, a documentação não foi integrada para que não fosse disponibilizada em produção não intencionalmente. */}

#### 2. Inclusão de procedimentos do subgrupo 04 - Telessaúde

Foram incluídas na documentação as referências dos novos procedimentos pertencentes ao subgrupo 04 - Telessaúde (grupo 08 - Ações complementares da atenção à saúde).

#### 3. Atualizações de regras vacinais

Foi incluída uma nova estratégia chamada "Vacinação escolar" e suas respectivas :link[regras de registro]{id=regras_vacinacao}.

### Versão 6.3.2

#### 1. Atualizações de vacinação

Foi incluído um novo imunobiológico contra COVID-19, o "COVID-19 SERUM/ZALIKA" (cód 112) e atualizadas as regras de aplicação de outros imunobiológicos contra COVID-19 (Pfizer-Comirnaty (cód 87), Moderna-Spikevax (cód 97), Pfizer-Comirnaty pediátrica (cód 99) e Pfizer-Comirnaty pediátrica menor de 5 anos (cód 102)) e dos imunobiológicos SCR (cód 24) e ROTA (cód 45).

Também foram atualizados os Grupos de Atendimento disponíveis, incluindo as opções "Prematuridade", "Anomalias de vias aéreas", "Obesidade (score-Z acima de +2)", "Erros Inatos da Imunidade (EII)", "Doença Hepática Crônica" e "População Rural" e inativando a opção "Cirrose Hepática".


### Versão 6.3.0

#### 1. Inclusão do sexo "Indeterminado"

Foi incluída a possibilidade de informar sexo de nascimento "indeterminado" para o cidadão, em conssonância com a versão mais recente da **DNV - Declaração de Nascido Vivo**. A validação de todos os campos relacionados ao sexo biológico, em todos os modelos de dados do LEDI, agora considera a possibilidade desse valor.

#### 2. Atualização de regras vacinais

Foram atualizadas as regras para aplicação dos imunobiológicos VIP (22), dT (25), VOP (28) e dTpa (57).

#### 3. API de transmissão de registros no formato LEDI

:nr A API de transmissão de registros no formato LEDI possibilita que sistemas terceiros enviem registros no formato LEDI de forma automatizada. Mais informações sobre como utilizar a API estão na disponíveis na :link[documentação]{id=api_transmissao_registro_LEDI}.


### Versão 6.2.0

#### 1. Inclusão de regras vacinais

Foram incluídas novas regras para aplicação dos imunobiológicos Hexa acelular (43), Penta (42) e SCRV (56).

#### 2. Inclusão de sinais vitais, antropometria e glicemia capilar

Foi incluído um grupo de informações chamado "medicoes" no Modelo de Informação de Atendimento Individual, Modelo de Informação de Procedimentos e Modelo de Informação de Atendimento Odontológico Individual. As seguintes alterações foram realizadas:

- Remoção dos campos "pesoAcompanhamentoNutricional" e "alturaAcompanhamentoNutricional" do Modelo de Informação de Atendimento Individual, Modelo de Informação de Procedimentos e Modelo de Informação de Atendimento Odontológico Individual;
- Remoção do campo "perimetroCefalico" do Modelo de Informação de Atendimento Individual;
- Inclusão do grupo "medicoes" com os campos:
    - circunferenciaAbdominal: Circunferência abdominal do cidadão em centímetros;
    - perimetroPanturrilha: Perímetro da panturrilha do cidadão em centímetros;
    - pressaoArterialSistolica: Pressão arterial sistólica do cidadão em mmHg;
    - pressaoArterialDiastolica: Pressão arterial diastólica do cidadão em mmHg;
    - frequenciaRespiratoria: Frequência respiratória do cidadão em MPM;
    - frequenciaCardiaca: Frequência cardíaca do cidadão em BPM;
    - temperatura: Temperatura do cidadão em ºC;
    - saturacaoO2: Saturação de oxigênio do cidadão em percentual;
    - glicemiaCapilar: Glicemia capilar do cidadão em mg/dL;
    - tipoGlicemiaCapilar: Momento da coleta da glicemia capilar;
    - peso: Peso do cidadão em quilogramas;
    - altura: Altura do cidadão em centímetros;
    - perimetroCefalico: Perímetro cefálico do cidadão em centímetros.

#### 3. Atualização da documentação

Foi corrigida a documentação do LEDI com as referências corretas a competência 02/2024 da tabela SIGTAP.

#### 4. Inclusão da lista de problemas e condições

Foi incluído um grupo de informações chamado "problemasCondicoes" no Modelo de Informação de Atendimento Individual, Modelo de Informação de Atendimento Odontológico Individual e Modelo de Informação de Atendimento Domiciliar. As seguintes alterações foram realizadas:

- Remoção do grupo "problemaCondicaoAvaliada" do Modelo de Informação de Atendimento Individual;
- Remoção dos campos "ciap" e "cid" do Modelo de Informação de Atendimento Domiciliar;
- Inclusão do grupo "problemasCondicoes" com os campos:
    - uuidProblema: Código identificador único do problema ou condição;
    - uuidEvolucaoProblema: Código identificador único da evolução do problema ou condição;
    - coSequencialEvolucao: Código sequencial da evolução dentro do próprio problema e condição atual;
    - ciap: Código da CIAP2 ou AB;
    - cid10: Código da CID10;
    - situacao: Situação do problema ou condição;
    - dataInicioProblema: Data de inicio do problema ou condição;
    - dataFimProblema: Data de finalização do problema ou condição;
    - isAvaliado: Indicador se o problema ou condição foi avaliado durante o atendimento.

#### 5. Inclusão dos turnos

Foram incluídas novas regras relacionadas ao preenchimento das doses por turno (manhã, tarde, noite) no Modelo de Informação de Atendimento Individual e no Modelo de Informação de Atendimento Odontológico. As regras introduzem a obrigatoriedade de registrar doses separadas por turnos, além de determinar o formato e a validação da soma das doses em cada período.

- Os campos adicionados foram:
    - **qtDoseManha**: Quantidade de doses do medicamento/princípio ativo a ser administrada durante o turno da manhã.
    - **qtDoseTarde**: Quantidade de doses do medicamento/princípio ativo a ser administrada durante o turno da tarde.
    - **qtDoseNoite**: Quantidade de doses do medicamento/princípio ativo a ser administrada durante o turno da noite.

- As principais regras aplicadas:
    - O campo não pode ser preenchido caso o campo :link[doseUnica]{id=dicionario-fai anchor=4-doseunica} esteja marcado como "Verdadeiro".
    - É obrigatório preencher no mínimo 2 turnos.
    - A quantidade de doses por turno pode ser separada por barra ou vírgula, seguindo os seguintes formatos:
        - **Vírgula**: Permitidos até 2 caracteres antes e depois (`x,x`, `xx,x`, `xx,xx`, `x,xx`).
        - **Barra**: Permitido 1 caractere antes e depois (`x/x`).
    - A soma das doses dos turnos deve ser igual à quantidade total da dose informada.
