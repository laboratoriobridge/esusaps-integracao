---
id: RF-EDW.tb_fat_avaliacao_elegibilidade
title: Tabela fato da avaliação de elegibilidade
order: 0
parent: RF-EDW.avaliacao_elegibilidade
---

## 1. Objetivo

A tabela `tb_fat_avaliacao_elegibilidade` é populada sempre que os dados de uma :link[Avaliação de Elegibilidade]{id=dicionario-fae} são processados.

## 2. Regras

:nr A `tb_fat_avaliacao_elegibilidade` é preenchida quando são processado(a)s:

- Fichas de avaliação de elegibilidade recebidas através da importação de sistemas terceiros ou outras instalações do PEC e-SUS-APS;
- Registro de uma avaliação de elegibilidade para atenção domiciliar no CDS ou no aplicativo e-SUS Atenção Domiciliar.

## 3. Fatos

### 3.1 Metadados dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_avaliacao\_elegibldd | - | Código de identificação sequencial criado automaticamente pelo sistema |
| nu\_uuid\_ficha | :link[uuidFicha]{id=dicionario-fae anchor=1-uuidficha} | Identificador universalmente único do registro |
| nu\_uuid\_dado\_transp | :link[uuidDadoSerializado]{id=camada-transporte anchor=1-uuiddadoserializado} | Identificador universalmente único da camada de transporte de dados. Caso o registro seja gerado dentro do PEC terá o mesmo valor do campo nu\_uuid\_ficha |
| nu\_cns | :link[cnsCidadao]{id=dicionario-fae anchor=3-cnscidadao} | CNS do cidadão |
| nu\_cpf\_cidadao | :link[cpfCidadao]{id=dicionario-fae anchor=36-cpfcidadao} | CPF do cidadão |
| nu\_cns\_cuidador | - | CNS do cuidador |
| nu\_cpf\_cuidador | - | CPF do cuidador |
| co\_fat\_cidadao\_pec | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| co\_fat\_cidadao\_pec\_cuidador | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` referente ao cuidador |

### 3.2 Métricas dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| dt\_nascimento | :link[dataNascimentoCidadao]{id=dicionario-fae anchor=6-datanascimentocidadao} | Data de nascimento do cidadão |
| st\_condic\_acamado | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica se o cidadão está acamado |
| st\_condic\_domiciliado | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica se o cidadão está domiciliado |
| st\_condic\_ulceras\_feridas | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica presença de úlceras/feridas |
| st\_condic\_acompanham\_nutricion | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica acompanhamento nutricional |
| st\_condic\_uso\_sonda\_nasogastri | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de sonda nasogástrica |
| st\_condic\_uso\_sonda\_nasoentera | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de sonda nasoentérica |
| st\_condic\_uso\_gastrostomia | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de gastrostomia |
| st\_condic\_uso\_colostomia | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de colostomia |
| st\_condic\_uso\_cistostomia | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de cistostomia |
| st\_condic\_uso\_sond\_vesic\_demor | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de sonda vesical de demora |
| st\_condic\_acomp\_pre\_operatorio | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica acompanhamento pré-operatório |
| st\_condic\_acomp\_pos\_operatorio | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica acompanhamento pós-operatório |
| st\_condic\_adapt\_uso\_ortes\_prot | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica adaptação ao uso de órteses/próteses |
| st\_condic\_reabilita\_domiciliar | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica reabilitação domiciliar |
| st\_condic\_cuidd\_paliat\_oncolog | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica cuidados paliativos oncológicos |
| st\_condic\_cuidd\_paliat\_n\_oncol | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica cuidados paliativos não-oncológicos |
| st\_condic\_oxigenoterapia\_domic | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de oxigenoterapia domiciliar |
| st\_condic\_uso\_traqueostomia | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de traqueostomia |
| st\_condic\_uso\_aspir\_via\_aerea | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica aspiração de via aérea |
| st\_condic\_suport\_ventil\_cpap | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica suporte ventilatório com CPAP |
| st\_condic\_suport\_ventil\_bipap | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica suporte ventilatório com BiPAP |
| st\_condic\_dialise\_peritonial | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica diálise peritoneal |
| st\_condic\_paracentese | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica paracentese |
| st\_condic\_medicacao\_parenteral | :link[condicoesAvaliadas]{id=dicionario-fae anchor=18-condicoesavaliadas} | Indica uso de medicação parenteral |
| st\_inelegivel\_instabil\_clinica | :link[conclusaoDestinoInelegivel]{id=dicionario-fae anchor=23-conclusaodestinoinelegivel} | Indica inelegibilidade por instabilidade clínica |
| st\_inelegivel\_necessid\_propede | :link[conclusaoDestinoInelegivel]{id=dicionario-fae anchor=23-conclusaodestinoinelegivel} | Indica inelegibilidade por necessidade de propedêutica |
| st\_inelegivel\_outro\_motivo\_cli | :link[conclusaoDestinoInelegivel]{id=dicionario-fae anchor=23-conclusaodestinoinelegivel} | Indica inelegibilidade por outro motivo clínico |
| st\_inelegivel\_ausencia\_cuidad | :link[conclusaoDestinoInelegivel]{id=dicionario-fae anchor=23-conclusaodestinoinelegivel} | Indica inelegibilidade por ausência de cuidador |
| st\_inelegivel\_outra\_condi\_soci | :link[conclusaoDestinoInelegivel]{id=dicionario-fae anchor=23-conclusaodestinoinelegivel} | Indica inelegibilidade por outra condição social |
| st\_desconhece\_nome\_mae | :link[desconheceNomeMae]{id=dicionario-fae anchor=10-desconhecenomemae} | Status que indica se o nome da mãe é desconhecido |
| st\_desconhece\_nome\_pai | :link[desconheceNomePai]{id=dicionario-fae anchor=28-desconhecenomepai} | Status que indica se o nome do pai é desconhecido |
| dt\_naturalizacao | :link[dtNaturalizacao]{id=dicionario-fae anchor=29-dtnaturalizacao} | Data de naturalização do cidadão |
| dt\_entrada\_brasil | :link[dtEntradaBrasil]{id=dicionario-fae anchor=31-dtentradabrasil} | Data de entrada no Brasil |
| no\_nome | :link[nomeCidadao]{id=dicionario-fae anchor=4-nomecidadao} | Nome do cidadão |
| no\_nome\_social | :link[nomeSocialCidadao]{id=dicionario-fae anchor=5-nomesocialcidadao} | Nome social do cidadão |
| nu\_nis | :link[numeroNisPisPasep]{id=dicionario-fae anchor=14-numeronispispasep} | NIS/PIS/PASEP do cidadão |
| no\_nome\_mae | :link[nomeMaeCidadao]{id=dicionario-fae anchor=9-nomemaecidadao} | Nome da mãe do cidadão |
| no\_nome\_pai | :link[nomePaiCidadao]{id=dicionario-fae anchor=27-nomepaicidadao} | Nome do pai do cidadão |
| nu\_portaria\_naturalizacao | :link[portariaNaturalizacao]{id=dicionario-fae anchor=30-portarianaturalizacao} | Número da portaria de naturalização |
| no\_email | :link[emailCidadao]{id=dicionario-fae anchor=13-emailcidadao} | Endereço de e-mail do cidadão |
| nu\_cep\_residencia | :link[cep]{id=dicionario-fae anchor=2-cep} | CEP do endereço de residência |
| no\_bairro\_residencia | :link[bairro]{id=dicionario-fae anchor=1-bairro} | Nome do bairro de residência |
| no\_logradouro\_residencia | :link[nomeLogradouro]{id=dicionario-fae anchor=5-nomelogradouro} | Nome do logradouro de residência |
| nu\_num\_logradouro\_residencia | :link[numero]{id=dicionario-fae anchor=6-numero} | Número do logradouro de residência |
| no\_complemento\_residencia | :link[complemento]{id=dicionario-fae anchor=4-complemento} | Complemento do endereço de residência |
| no\_referencia\_residencia | :link[pontoReferencia]{id=dicionario-fae anchor=12-pontoreferencia} | Ponto de referência do endereço de residência |
| nu\_telefone\_residencia | :link[telefoneResidencia]{id=dicionario-fae anchor=9-telefoneresidencia} | Telefone de residência do cidadão |
| nu\_telefone\_contato | :link[telefoneContato]{id=dicionario-fae anchor=8-telefonecontato} | Telefone de contato do cidadão |

Os seguintes campos da tabela armazenam valores criptografados:

- no\_nome
- no\_nome\_social
- nu\_nis
- no\_nome\_mae
- no\_nome\_pai
- nu\_portaria\_naturalizacao
- no\_email
- nu\_cep\_residencia
- no\_bairro\_residencia
- no\_logradouro\_residencia
- nu\_num\_logradouro\_residencia
- no\_complemento\_residencia
- no\_referencia\_residencia
- nu\_telefone\_residencia
- nu\_telefone\_contato
- nu\_cpf\_cidadao
- nu\_cpf\_cuidador

## 4. Dimensões da tabela

| Coluna DW | Dimensão referência |
| --------- | ------------------- |
| co\_dim\_municipio | Código de identificação do município. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_tipo\_ficha | Código de identificação do tipo de ficha. Campo `co_seq_dim_tipo_ficha` da `tb_dim_tipo_ficha` |
| co\_dim\_profissional\_1 | Código de identificação do profissional responsável. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_profissional\_2 | Código de identificação do profissional auxiliar. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_cbo\_1 | Código de identificação do CBO profissional responsável. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_cbo\_2 | Código de identificação do CBO profissional auxiliar. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_unidade\_saude\_1 | Código de identificação da unidade de saúde do profissional responsável. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_unidade\_saude\_2 | Código de identificação da unidade de saúde do profissional auxiliar. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_equipe\_1 | Código de identificação da equipe do profissional responsável. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_equipe\_2 | Código de identificação da equipe do profissional auxiliar. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_tempo | Responsável por armazenar as datas de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_turno | Código do turno da avaliação. Campo `co_seq_dim_turno` da `tb_dim_turno` |
| co\_dim\_sexo | Código do sexo do cidadão. Campo `co_seq_dim_faixa_sexo` da `tb_dim_sexo` |
| co\_dim\_faixa\_etaria | Código da faixa etária do cidadão. Campo `co_seq_dim_faixa_etaria` da `tb_dim_faixa_etaria` |
| co\_dim\_raca\_cor | Código da raça/cor do cidadão. Campo `co_seq_dim_raca_cor` da `tb_dim_raca_cor` |
| co\_dim\_etnia | Código da etnia do cidadão. Campo `co_seq_dim_etnia` da `tb_dim_etnia` |
| co\_dim\_nacionalidade | Código da nacionalidade do cidadão. Campo `co_seq_dim_nacionalidade` da `tb_dim_nacionalidade` |
| co\_dim\_pais\_nascimento | Código do país de nascimento do cidadão. Campo `co_seq_dim_pais` da `tb_dim_pais` |
| co\_dim\_municipio\_cidadao | Código do município de nascimento/residência do cidadão. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_municipio\_residencia | Código do município de residência. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_tipo\_logradouro | Código do tipo de logradouro. Campo `co_seq_dim_tipo_logradouro` da `tb_dim_tipo_logradouro` |
| co\_dim\_uf\_cidadao | Código da UF de nascimento do cidadão. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_uf\_residencia | Código da UF de residência. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_cuidador | Código do tipo de cuidador. Campo `co_seq_dim_cuidador` da `tb_dim_cuidador` |
| co\_dim\_procedencia\_origem | Código da procedência/origem do cidadão. Campo `co_seq_dim_procedencia_origem` da `tb_dim_procedencia_origem` |
| co\_dim\_conclusao\_modalidade\_ad | Código da conclusão de modalidade de atenção domiciliar. Campo `co_seq_dim_conclusao_modalidade_ad` da `tb_dim_conclusao_modalidade_ad` |
| co\_dim\_tipo\_elegibilidade | Código do tipo de elegibilidade. Campo `co_seq_dim_tipo_elegibilidade` da `tb_dim_tipo_elegibilidade` |
| co\_dim\_cid\_principal | Código do CID10 principal. Campo `co_seq_dim_cid10` da `tb_dim_cid10` |
| co\_dim\_cid\_sec\_1 | Código do CID10 secundário 1. Campo `co_seq_dim_cid10` da `tb_dim_cid10` |
| co\_dim\_cid\_sec\_2 | Código do CID10 secundário 2. Campo `co_seq_dim_cid10` da `tb_dim_cid10` |
| co\_dim\_tipo\_origem\_dado\_transp | Código da origem do dado no transporte. Campo `co_seq_dim_tp_orgm_dado_transp` da `tb_dim_tipo_origem_dado_transp` |
| co\_dim\_cds\_tipo\_origem | Código da origem do dado no transporte. Campo `co_seq_dim_tipo_origem` da `tb_dim_tipo_origem` |
