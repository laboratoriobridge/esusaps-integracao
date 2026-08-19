---
id: RF-EDW.tb_fat_cnslddo_ciddo_fai_cid
title: >-
  Tabela fato com informações consolidadas de CID10 de um cidadão geradas a
  partir de um atendimento individual
order: 2
parent: RF-EDW.atendimento_individual
---

## 1. Objetivo

A `tb_fat_cnslddo_ciddo_fai_cid` só é preenchida quando são são processados registros de CID10 feitos durante um :link[atendimento individual]{id=dicionario-fai} e o atendimento em questão é processado. 

## 2. Fatos da tabela

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_conslddo\_ciddo\_fai | - | Código de identificação sequencial dos fatos consolidados de CID10 de um cidadão |
| co\_fat\_cidadao\_pec | - | Código de identificação sequencial do cidadão. Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |

## 3. Dimensões da tabela

| Coluna DW | Dimensão referência | 
| --------- | ------------------- | 
| co\_dim\_cid | Código criado para cada CID10 registrado para o cidadão. Campo `co_seq_dim_cid` da `tb_dim_cid` |














