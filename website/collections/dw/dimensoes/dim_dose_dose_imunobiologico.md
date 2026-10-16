---
id: RF-EDW.dim_dose_imunobiologico
title: Tabela de dimensão de dose de imunobiológico
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_dose_imunobiologico` é utilizada para armazenar as doses dos imunobiológicos. Possui como referência a tabela de :link[Dose de imunobiológico]{id=dicionario anchor=dose} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_dose\_imunobiologico | Código de identificação sequencial |
| nu\_identificador | Número identificador da dose do imunobiológico |
| sg\_dose\_imunobiologico | Sigla da dose do imunobiológico |
| no\_dose\_imunobiologico | Nome da dose do imunobiológico |
| ds\_filtro | Concatenação entre sigla e nome da dose, sem acentos |
| nu\_ordem | Código para ordenação da dose do imunobiológico |
| no\_apresentacao\_dose | Nome de apresentação da dose do imunobiológico |
