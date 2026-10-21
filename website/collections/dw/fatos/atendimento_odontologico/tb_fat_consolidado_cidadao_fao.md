---
id: RF-EDW.tb_fat_consolidado_cidadao_fao
title: >-
  Tabela fato com informações consolidadas sobre um cidadão geradas a partir de
  um atendimento odontológico
order: 1
parent: RF-EDW.atendimento_odontologico_individual
---

## 1. Objetivo

A tabela `tb_fat_consolidado_cidadao_fao` é populada sempre que os dados de um :link[atendimento odontológico]{id=dicionario-fao} são processados.  

## 2. Regras

:nr Após o processamento do primeiro atendimento odontológico de um cidadão é criada uma nova linha na tabela `tb_fat_consolidado_cidadao_fao`. Os próximos atendimentos não criam novas linhas, substituem o registro antigo com as informações mais recentes do cidadão, as colunas só são atualizadas caso existam novos registros.

## 3. Fatos da tabela

| Coluna DW                          | Referência LEDI | Referência sistema |
| ---------------------------------- | --------------- | ------------------ |
| co\_seq\_fat\_conslddo\_ciddo\_fao | -               | Código de identificação sequencial dos fatos consolidados de um cidadão |
| co\_fat\_cidadao\_pec              | -               | Código de identificação sequencial do cidadão. Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |

## 4. Dimensões da tabela

:nr Todas as colunas que começam com `co_dim_tempo` estão relacionadas a tabela `tb_dim_tempo` através do campo `co_seq_dim_tempo`.

| Coluna DW                         | Dimensão referência |
| --------------------------------- | ------------------- |
| co\_dim\_tempo\_ultima\_ficha     | Responsável por armazenar as datas de processamento da última ficha de maneira estruturada |
| co\_dim\_tempo\_ult\_aval\_multi  | Responsável por armazenar a data da última avaliação multiprofissional de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
