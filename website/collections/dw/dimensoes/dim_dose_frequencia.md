---
id: RF-EDW.dim_dose_frequencia
title: Tabela de dimensão de tipos de periodicidade da dose
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_dose_frequencia` é utilizada para armazenar os tipos de periodicidades da dose de medicamentos. Possui como referência a tabela de :link[Tipo de Periodicidade da dose]{id=dicionario anchor=dosefrequenciatipo} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_dose\_frequencia | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de periodicidade da dose |
| no\_dose\_frequencia | Nome do tipo de periodicidade da dose |
| no\_dose\_frequencia\_filtro | Nome do tipo de periodicidade da dose, sem acentos |
| co\_ordem | Código para ordenação do tipo de periodicidade da dose |
