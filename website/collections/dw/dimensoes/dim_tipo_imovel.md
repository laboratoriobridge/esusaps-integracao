---
id: RF-EDW.dim_tipo_imovel
title: Tabela de dimensão de tipo de imóvel
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_imovel` é utilizada para armazenar os tipos de imóvel visitado ou cadastrado. Possui como referência o :link[Tipo de imóvel]{id=dicionario anchor=tipodeimovel} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_imovel | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de imóvel |
| ds\_tipo\_imovel | Descrição do tipo de imóvel |
| co\_ordem | Código para ordenação |
| ds\_filtro | Concatenação de campos para busca, sem acentos |
