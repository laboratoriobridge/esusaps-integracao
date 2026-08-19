---
id: RF-EDW.dim_tipo_renda_familiar
title: Tabela de dimensão de renda familiar
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_renda_familiar` é utilizada para armazenar as faixas de renda familiar em salários mínimos. Possui como referência a :link[Renda familiar (sal. mínimo)]{id=dicionario anchor=rendafamiliar} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_renda\_familiar | Código de identificação sequencial |
| nu\_identificador | Número identificador da faixa de renda familiar |
| ds\_tipo\_renda\_familiar | Descrição da faixa de renda familiar |
| co\_ordem | Código para ordenação |
