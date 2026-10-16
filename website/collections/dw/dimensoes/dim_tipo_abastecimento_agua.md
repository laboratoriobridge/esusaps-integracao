---
id: RF-EDW.dim_tipo_abastecimento_agua
title: Tabela de dimensão de tipo de abastecimento de água
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_abastecimento_agua` é utilizada para armazenar os tipos de abastecimento de água do domicílio. Possui como referência o :link[Abastecimento de água]{id=dicionario anchor=abastecimentodeagua} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_abastec\_agua | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de abastecimento de água |
| ds\_tipo\_abastecimento\_agua | Descrição do tipo de abastecimento de água |
| co\_ordem | Código para ordenação |
