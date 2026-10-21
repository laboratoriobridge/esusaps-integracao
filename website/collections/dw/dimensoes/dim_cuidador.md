---
id: RF-EDW.dim_cuidador
title: Tabela de dimensão de cuidador
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_cuidador` é utilizada para armazenar os graus de relacionamento do cuidador em relação ao cidadão atendido. Possui como referência a tabela de :link[Cuidador do cidadão]{id=dicionario anchor=cuidadorcidadao} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_cuidador | Código de identificação sequencial |
| nu\_identificador| Número identificador do cuidador |
| ds\_cuidador | Descrição do cuidador |
| co\_ordem | Código para ordenação do cuidador |
