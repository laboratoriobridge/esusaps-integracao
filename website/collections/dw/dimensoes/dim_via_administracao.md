---
id: RF-EDW.dim_via_administracao
title: Tabela de dimensão de via de administração de medicamento
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_via_administracao` é utilizada para armazenar as vias de administração de medicamentos. Possui como referência a tabela de :link[viaAdministracao]{id=dicionario anchor=viaadministracao} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_via\_administracao | Código de identificação sequencial |
| nu\_identificador | Número identificador da via de administração |
| ds\_via\_administracao | Descrição da via de administração |
| no\_via\_administracao\_filtro | Nome da via de administração sem acentuação, utilizado para filtros |
| co\_ordem | Código para ordenação |
