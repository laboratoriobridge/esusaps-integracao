---
id: RF-EDW.dim_tipo_sanguineo
title: Tabela de dimensão de tipo sanguíneo
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_sanguineo` é utilizada para armazenar os tipos sanguíneos do cidadão. Possui como referência o :link[Tipo sanguíneo]{id=dicionario anchor=tiposanguineo} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_sanguineo | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo sanguíneo |
| no\_tipo\_sanguineo | Nome do tipo sanguíneo |
| co\_ordem | Código para ordenação |
