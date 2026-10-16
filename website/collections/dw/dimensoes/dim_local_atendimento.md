---
id: RF-EDW.dim_local_atendimento
title: Tabela de dimensão de local de atendimento
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_local_atendimento` é utilizada para armazenar os locais de atendimento. Possui como referência a :link[Tabela de local de atendimento]{id=dicionario anchor=localdeatendimento}.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_local\_atendimento | Código de identificação sequencial |
| nu\_identificador | Número identificador do local de atendimento |
| ds\_local\_atendimento | Descrição do local de atendimento |
| co\_ordem | Código para ordenação do local de atendimento |
| ds\_filtro | Descrição do local de atendimento, sem acentos |
