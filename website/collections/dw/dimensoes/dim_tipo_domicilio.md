---
id: RF-EDW.dim_tipo_domicilio
title: Tabela de dimensão de tipo de domicílio
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_domicilio` é utilizada para armazenar os tipos de domicílio. Possui como referência o :link[Tipo de domicílio]{id=dicionario anchor=tipodedomicilio} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_domicilio | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de domicílio |
| ds\_tipo\_domicilio | Descrição do tipo de domicílio |
| co\_ordem | Código para ordenação |
