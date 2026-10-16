---
id: RF-EDW.dim_estado_civil
title: Tabela de dimensão de estado civil
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_estado_civil` é utilizada para armazenar os estados civis do cidadão. Possui como referência o :link[Estado civil]{id=dicionario anchor=estadocivil} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_estado\_civil | Código de identificação sequencial |
| nu\_identificador | Número identificador do estado civil |
| no\_estado\_civil | Nome do estado civil |
| co\_ordem | Código para ordenação |
