---
id: dw
title: Data Warehouse Relatórios e-SUS APS PEC
order: 2
parent: integracao
---

## 1. Objetivo

Esta seção descreve a estrutura de Data Warehouse (DW) onde são armazenados os dados para a geração dos relatórios.

O DW é uma base de dados contendo vários componentes. Possui uma arquitetura multidimensional, onde encontram-se as :link{id=RF-EDW.dimensoes} e :link{id=RF-EDW.fatos}. Estas estruturas são alguns dos elementos do DW, são dependentes entre si e permitem o armazenamento dos dados. Além disso, temos as :link{id=RF-EDW.visualizacoes} que são estruturas que, diferente das dimensões e fatos, são independentes, construídas própriamente para tratar de domínios específicos, consolidando eventos e já repassando o que o Prontuário Eletrônico do Cidadão considera como verdade sobre esses domínios.

Através de um sistema de [ETL](https://pt.wikipedia.org/wiki/Extract,_transform,_load), as informações são extraídas de arquivos conforme descritos na estrutura :link{id=ledi} e armazenadas nas tabelas Fatos e Dimensões. Enquanto isso, as tabelas de Visualizações são populadas com dados de diversas origens, independente de estarem no PEC ou no DW.

As Dimensões possuem características descritivas dentro do DW. São responsáveis por qualificar as informações provenientes das tabelas Fatos. As tabelas Fatos possuem características quantitativa dentro do DW. A partir delas, são extraídas métricas que são cruzadas com os dados das Dimensões, gerando informações significativas para a avaliação do usuário. Todos os dados históricos no DW ficam armazenadas nas tabelas Fatos. As visualizações não possuem dados históricos, sendo especificamente a situação em que se encontra os dados com base no último processamento dos relatórios.
