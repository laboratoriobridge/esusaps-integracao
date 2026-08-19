---
id: RF-EDW.dim_tipo_saida_cadastro
title: Tabela de dimensão de motivo de saída do cadastro
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_saida_cadastro` é utilizada para armazenar os motivos de saída do cidadão do cadastro. Possui como referência a :link[Saída do cidadão do cadastro]{id=dicionario anchor=motivosaida} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_saida\_cadastro | Código de identificação sequencial |
| nu\_identificador | Número identificador do motivo de saída do cadastro |
| ds\_dim\_tipo\_saida\_cadastro | Descrição do motivo de saída do cadastro |
| co\_ordem | Código para ordenação |
