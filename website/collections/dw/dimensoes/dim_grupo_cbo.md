---
id: RF-EDW.dim_grupo_cbo
title: Tabela de dimensão de grupos de CBO
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_grupo_cbo` é utilizada para agrupar as CBOs em determinados grupos.

## 2. Regras

:nr Múltiplas CBOs podem estar relacionados ao mesmo grupo de CBO.

## 3. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_grupo\_cbo | Código de identificação sequencial |
| nu\_grupo\_cbo | Número de identificação do grupo de CBO |
| ds\_grupo\_cbo | Descrição do grupo de CBO |
| co\_dim\_cbo | Código do CBO relacionado ao grupo. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| ds\_filtro | Descrição do grupo de CBO sem acentos, para utilização em filtros |
