---
id: RF-EDW.dim_tipo_situacao_moradia
title: Tabela de dimensão de situação de moradia
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_situacao_moradia` é utilizada para armazenar os tipos de situação de moradia e posse da terra. Possui como referência a :link[Situação de moradia / Posse da terra]{id=dicionario anchor=situacaodemoradia} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_situacao\_morad | Código de identificação sequencial |
| nu\_identificador | Número identificador da situação de moradia |
| ds\_tipo\_situacao\_moradia | Descrição da situação de moradia |
| co\_ordem | Código para ordenação |
