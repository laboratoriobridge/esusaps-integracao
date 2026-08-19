---
id: RF-EDW.dim_faixa_etaria
title: Tabela de dimensão de faixa etária
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_faixa_etaria` é utilizada para armazenar as faixas etárias. Possui como referência a tabela de :link[Tabela de Faixa Etária]{id=RF-EDW.dimensoes anchor=tabela-tb_dim_faixa_etaria} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_faixa\_etaria | Código de identificação sequencial |
| nu\_identificador | Número identificador da faixa etária |
| ds\_faixa\_etaria | Descrição da faixa etária |
| ds\_filtro | Nome da faixa etária, sem acentos |
| nu\_faixa\_inicial\_anos | Número de anos inicial da faixa etária |
| nu\_faixa\_final\_anos | Número de anos final da faixa etária |
