---
id: RF-EDW.dim_nacionalidade
title: Tabela de dimensão de nacionalidade
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_nacionalidade` é utilizada para armazenar as nacionalidades. Possui como referência a :link[Tabela de nacionalidades]{id=dicionario anchor=nacionalidade} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_nacionalidade | Código de identificação sequencial |
| co\_nacionalidade | Código da nacionalidade |
| no\_identificador | Nome identificador da nacionalidade |
| ds\_nacionalidade | Descrição da nacionalidade |
| co\_ordem | Código para ordenação da nacionalidade |
