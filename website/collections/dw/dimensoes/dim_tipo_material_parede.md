---
id: RF-EDW.dim_tipo_material_parede
title: Tabela de dimensão de material predominante das paredes
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_material_parede` é utilizada para armazenar os tipos de material predominante na construção das paredes externas do domicílio. Possui como referência o campo :link[Material predominante na construção das paredes externas de seu domicílio]{id=dicionario anchor=materialpredominantenaconstrucao} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_material\_pared | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de material das paredes |
| ds\_tipo\_material\_parede | Descrição do tipo de material das paredes |
| co\_ordem | Código para ordenação |
