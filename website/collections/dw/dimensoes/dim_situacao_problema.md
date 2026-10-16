---
id: RF-EDW.dim_situacao_problema
title: Tabela de dimensão de situação do problema/condição
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_situacao_problema` é utilizada para armazenar as situações de um problema ou condição de saúde na lista de problemas/condições do cidadão. Possui como referência a :link[Situação de problema ou condição]{id=dicionario anchor=situacaoproblemascondicoes} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_situacao | Código de identificação sequencial |
| nu\_identificador | Número identificador da situação do problema ou condição |
| ds\_situacao\_problema | Descrição da situação do problema ou condição |
