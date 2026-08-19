---
id: RF-EDW.tb_fat_cuidado_compartilhado
title: Tabela fato do cuidado compartilhado
order: 13
parent: RF-EDW.cuidado_compartilhado
---

## 1. Objetivo

A tabela `tb_fat_cuidado_compartilhado` é populada sempre que os dados de um :link[cuidado compartilhado]{id=dicionario-fcc} são processados.

## 2. Regras

:nr A `tb_fat_cuidado_compartilhado` é preenchida quando são processado(a)s:

- Fichas de cuidado compartilhado recebidas através da importação de sistemas terceiros ou outras instalações do PEC e-SUS-APS;
- Registro de um cuidado compartilhado em um atendimento individual;
- Registro de um cuidado compartilhado em um atendimento odontológico individual;
- Registro de uma evolução na discussão de caso de um cuidado compartilhado.

## 3. Fatos

### 3.1 Metadados dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_cuidado_compartilhd | - | Código de identificação sequencial criado automaticamente pelo sistema |
| nu\_uuid\_evolucao | :link[uuidEvolucao]{id=dicionario-fcc anchor=1-uuidevolucao} | Identificador universalmente único do registro de evolução |
| co\_sequencial\_evolucao | :link[coSequencialEvolucao]{id=dicionario-fcc anchor=5-cosequencialevolucao} | Código sequencial que ordena as evoluções de um Cuidado Compartilhado | 
| nu\_uuid\_cuidado\_compartilhado | :link[uuidCuidadoCompartilhado]{id=dicionario-fcc anchor=12-uuidcuidadocompartilhado}  | Identificador universalmente único do registro de Cuidado Compartilhado |
| nu\_uuid\_ficha\_origem | :link[uuidFichaOrigem]{id=dicionario-fcc anchor=18-uuidfichaorigem} | Identificador universalmente único do registro da ficha que originou o Cuidado Compartilhado | 
| nu\_uuid\_dado\_transp | - | Identificador universalmente único da camada de transporte de dados. Caso o registro seja gerado dentro do PEC terá o mesmo valor do campo nu\_uuid\_ficha |
| tp\_dado\_transp\_ficha\_origem | :link[tpDadoTranspFichaOrigem]{id=dicionario-fcc anchor=19-tpdadotranspfichaorigem} | Tipo da ficha que originou o Cuidado Compartilhado |
| nu\_cns\_cidadao | :link[cnsCidadao]{id=dicionario-fcc anchor=8-cnscidadao} | CNS do cidadão |
| nu\_cpf\_cidadao | :link[cpfCidadao]{id=dicionario-fcc anchor=9-cpfcidadao} | CPF do cidadão |
| co\_fat\_cidadao\_pec | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |

### 3.2 Métricas dos Fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| dt\_evolucao | :link[dataEvolucao]{id=dicionario-fcc anchor=3-dataevolucao} | Data da evolução do cuidado compartilhado |
| dt\_evolucao\_anterior | :link[dataEvolucaoAnterior]{id=dicionario-fcc anchor=4-dataevolucaoanterior} | Data da evolução anterior a essa do cuidado compartilhado |
| dt\_nascimento\_cidadao | :link[dataNascimentoCidadao]{id=dicionario-fcc anchor=11-datanascimentocidadao} | Data de nascimento do cidadão |
| dt\_criacao\_cuidado | :link[dataCriacaoCuidado]{id=dicionario-fcc anchor=15-datacriacaocuidado} | Data em que foi criado o Cuidado Compartilhado |
| st\_executante | - | 	Status que indica se o profissional que registrou a evolução é o executante |

## 4. Dimensões da tabela

| Coluna DW | Dimensão referência | 
| --------- | ------------------- | 
| co\_dim\_tempo | Responsável por armazenar as datas de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` | 
| co\_dim\_profissional\_evolucao | Código de identificação do profissional que registrou a evolução. Campo `co_seq_dim_profissional` da `tb_dim_profissional` | 
| co\_dim\_cbo\_evolucao | Código de identificação do CBO profissional que registrou a evolução. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_equipe\_evolucao | Código de identificação da equipe do profissional que registrou a evolução. Campo `co_seq_dim_equipe` da `tb_dim_equipe` | 
| co\_dim\_unidade\_saude\_evolucao | Código de identificação da unidade de saúde do profissional que registrou a evolução. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` | 
| co\_dim\_municipio\_evolucao | Código de identificação do município do profissional que registrou a evolução. Campo `co_seq_dim_municipio` da `tb_dim_municipio` | 
| co\_dim\_turno | Código do turno em que foi registrada a evolução. Campo `co_seq_dim_faixa_turno` da `tb_dim_turno` |
| co\_dim\_conduta\_evolucao | Código da conduta registrada na evolução. Campo `co_dim_conduta_evolucao` da `tb_dim_conduta_cuidado`  | 
| co\_dim\_cds\_tipo\_origem | Código da origem do dado no transporte. Campo `co_seq_dim_tipo_origem` da `tb_dim_tipo_origem` | 
| co\_dim\_sexo\_cidadao | 	Código do sexo. Campo `co_seq_dim_faixa_sexo`  da `tb_dim_sexo` | 
| co\_dim\_faixa\_etaria | Código da faixa etária. Campo `co_seq_dim_faixa_etaria` da `tb_dim_faixa_etaria` |
| co\_dim\_profissional\_solicitant | Código de identificação do profissional solicitante. Campo `co_seq_dim_profissional` da `tb_dim_profissional`  | 
| co\_dim\_cbo\_solicitante | Código de identificação do CBO profissional solicitante. Campo `co_seq_dim_cbo` da `tb_dim_cbo` | 
| co\_dim\_equipe\_solicitante | Código de identificação da equipe do profissional solicitante. Campo `co_seq_dim_equipe` da `tb_dim_equipe` | 
| co\_dim\_unidade\_saude\_solicitnt | Código de identificação da unidade de saúde do profissional solicitante. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_municipio\_solicitante | Código de identificação do município do profissional solicitante. Campo `co_seq_dim_municipio` da `tb_dim_municipio`  | 
| co\_dim\_profissional\_executante | Código de identificação do profissional executante. Campo `co_seq_dim_profissional` da `tb_dim_profissional` | 
| co\_dim\_cbo\_executante | Código de identificação do CBO profissional executante. Campo `co_seq_dim_cbo` da `tb_dim_cbo` | 
| co\_dim\_equipe\_executante | Código de identificação da equipe do profissional executante. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_unidade\_saude\_executant | Código de identificação da unidade de saúde do profissional executante. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` | 
| co\_dim\_municipio\_executante | Código de identificação do município do profissional executante. Campo `co_seq_dim_municipio` da `tb_dim_municipio` | 
| co\_dim\_cid | Código do CID10 utilizado no cuidado compartilhado. Campo `co_seq_dim_cid10` da `tb_dim_cid10` | 
| co\_dim\_ciap | Código do CIAP2 utilizado no cuidado compartilhado. Campo `co_seq_dim_ciap2` da `tb_dim_ciap2` |
| co\_dim\_prioridade\_cuidado | Código da classificação de prioridade do cuidado compartilhado. Campo `co_seq_dim_prioridade_cuidado` da `tb_dim_prioridade_cuidado` | 
| co\_dim\_tipo\_origem\_dado\_transp | Código da origem do dado no transporte. Campo `co_seq_dim_tp_orgm_dado_transp` da `tb_dim_tipo_origem_dado_transp` | 
| co\_dim\_prioridade\_cc\_reclssfcc | Código da reclassificação de prioridade do cuidado compartilhado. Campo `co_seq_dim_prioridade_cuidado` da `tb_dim_prioridade_cuidado` | 
