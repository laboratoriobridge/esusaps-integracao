---
id: RF-EDW.dim_tipo_ficha
title: Tabela de dimensão de tipo de ficha
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_ficha` é utilizada para armazenar os tipos de ficha (modelos de informação) do PEC e-SUS APS. Possui como referência o :link[Tipo de ficha]{id=dicionario anchor=tipodadoserializado} do LEDI. Também apresenta as opções "AD resumo" e "ESUS PEC Atendimento".

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_ficha | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de ficha |
| ds\_tipo\_ficha | Descrição do tipo de ficha |
| co\_ordem | Código para ordenação |
| ds\_filtro | Concatenação de campos para busca, sem acentos |
