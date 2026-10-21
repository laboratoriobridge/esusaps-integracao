---
id: RF-EDW.dim_procedencia_origem
title: Tabela de dimensão de procedências da atenção domiciliar
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_procedencia_origem` é utilizada para armazenar as procedências da atenção domiciliar. Possui como referência a :link[Tabela de procedência]{id=dicionario anchor=atencaodomiciliarprocedencia} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_procedencia\_origem | Código de identificação sequencial |
| nu\_identificador | Número identificador da procedência |
| ds\_procedencia\_origem | Descrição da procedência |
| co\_ordem | Código para ordenação da procedência |
