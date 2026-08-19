---
id: RF-EDW.fatos
title: Fatos
order: 2
parent: dw
---

## 1. Fatos

O nome das tabelas **Fato** é formado pelo prefixo "**tb\_fat\_**" seguido do nome do respectivo fato, por exemplo: **tb\_fat\_cid\_individual**. As tabelas Fato consistem em métricas ou medidas referentes a uma determinada **estratégia de negócio** a ser analisada. Apresentam colunas que armazenam os fatos propriamente dito e outras que fazem a ligação com as tabelas Dimensão. Para identificar as tabelas **dimensão** responsáveis por contextualizar os identificadores, basta verificar a *Foreign Key* (FK) da respectiva coluna.

Os Fatos fazem referência para as dimensões, formando assim um esquema de estrela, onde o fato é a tabela central. Algumas estratégias de negócio podem ser formadas por mais de um fato, adquirindo o formato de constelação de fatos.

Na perspectiva do sistema, algumas fichas podem ter mais de um registro de atendimento vinculado a ela. Na estrutura do DW, este cenário é representado de maneira linear, ou seja, cada registro corresponde a uma tupla na respectiva tabela.

Neste contexto, a estrutura das tabelas pode ser diferente da estrutura do :link{id=ledi}, principalmente no que diz respeito aos campos onde é permitido selecionar mais de uma opção. Para estes cenários, o DW apresenta uma coluna para cada opção do campo, sendo que se o valor for "1" indica que a respectiva opção foi selecionada e se o valor for "0" indica que não foi selecionada. Estes casos serão explicados de acordo com cada estratégia de negócio do e-SUS APS PEC:

- :link{id=RF-EDW.cadastro_individual};
- :link{id=RF-EDW.cadastro_domiciliar};
- :link{id=RF-EDW.atendimento_individual};
- :link{id=RF-EDW.atendimento_odontologico_individual};
- :link{id=RF-EDW.atividade_coletiva};
- :link{id=RF-EDW.procedimentos};
- :link{id=RF-EDW.visita_domiciliar};
- :link{id=RF-EDW.marcadores_consumo_alimentar};
- :link{id=RF-EDW.avaliacao_elegibilidade};
- :link{id=RF-EDW.atendimento_domiciliar};
- :link{id=RF-EDW.ficha_complementar};
- :link{id=RF-EDW.vacinacao};
- :link{id=RF-EDW.cuidado_compartilhado};
- :link{id=RF-EDW.ivcf}.

Existem algumas tabelas Fato que foram criadas com o objetivo de organizar e pré-processar as informações apresentadas nos relatórios existentes no e-SUS APS PEC, conforme apresentadas na Tabela 1. Porém, elas podem ser utilizadas também para construir relatórios dinâmicos, caso necessário.

```
IMPORTANTE: Os relatórios operacionais foram descontinuados do Prontuário Eletrônico e-SUS APS. 
Em breve as tabelas utilizadas para os relatórios operacionais serão descontinuadas.
```

Nome da Tabela | Descrição |
-------------- | --------- |
tb\_fat\_fichas | Utilizada apenas para registrar as fichas presentes no DW |
tb\_fat\_cidadao | Utilizada nos relatórios consolidados de cadastro |
tb\_fat\_familia | Utilizada nos relatórios consolidados de cadastro |
tb\_fat\_cidadao\_territorio | Utilizada nos relatórios operacionais de cadastro |
tb\_fat\_familia\_territorio | Utilizada nos relatórios operacionais de cadastro |
tb\_fat\_cidadao\_pec | Utilizada nos relatórios operacionais |
tb\_fat\_cnslddo\_ciddo\_fai\_cid | Utilizada nos relatórios operacionais |
tb\_fat\_consolidado\_cidadao\_fai | Utilizada nos relatórios operacionais |
tb\_fat\_consolidado\_cidadao\_fao | Utilizada nos relatórios operacionais |
tb\_fat\_consolidado\_cidadao\_fci | Utilizada nos relatórios operacionais |
tb\_fat\_consolidado\_cidadao\_fp | Utilizada nos relatórios operacionais |
tb\_fat\_consolidado\_cidadao\_fvd | Utilizada nos relatórios operacionais |
tb\_fat\_rel\_op\_crianca | Utilizada nos relatórios operacionais |
tb\_fat\_rel\_op\_gestante | Utilizada nos relatórios operacionais |
tb\_fat\_rel\_op\_risco\_cardio | Utilizada nos relatórios operacionais |
*Tabela 1 - Tabelas criadas para organização dos relatórios do PEC*
