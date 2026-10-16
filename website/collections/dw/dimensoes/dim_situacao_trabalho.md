---
id: RF-EDW.dim_situacao_trabalho
title: Tabela de dimensão de situação no mercado de trabalho
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_situacao_trabalho` é utilizada para armazenar a situação no mercado de trabalho do cidadão. Possui como referência a :link[Situação no mercado de trabalho]{id=dicionario anchor=situacaomercadotrabalho} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_situacao\_trabalho | Código de identificação sequencial |
| nu\_identificador | Número identificador da situação no mercado de trabalho |
| ds\_dim\_situacao\_trabalho | Descrição da situação no mercado de trabalho |
| co\_ordem | Código para ordenação |
| ds\_filtro | Concatenação de campos para busca, sem acentos |
