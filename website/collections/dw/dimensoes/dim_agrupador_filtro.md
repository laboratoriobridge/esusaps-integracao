---
id: RF-EDW.dim_agrupador_filtro
title: Tabela de dimensão de agrupadores de filtro
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_agrupador_filtro` é utilizada para organização e apresentação da tela de filtros dos relatórios do e-SUS APS PEC. É a junção dos dados dos profissionais de forma que seja fácil identificar dados básicos relacionados a um profissional durante a montagem de um filtro.

## 2. Regras

:nr A tabela é preenchida sempre que um novo fato relacionado a profissional é gerado.

:nr A coluna referente a microárea é preenchida quando são gerados os fatos de **Cadastro Individual**, **Cadastro Domiciliar e Territorial** e **Visita Domiciliar e Territorial**.

## 3. Campos da tabela

| Colunas DW | Referência      |
| ---------- | --------------- |
| co\_seq\_dim\_agrupador\_filtro | Código de identificação sequencial |
| co\_dim\_municipio | Código do município do profissional. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_unidade\_saude | Código da unidade de saúde do profissional. Campo `co_seq_dim_unidade_saude` da `tb_dim_municipio` |
| co\_dim\_equipe | Código da equipe do profissional. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_profissional | Código do profissional. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_cbo | Código da CBO do profissional. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| nu\_micro\_area | Número da microárea preenchida pelo profissional |
