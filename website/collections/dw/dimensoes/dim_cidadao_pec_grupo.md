---
id: RF-EDW.dim_cidadao_pec_grupo
title: Tabela de dimensão de referências de cadastro de um mesmo cidadão
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_cidacao_pec_grupo` é utilizada para identificar todas as referências de cadastro de um mesmo cidadão.

## 2. Regras

:nr É criado um registro sempre que há um tipo de identificação diferente para o cidadão, ou seja, se no mesmo registro existir CNS, CPF e estiver relacionado a uma Ficha de Cadastro Individual, serão gerados 3 registros nessa tabela.

## 3. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_cidadao\_pec\_grupo | Código de identificação sequencial |
| co\_identificacao | Código de identificação do cidadão. CNS, CPF ou Número do UUID de Origem |
| tp\_identificacao | 0 - UUID de Origem, 1 - CNS e 2 - CPF |
| co\_fat\_cidadao\_pec | Código do fato de cidadão relacionado a esse registro. Campo `co_seq_fat_cidacao_pec` da `tb_fat_cidacao_pec` |
| co\_cidadao | Código do cidadão relacionado a esse registro. Campo `co_seq_cidadao` da `tb_cidadao` |
| co\_cidadao\_master | Código do cidadão unificado. Campo `co_seq_cidadao` da `tb_cidadao` |
