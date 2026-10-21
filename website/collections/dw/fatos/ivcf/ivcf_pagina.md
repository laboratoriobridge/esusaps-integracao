---
id: RF-EDW.tb_fat_ivcf
title: Tabela fato dos registro de IVCF-20
order: 0
parent: RF-EDW.ivcf
---

## 1. Objetivo

A tabela `tb_fat_ivcf` é populada sempre que registros de IVCF-20 são processados.

## 2. Regras

:nr A `tb_fat_ivcf` é preenchida quando são processados:

- Registros oriundos de importação de sistemas terceiros ou outras instalações do PEC com fichas de atendimento individual, atendimento odontológico individual, atendimento de procedimentos e/ou visita domiciliar e territorial que possuam registro de IVCF-20;
- Registro de um IVCF-20 em um atendimento individual;
- Registro de um IVCF-20 em um atendimento odontológico individual;
- Registro de um IVCF-20 em um atendimento de procedimentos;
- Registro de um IVCF-20 em uma ficha de visita recebida do aplicativo e-SUS Território.

{/* Adicionar aqui a parte da FVDT / VD do e-SUS Território quando for integrado*/}

## 3. Fatos

### 3.1 Metadados dos fatos

| Coluna DW | Referência LEDI | Referência sistema |
| --------- | --------------- | ------------------ |
| co\_seq\_fat\_ivcf | - | Código de identificação sequencial criado automaticamente pelo sistema |
| nu\_uuid\_ficha | - | Identificador universalmente único do registro |
| co\_fat\_cidadao\_pec | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| nu\_cpf\_cidadao | - | CPF do cidadão |
| nu\_cns\_cidadao | - | CNS do cidadão |

### 3.2 Métricas dos Fatos

Como as informações presentes nesta ficha são difíceis de serem representadas devido ao seu tamanho, as colunas da tabela receberam nomes genéricos, conforme apresentados na tabela abaixo.

| Coluna DW | Referência LEDI | Referência sistema |
| --------- | --------------- | ------------------ |
| nu\_resultado                    | resultado                 | Resultado do registro em pontos |
| co\_grau\_vulnerabilidade        | grau                      | Correspondência do resultado em pontos em graus (Baixo, Médio ou Alto) |
| st\_sg\_idade                    | hasSgIdade                | Dimensão "Idade" alterada |
| st\_sg\_percepcao\_saude         | hasSgPercepcaoSaude       | Dimensão "Percepção da saúde" alterada |
| st\_sg\_avd\_instrumental        | hasSgAvdInstrumental      | Dimensão "AVD Instrumental" alterada |
| st\_sg\_avd\_basica              | hasSgAvdBasica            | Dimensão "AVD Básica" alterada |
| st\_sg\_cognicao                 | hasSgCognicao             | Dimensão "Cognição" alterada |
| st\_sg\_humor                    | hasSgHumor                | Dimensão "Humor" alterada |
| st\_sg\_alcance\_preensao\_pinca | hasSgAlcancePreensaoPinca | Dimensão "Alcance, preensão e pinça", do grupo "Mobilidade", alterada |
| st\_sg\_cap\_aerobica\_muscular  | hasSgCapAerobicaMuscular  | Dimensão "Capacidade aeróbica e/ou muscular", do grupo "Mobilidade", alterada |
| st\_sg\_marcha                   | hasSgMarcha               | Dimensão "Marcha", do grupo "Mobilidade", alterada |
| st\_sg\_continencia              | hasSgContinencia          | Dimensão "Continência esfincteriana", do grupo "Mobilidade", alterada |
| st\_sg\_visao                    | hasSgVisao                | Dimensão "Visão", do grupo "Comunicação", alterada |
| st\_sg\_audicao                  | hasSgAudicao              | Dimensão "Audição", do grupo "Comunicação", alterada |
| st\_sg\_comorbidade              | hasSgComorbidade          | Dimensão "Comorbidade múltipla" alterada |
| dt\_resultado                    | dataResultado             | Data e horário do resultado do IVCF-20 |

Referências LEDI: :link[Ficha de Atendimento Odontológico Individual]{id=dicionario-fao anchor=27-ivcf}, :link[Ficha de Atendimento Individual]{id=dicionario-fai anchor=31-ivcf} e :link[Ficha de Procedimentos]{id=dicionario-fp anchor=13-ivcf}.

## 4. Dimensões da tabela

| Coluna DW | Dimensão referência |
| --------- | ------------------- |
| co\_dim\_tipo\_ficha | Código de identificação do tipo de ficha. Campo `co_seq_dim_tipo_ficha` da `tb_dim_tipo_ficha` |
| co\_dim\_municipio | Código de identificação do município. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_unidade\_saude | Código de identificação da unidade de saúde do profissional responsável. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_equipe | Código de identificação da equipe do profissional responsável. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_cbo | Código de identificação do CBO profissional responsável. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_profissional | Código de identificação do profissional responsável. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_tempo | Responsável por armazenar as datas de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
