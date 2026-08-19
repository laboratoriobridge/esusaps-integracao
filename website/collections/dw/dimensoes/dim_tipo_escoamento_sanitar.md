---
id: RF-EDW.dim_tipo_escoamento_sanitar
title: Tabela de dimensão de tipo de escoamento sanitário
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_escoamento_sanitar` é utilizada para armazenar as formas de escoamento do banheiro ou sanitário. Possui como referência a :link[Forma de escoamento do banheiro ou sanitário]{id=dicionario anchor=formadeescoamentodobanheiroousanitario} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_escoamento\_snt | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de escoamento sanitário |
| ds\_tipo\_escoamento\_sanitario | Descrição do tipo de escoamento sanitário |
| co\_ordem | Código para ordenação |
