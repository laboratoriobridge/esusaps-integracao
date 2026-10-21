---
id: RF-EDW.dim_tipo_parentesco
title: Tabela de dimensão de tipo de parentesco
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_parentesco` é utilizada para armazenar os tipos de relação de parentesco com o responsável familiar. Possui como referência a :link[Relação de parentesco com o responsável familiar]{id=dicionario anchor=relacaoparentesco} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_parentesco | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de parentesco |
| ds\_tipo\_parentesco | Descrição do tipo de parentesco |
| co\_ordem | Código para ordenação |
| ds\_filtro | Concatenação de campos para busca, sem acentos |
