---
id: RF-EDW.dim_frequencia_alimentacao
title: Tabela de dimensão de frequência de alimentação
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_frequencia_alimentacao` é utilizada para armazenar as opções disponíveis para a pergunta "Quantas vezes se alimenta ao dia?". Possui como referência a tabela de :link[Frequência de alimentação]{id=dicionario anchor=quantasvezesalimentacao} do LEDI.

## 2. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_frequencia\_alimentacao | Código de identificação sequencial |
| nu\_identificador | Número identificador da frequência de alimentação |
| ds\_dim\_frequencia\_alimentacao | Descrição da frequência de alimentação |
| co\_ordem | Código para ordenação da frequência de alimentação |
