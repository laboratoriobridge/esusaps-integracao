---
id: RF-EDW.dim_conduta_ad
title: Tabela de dimensão de condutas do Atendimento Domiciliar
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_conduta_ad` é utilizada para armazenar as condutas utilizadas no Atendimento Domiciliar. Possui como referência a tabela de :link[Conduta]{id=dicionario anchor=condutadesfecho} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_conduta\_ad | Código de identificação sequencial |
| nu\_identificador| Número identificador da conduta |
| ds\_conduta\_ad | Descrição da conduta |
