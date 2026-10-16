---
id: RF-EDW.dim_tipo_localizacao
title: Tabela de dimensão de tipo de localização da moradia
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_localizacao` é utilizada para armazenar os tipos de localização da moradia. Possui como referência a :link[Localização]{id=dicionario anchor=localizacaodamoradia} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_localizacao | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de localização |
| ds\_tipo\_localizacao | Descrição do tipo de localização |
| co\_ordem | Código para ordenação |
