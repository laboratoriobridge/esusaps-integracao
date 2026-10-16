---
id: RF-EDW.dim_local_apl_vacina
title: Tabela de dimensão de local de aplicação da vacina
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_local_apl_vacina` é utilizada para armazenar os locais de aplicação da vacina. Possui como referência a tabela de :link[Local de aplicação]{id=dicionario anchor=localaplicacao} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_local\_apl\_vacina | Código de identificação sequencial |
| nu\_identificador | Número identificador do local de aplicação |
| ds\_local\_apl\_vacina | Descrição do local de aplicação da vacina |
| co\_ordem | Código para ordenação do local de aplicação|
