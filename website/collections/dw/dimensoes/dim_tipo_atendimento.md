---
id: RF-EDW.dim_tipo_atendimento
title: Tabela de dimensão de tipo de atendimento
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_atendimento` é utilizada para armazenar os tipos de atendimento. Possui como referência o :link[Tipo de atendimento]{id=dicionario anchor=tipodeatendimento} do LEDI. Também apresenta a opção "Consultas". A coluna `co_dim_tipo_atendimento_pai` referencia o registro pai, utilizado para agrupamento da informação e visualização hierárquica.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_atendimento | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de atendimento |
| ds\_tipo\_atendimento | Descrição do tipo de atendimento |
| co\_dim\_tipo\_atendimento\_pai | Código do tipo de atendimento pai (agrupador hierárquico). Campo `co_seq_dim_tipo_atendimento` da própria `tb_dim_tipo_atendimento` |
| co\_ordem | Código para ordenação |
| ds\_filtro | Concatenação de campos para busca, sem acentos |
