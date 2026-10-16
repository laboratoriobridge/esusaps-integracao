---
id: RF-EDW.dim_via_adm_vacina
title: Tabela de dimensão de via de administração da vacina
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_via_adm_vacina` é utilizada para armazenar as vias de administração da vacina. Possui como referência a tabela de :link[Via de administração para imunobiológicos]{id=dicionario anchor=viaadministracao-para-imunobiol-gicos} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_via\_adm\_vacina | Código de identificação sequencial |
| nu\_identificador | Número identificador da via de administração |
| ds\_via\_adm | Descrição da via de administração |
| co\_ordem | Código para ordenação da via de administração |
