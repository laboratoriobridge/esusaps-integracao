---
id: RF-EDW.dim_tipo_escolaridade
title: Tabela de dimensão de tipo de escolaridade
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_escolaridade` é utilizada para armazenar os níveis de escolaridade do cidadão. Possui como referência o campo :link[Qual é o curso mais elevado que frequenta ou frequentou?]{id=dicionario anchor=cursomaiselevado} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_escolaridade | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de escolaridade |
| ds\_dim\_tipo\_escolaridade | Descrição do tipo de escolaridade |
| co\_ordem | Código para ordenação |
| ds\_filtro | Concatenação de campos para busca, sem acentos |
