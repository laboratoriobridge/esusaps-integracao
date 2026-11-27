---
id: RF-EDW.tb_fat_solicitacao_oci
title: Tabela fato das solicitações de Oferta de Cuidado Integrado
order: 0
parent: RF-EDW.oci
---

## 1. Objetivo

A tabela `tb_fat_solicitacao_oci` é populada sempre que atendimentos individuais e odontológicos com algum registro de procedimentos do grupo `09 - Procedimento para Oferta de Cuidado Integrado` são processados.

## 2. Regras

:nr A `tb_fat_solicitacao_oci` é preenchida quando são processados:

- Um código SIGTAP pertencente ao grupo `09 - Procedimento para Oferta de Cuidado Integrado` registrado em um atendimento individual;
- Um código SIGTAP pertencente ao grupo `09 - Procedimento para Oferta de Cuidado Integrado` registrado em um atendimento odontológico individual;

## 3. Fatos

### 3.1 Metadados dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_oci | - | Identificador sequencial da tabela |
| co\_fat\_cidadao\_pec | - | Código de identificação do cidadão. Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| nu\_uuid\_ficha | uuidFicha | Identificador do modelo de informação |
| nu\_uuid\_dado\_transp | :link[uuidDadoSerializado]{id=camada-transporte anchor=1-uuiddadoserializado}  | Identificador universalmente único da camada de transporte de dados |
| nu\_cpf\_cidadao | cpfCidadao | CPF do cidadão |
| nu\_cns\_cidadao | cnsCidadao | CNS do cidadão |

### 3.2 Métricas dos fatos

Esta tabela não possui métricas próprias. Cada registro representa um procedimento OCI vinculado a um atendimento, sendo o próprio procedimento (`co_dim_procedimento`) a informação central da tabela.

## 4. Dimensões da tabela

| Coluna DW             | Dimensão referência |
| --------------------- | ------------------- |
| co\_dim\_procedimento | Código de identificação do procedimento. Campo `co_seq_dim_procedimento` da `tb_dim_procedimento` |
| co\_dim\_municipio | Código de identificação do município. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_tipo\_ficha | Código de identificação do tipo de modelo de informação. Campo `co_seq_dim_tipo_ficha` da `tb_dim_tipo_ficha` |
| co\_dim\_profissional\_1 | Código de identificação do profissional principal. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_profissional\_2 | Código de identificação do profissional secundário. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_cbo\_1 | Código de identificação do CBO profissional principal. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_cbo\_2 | Código de identificação do CBO profissional secundário. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_unidade\_saude\_1 | Código de identificação da unidade de saúde do profissional principal. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_unidade\_saude\_2 | Código de identificação da unidade de saúde do profissional secundário. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_equipe\_1 | Código de identificação da equipe do profissional principal. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_equipe\_2 | Código de identificação da equipe do profissional secundário. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_tempo | Responsável por armazenar as datas de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_turno | Código de identificação do turno. Campo `co_seq_dim_turno` da `tb_dim_turno` |
