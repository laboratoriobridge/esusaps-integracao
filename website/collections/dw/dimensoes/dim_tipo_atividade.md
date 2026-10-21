---
id: RF-EDW.dim_tipo_atividade
title: Tabela de dimensão de tipo de atividade coletiva
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_atividade` é utilizada para armazenar os tipos de atividade coletiva. Possui como referência a :link[Atividade]{id=dicionario anchor=tipoatividadecoletiva} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_atividade | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de atividade |
| ds\_tipo\_atividade | Descrição do tipo de atividade |
| co\_categoria\_tipo\_atividade | Código da categoria do tipo de atividade (reunião ou ação de saúde) |
| ds\_categoria\_tipo\_atividade | Descrição da categoria do tipo de atividade |
| co\_ordem | Código para ordenação |
