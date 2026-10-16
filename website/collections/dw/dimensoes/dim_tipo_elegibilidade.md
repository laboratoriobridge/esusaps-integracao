---
id: RF-EDW.dim_tipo_elegibilidade
title: Tabela de dimensão de tipo de elegibilidade para atenção domiciliar
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_elegibilidade` é utilizada para armazenar os tipos de elegibilidade para atenção domiciliar. Possui como referência o campo :link[Elegível]{id=dicionario anchor=conclusaodestinoelegivel} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_elegibilidade | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de elegibilidade |
| ds\_tipo\_elegibilidade | Descrição do tipo de elegibilidade |
| co\_ordem | Código para ordenação |
