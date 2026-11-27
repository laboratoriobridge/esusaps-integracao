---
id: RF-EDW.dim_conduta_cuidado
title: Tabela de dimensão de condutas do Cuidado Compartilhado
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_conduta_cuidado` é utilizada para armazenar as condutas utilizadas no Cuidado Compartilhado. Possui como referência a tabela de :link[Conduta]{id=dicionario anchor=condutaevolucao} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_conduta\_cuidado | Código de identificação sequencial |
| nu\_identificador| Número identificador da conduta |
| ds\_conduta\_cuidado | Descrição da conduta |
