---
id: RF-EDW.dim_tempo
title: Tabela de dimensão de datas
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tempo` é utilizada para armazenar as datas de maneira estruturada.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_tempo | Código de identificação sequencial |
| dt\_registro | Data no formato AAAA-MM-DD |
| nu\_dia | Número referente ao dia da data |
| nu\_mes | Número referente ao mês da data |
| nu\_ano | Número referente ao ano da data |
| ds\_dia\_semana | Descrição referente ao dia da semana da data |
