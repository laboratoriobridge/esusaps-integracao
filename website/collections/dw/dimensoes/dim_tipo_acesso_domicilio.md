---
id: RF-EDW.dim_tipo_acesso_domicilio
title: Tabela de dimensão de tipo de acesso ao domicílio
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_acesso_domicilio` é utilizada para armazenar os tipos de acesso ao domicílio. Possui como referência o :link[Tipo de acesso ao domicílio]{id=dicionario anchor=tipodeacessoaodomicilio} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_acesso\_domicil | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de acesso ao domicílio |
| ds\_tipo\_acesso\_domicilio | Descrição do tipo de acesso ao domicílio |
| co\_ordem | Código para ordenação |
