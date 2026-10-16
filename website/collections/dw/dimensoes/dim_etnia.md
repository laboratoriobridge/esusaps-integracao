---
id: RF-EDW.dim_etnia
title: Tabela de dimensão de etnia
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_etnia` é utilizada para armazenar as etnias. Possui como referência a tabela de :link[Etnia]{id=dicionario anchor=etnia} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_etnia | Código de identificação sequencial |
| nu\_identificador | Número identificador da etnia |
| no\_etnia | Nome da etnia |
| ds\_filtro | Nome da etnia, sem acentos |
