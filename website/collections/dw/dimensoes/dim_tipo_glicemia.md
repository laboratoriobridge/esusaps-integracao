---
id: RF-EDW.dim_tipo_glicemia
title: Tabela de dimensão de tipo de glicemia capilar
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_glicemia` é utilizada para armazenar os tipos de momento de coleta da glicemia capilar. Possui como referência a tabela de :link[TipoGlicemiaCapilar]{id=dicionario anchor=tipoglicemiacapilar} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_glicemia | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de glicemia capilar |
| ds\_tipo\_glicemia | Descrição do tipo de glicemia capilar |
| ds\_tipo\_glicemia\_filtro | Descrição do tipo de glicemia capilar sem acentuação, utilizado para filtros |
| co\_ordem | Código para ordenação |
