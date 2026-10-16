---
id: RF-EDW.tb_fat_consolidado_cidadao_fp
title: >-
  Tabela fato com informações consolidadas sobre um cidadão geradas a partir de
  um procedimento
order: 4
parent: RF-EDW.procedimentos
---

## 1. Objetivo

A tabela `tb_fat_consolidado_cidadao_fp` é populada quando os dados de um :link[procedimento]{id=dicionario-fp} são processados. Os dados processados nessa tabela se referem apenas a procedimentos individualizados (quando há referência a um cidadão).

## 2. Regras

:nr Após o processamento do primeiro procedimento individualizado de um cidadão é criada uma nova linha na tabela `tb_fat_consolidado_cidadao_fp`. Os próximos procedimentos não criam novas linhas, substituem o registro antigo com as informações mais recentes do cidadão, as colunas só são atualizadas caso existam novos registros.

## 3. Fatos da tabela

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_conslddo\_ciddo\_fp | - | Código de identificação sequencial dos fatos consolidados de um cidadão |
| co\_fat\_cidadao\_pec | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| st\_teste\_orelhinha | - | Status que indica a realização do procedimento "0211070149 - EMISSOES OTOACUSTICAS EVOCADAS P/ TRIAGEM AUDITIVA (TESTE DA ORELHINHA)" informado no procedimento individualizado do CDS |
| st\_teste\_olhinho | - | Status que indica a realização do procedimento "ABEX022 - TESTE DO OLHINHO (TRV)" informado no procedimento individualizado do CDS ou no campo **SIGTAP** da seção **Intervenções e/ou procedimentos clínicos realizados** que fica dentro do **Plano** do atendimento do PEC |

## 4. Dimensões da tabela

| Coluna DW | Dimensão referência | 
| --------- | ------------------- | 
| co\_dim\_tempo\_ultima\_ficha | Responsável por armazenar as datas de processamento da última ficha de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_tempo\_ult\_aval\_multi | Responsável por armazenar a data da última avaliação multiprofissional de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
