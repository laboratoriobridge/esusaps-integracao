---
id: RF-EDW.dim_aleitamento
title: Tabela de dimensão de aleitamento materno
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_aleitamento` é utilizada para armazenar os tipos de aleitamento materno. Possui como referência a tabela de :link[Aleitamento materno]{id=dicionario anchor=aleitamentomaterno} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_aleitamento | Código de identificação sequencial |
| nu\_identificador| Número identificador do aleitamento materno |
| ds\_aleitamento | Descrição do aleitamento materno |
| co\_ordem | Código para ordenação do aleitamento materno |
