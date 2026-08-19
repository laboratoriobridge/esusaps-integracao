---
id: RF-EDW.dim_dose_frequencia_medida
title: Tabela de dimensão de periodicidade da dose
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_dose_frequencia_medida` é utilizada para armazenar as periodicidades da dose de medicamentos. Possui como referência a tabela de :link[Periodicidade da dose]{id=dicionario anchor=dosefrequenciaunidademedida} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_dose\_frequencia\_med | Código de identificação sequencial |
| nu\_identificador | Número identificador da periodicidade da dose |
| no\_dose\_frequencia\_medida | Nome da periodicidade da dose |
| no\_dose\_frequencia\_medida\_filt | Nome da periodicidade da dose, sem acentos |
| co\_ordem | Código para ordenação da periodicidade da dose |
