---
id: RF-EDW.dim_grupo_atendimento
title: Tabela de dimensão de grupo de atendimento
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_grupo_atendimento` é utilizada para armazenar os grupos de atendimento em vacinações de campanha. Possui como referência a tabela de :link[Grupo de atendimento]{id=dicionario anchor=grupodeatendimento} do LEDI.

## 2. Regra

:nr Quando um grupo de atendimento é informado em um atendimento, a tabela é preenchida.

## 3. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_grupo\_atendimento | Código de identificação sequencial |
| nu\_identificador | Número identificador do grupo de atendimento |
| ds\_grupo\_atendimento | Descrição do grupo de atendimento |
