---
id: RF-EDW.dim_identidade_genero
title: Tabela de dimensão de identidade de gênero
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_identidade_genero` é utilizada para armazenar as identidades de gênero. Possui como referência a tabela de :link[Identidade de gênero]{id=dicionario anchor=identidadegenerocidadao} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_identidade\_genero | Código de identificação sequencial |
| nu\_identificador | Número identificador da identidade de gênero |
| ds\_identidade\_genero | Descrição da identidade de gênero |
| co\_ordem | Código para ordenação da identidade de gênero |
