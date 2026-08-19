---
id: RF-EDW.atividade_coletiva
title: Atividade coletiva
order: 4
parent: RF-EDW.fatos
---

## 1. Objetivo

A atividade coletiva é composta por diferentes tabelas de fato. Essa documentação tem como objetivo listar detalhadamente todos os fatos que compõem a estrutura da atividade coletiva.

Os **Profissionais participantes** estão armazenados na **tb\_fat\_atvdd\_coletiva\_propart**. Os **Temas para reunião** estão armazenados na **tb\_fat\_atvdd\_coletiva\_int** (quando no grupo atividade for informado uma das opções referentes à reunião). Já os registros de **Público alvo**, **Temas para saúde** e **Práticas em saúde** estão armazenados na **tb\_fat\_atvdd\_coletiva\_ext** (quando no grupo atividade for informado uma atividade relacionada a ações de saúde com os usuários). Os **Participantes** estão armazenados na tabela **tb\_fat\_atvdd\_coletiva\_part**. Estas tabelas são interligadas com a **tb\_fat\_atividade\_coletiva** através da coluna **co\_fat\_atividade\_coletiva**.

Algumas informações adicionadas nas tabelas acima não existem na ficha de atividade coletiva, mas foram incluídas para melhorar a performance. Neste cenário encontram-se as colunas **nu\_participantes\_registrados** e **nu\_avaliacoes\_alteradas**, referentes à quantidade de cidadãos registrados no grupo "Participantes" e à quantidade de cidadãos registrados no grupo "Participantes" com "Avaliação alterada" selecionada, respectivamente.

- :link{id=RF-EDW.tb_fat_atividade_coletiva};
- :link{id=RF-EDW.tb_fat_atvdd_coletiva_int};
- :link{id=RF-EDW.tb_fat_atvdd_coletiva_ext};
- :link{id=RF-EDW.tb_fat_atvdd_coletiva_propart};
- :link{id=RF-EDW.tb_fat_atvdd_coletiva_part}.
