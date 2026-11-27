---
id: RF-EDW.dim_tipo_logradouro
title: Tabela de dimensão de tipo de logradouro
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_logradouro` é utilizada para armazenar os tipos de logradouro. Possui como referência o :link[Tipo de logradouro]{id=ufs anchor=tipo-de-logradouro} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_logradouro | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de logradouro |
| ds\_tipo\_logradouro | Descrição do tipo de logradouro |
| ds\_filtro | Concatenação de campos para busca, sem acentos |
