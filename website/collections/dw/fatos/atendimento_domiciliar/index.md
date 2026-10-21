---
id: RF-EDW.atendimento_domiciliar
title: Atendimento domiciliar
order: 1
parent: RF-EDW.fatos
---

## 1. Objetivo

O atendimento domiciliar é composto por diferentes tabelas de fato. Essa documentação tem como objetivo listar detalhadamente todos os fatos que compõem a estrutura do atendimento domiciliar.

Os **Problemas e condições avaliadas** de **CIAP2** e **CID10** estão armazenados na **tb\_fat\_atend\_dom\_prob\_cond** (denominada `tb_fat_atend_dom_condicao_aval` até a versão 5.3.15). Já os **Procedimentos** estão armazenados na **tb\_fat\_atend\_dom\_proced**. Estas duas tabelas são interligadas com a **tb\_fat\_atendimento\_domiciliar** através da coluna **co\_fat\_atend\_domiciliar**.

Os dados registrados nas opções rápidas das "Condições Avaliadas" são armazenados na tabela **tb\_fat\_atendimento\_domiciliar**. Enquanto que os dados de CIAP2 e CID10 são armazenados na **tb\_fat\_atend\_dom\_prob\_cond**.

- :link{id=RF-EDW.tb_fat_atendimento_domiciliar};
- :link{id=RF-EDW.tb_fat_atend_dom_prob_cond};
- :link{id=RF-EDW.tb_fat_atend_dom_proced}.
