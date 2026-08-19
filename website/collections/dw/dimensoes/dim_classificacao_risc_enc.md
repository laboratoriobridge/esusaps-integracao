---
id: RF-EDW.dim_classificacao_risc_enc
title: Tabela de dimensão de classificação de risco de encaminhamentos
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_classificacao_risc_enc` é utilizada para armazenar os tipos de classificação de risco de encaminhamentos. Possui como referência a :link[Classificação de risco do encaminhamento]{id=dicionario anchor=classificacaorisco} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_classific\_risc\_enc | Código de identificação sequencial |
| nu\_identificador| Número identificador da classificação de risco |
| co\_classificacao\_risco | - |
| no\_classificacao\_risco | Nome da classificação de risco |
| no\_classificacao\_risco\_filtro | Nome da classificação de risco, sem acentos |
| co\_ordem | Código para ordenação da classificação de risco |
