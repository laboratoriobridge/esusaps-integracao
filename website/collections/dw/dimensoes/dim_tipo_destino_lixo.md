---
id: RF-EDW.dim_tipo_destino_lixo
title: Tabela de dimensão de destino do lixo
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_destino_lixo` é utilizada para armazenar os tipos de destino do lixo domiciliar. Possui como referência o :link[Destino do lixo]{id=dicionario anchor=destinodolixo} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_destino\_lixo | Código de identificação sequencial |
| nu\_identificador | Número identificador do destino do lixo |
| ds\_tipo\_destino\_lixo | Descrição do destino do lixo |
| co\_ordem | Código para ordenação |
