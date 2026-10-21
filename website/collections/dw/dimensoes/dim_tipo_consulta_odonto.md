---
id: RF-EDW.dim_tipo_consulta_odonto
title: Tabela de dimensão de tipo de consulta odontológica
order: 4
parent: RF-EDW.dimensoes
---

## 1. Objetivo

A tabela `tb_dim_tipo_consulta_odonto` é utilizada para armazenar os tipos de consulta odontológica. Possui como referência o :link[Tipo de consulta]{id=dicionario anchor=tipodeconsultaodonto} do LEDI. Para manter a compatibilidade com versões anteriores, também apresenta as opções "Consulta de conclusão de tratamento" e "Não se aplica (NA)".

## 2. Campos da tabela

| Colunas DW | Referência |
| ---------- | ---------- |
| co\_seq\_dim\_tipo\_cnsulta\_odonto | Código de identificação sequencial |
| nu\_identificador | Número identificador do tipo de consulta odontológica |
| ds\_tipo\_consulta\_odonto | Descrição do tipo de consulta odontológica |
| co\_ordem | Código para ordenação |
