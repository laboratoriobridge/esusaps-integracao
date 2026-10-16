---
id: RF-EDW.dim_just_nao_possui_cpf
title: Tabela de dimensão de justificativa de ausência de CPF
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_just_nao_possui_cpf` é utilizada para armazenar as justificativas para o cidadão que não possuir CPF. Possui como referência a :link[Justificativa de não possuir CPF]{id=dicionario anchor=justificativanaopossuicpf} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_just\_nao\_possui\_cpf | Código de identificação sequencial |
| nu\_identificador | Número identificador da justificativa |
| no\_justifica\_nao\_possui\_cpf | Descrição da justificativa de ausência de CPF |
| co\_ordem | Código para ordenação |
