---
id: RF-EDW.visualizacoes
title: Visualizações
order: 3
parent: dw
---

## 1. Visualizações

Nas Visualizações a maioria dos dados são populados de forma legível para o usuário. O processo de ETL é realizado e utilizando as regras de negócios estabelecidas pelo PEC, trazendo uma informação valiosa e estruturada que é utilizada pelo próprio e-SUS APS na construção de relatórios internos. Porém, nada impede que elas possam ser utilizadas também para construir relatórios dinâmicos.

A estrutura de Visualizações é composta pelas seguintes tabelas:

| Nome da Tabela                  | Descrição |
| ------------------------------- | --------- |
| :link[tb\_acomp\_cidadaos\_vinculados]{id=RF-EDW.acomp_cidadaos_vinculados} | Utilizada para identificar todos os cadastros de cidadãos que são acompanhados por alguma equipe. O uso dessa tabela é sugerido quando houver necessidade de criar relatórios que listam dados dos cidadãos ou que desejam filtrar cidadãos de determinadas equipes, garantindo assim uma consistência com os dados apresentados pelo PEC |
