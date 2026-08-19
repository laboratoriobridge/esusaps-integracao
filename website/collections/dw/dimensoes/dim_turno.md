---
id: RF-EDW.dim_turno
title: Tabela de dimensão de turno
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_turno` é utilizada para armazenar os turnos do atendimento. Possui como referência o :link[Turno]{id=dicionario anchor=turno} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_turno | Código de identificação sequencial |
| nu\_identificador | Número identificador do turno |
| ds\_turno | Descrição do turno |
| co\_ordem | Código para ordenação |
