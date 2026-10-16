---
id: RF-EDW.tb_fat_consolidado_cidadao_fai
title: >-
  Tabela fato com informações consolidadas sobre um cidadão geradas a partir de
  um atendimento individual
order: 2
parent: RF-EDW.atendimento_individual
---

## 1. Objetivo

A tabela `tb_fat_consolidado_cidadao_fai` é populada sempre que os dados de um :link[atendimento individual]{id=dicionario-fai} são processados.  

## 2. Regras

:nr Após o processamento do primeiro atendimento individual de um cidadão é criada uma nova linha na tabela `tb_fat_consolidado_cidadao_fai`. Os próximos atendimentos não criam novas linhas, substituem o registro antigo com as informações mais recentes do cidadão, as colunas só são atualizadas caso existam novos registros.

## 3. Fatos da tabela

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_conslddo\_ciddo\_fai | - | Código de identificação sequencial dos fatos consolidados de um cidadão |
| co\_fat\_cidadao\_pec | - | Código de identificação sequencial do cidadão. Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| nu\_altura | - | Armazena o valor mais atualizado sobre a altura do cidadão |
| nu\_peso | - | Armazena o valor mais atualizado sobre a peso do cidadão |
| nu\_perimetro\_cefalico\_prcltra | - | Somente armazena um valor quando é feito medição de perimêtro cefálico nos campos de "Antropometria, sinais vitais e glicemia capilar" dentro de um atendimento de puericultura |
| nu\_altura\_prcltra | - | Somente armazena um valor quando é feito medição de altura nos campos de "Antropometria, sinais vitais e glicemia capilar" dentro de um atendimento de puericultura |
| nu\_peso\_prcltra | - | Somente armazena um valor quando é feito medição de peso nos campos de "Antropometria, sinais vitais e glicemia capilar" dentro de um atendimento de puericultura |
| st\_vacinacao\_em\_dia\_prcltra | - | Armazena o valor mais atualizado sobre o campo "Vacinação em dia?" |
| st\_teste\_pezinho | - | Armazena o valor mais atualizado do resultado de exame "0202110052 - DOSAGEM DE FENILALANINA E TSH OU T4" |
| st\_teste\_orelhinha | - | Armazena o valor mais atualizado do resultado de exame "0211070149 - EMISSOES OTOACUSTICAS EVOCADAS P/ TRIAGEM AUDITIVA (TESTE DA ORELHINHA)" |
| st\_teste\_olhinho | - | Armazena o valor mais atualizado do resultado de exame "ABEX022 - TESTE DO OLHINHO (TRV)"  |
| st\_risco\_cardio | - | Armazena o valor mais atualizado do resultado de exame "ABEX022 - TESTE DO OLHINHO (TRV)"  |

## 4. Dimensões da tabela

:nr Todos as colunas que começam com `co_dim_tempo` estão relacionado a tabela `tb_dim_tempo` através do campo `co_seq_dim_tempo`. 

| Coluna DW | Dimensão referência | 
| --------- | ------------------- | 
| co\_dim\_tempo\_ultima\_ficha | Responsável por armazenar as datas de processamento da última ficha de maneira estruturada  |
| co\_dim\_tempo\_has | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a hipertensão arterial (HAS)  |
| co\_dim\_tempo\_diabetes | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a diabetes (DIA)  |
| co\_dim\_tempo\_tabagismo | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a tabagismo  |
| co\_dim\_tempo\_obesidade | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a obesidade  |
| co\_dim\_tempo\_avc | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a acidente vascular cerebral (AVC)  |
| co\_dim\_tempo\_infarto | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a infarto  |
| co\_dim\_tempo\_doenca\_cardiaca | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a doença cardíaca  |
| co\_dim\_tempo\_problema\_rins | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a algum problema no rim  |
| co\_dim\_tempo\_rastr\_rsco\_crdo | Responsável por armazer a data do último atendimento onde houve registro de CID10 ou CIAP2 relacionado a rastreamento risco cardiovascular  |
| co\_dim\_tempo\_consulta\_purperio | Responsável por armazer a data do último atendimento de puerpério  |
| co\_dim\_tempo\_consulta\_prcltra | Responsável por armazer a data do último atendimento de puericultura  |
| co\_dim\_tempo\_cnslta\_1\_prcltra | Responsável por armazer a data do primeiro atendimento de puericultura  |
| co\_dim\_aleitamento\_prcltra | Código do tipo de aleitamento. Campo `co_seq_dim_faixa_aleitamento` da `tb_dim_aleitamento` | 

### 4.1 Relação entre condição de saúde e códigos CIAP2 e CID10


| Condição | CIAP2 | CID10 |
| -------- | ----- | ----- |
| Hipertensão Arterial (HAS) | - K86 <br />- K87 | - I10  <br />- P292 <br />- K766 <br />- I270  <br />- I272  <br />- que contenha o código I13 <br />- que contenha o código I15 |
| Diabetes (DIA) | - T90  <br />- T89 | - que contenha o código E10 <br />- que contenha o código E11 <br />- que contenha o código E12 <br />- que contenha o código E13 <br />- que contenha o código E14 <br />- que contenha o código O24 <br />- E232 <br />- N083 <br />- N251 <br />- P700 <br />- P702 |
| Tabagismo |  P17 |  Z720 |
| Obesidade |  T82 |  que contenha o código E66 |
| AVC      | - K89 <br />- K90 <br />- K91 | - G45 <br />- G46 <br />- I60 <br />- que contenha o código I61 <br />- I62 <br />- que contenha o código I63 <br />- I64 <br />- I65 <br />- I66 <br />- que contenha o código I67, exceto I674 <br />- I68 <br />- I69 |
| Infarto  | - K75 <br />- K78 | - que contenha o código I21 <br />- que contenha o código I22 <br />- que contenha o código I23 <br />- I241 <br />- I48 |
| Doença Cardíaca | - K74 <br />- K76 <br />- K77 <br />- K79 <br />- K80 <br />- K82 <br />- K83 <br />- K84 <br />- K99 | - I20 <br />- I240 <br />- I249 <br />- I25 <br />- I50 <br />- I47 <br />- I49 <br />- I27 <br />- I28 <br />- I34 <br />- I35 <br />- I36 <br />- I37 <br />- I31 <br />- que contenha o código I42, exceto I424 <br />- I43 <br />- I44 <br />- I45 <br />- I46 <br />- I51 <br />- I52 <br />- O903 <br />- I71 <br />- I72 <br />- I77 <br />- I780 <br />- I788 <br />- I789 <br />- I79 <br />- I85 <br />- I86 <br />- I871 <br />- I879 <br />- I890 <br />- I98 <br />- I99 <br />- M30 <br />- M31 <br />- R57 <br />- T063 |
| Rins     | - U70 <br />- U71 <br />- U72 <br />- U75 <br />- U76 <br />- U77 <br />- U78 <br />- U79 <br />- U80 <br />- U85 <br />- U88 <br />- U90 <br />- U95 <br />- U98 <br />- U99 | - N10 <br />- N11 <br />- N12 <br />- N151 <br />- N159 <br />- N30 <br />- N390 <br />- A560 <br />- A562 <br />- A590 <br />- B374 <br />- N34 <br />- C64 <br />- C65 <br />- C67 <br />- C66 <br />- C68 <br />- D30 <br />- D099 <br />- D091 <br />- D41 <br />- S370 <br />- S371 <br />- S372 <br />- S373 <br />- T190 <br />- T191 <br />- T283 <br />- Q60 <br />- Q61 <br />- Q62 <br />- Q63 <br />- Q64 <br />- N00 <br />- N01 <br />- N03 <br />- N04 <br />- N05 <br />- N07 <br />- N08  <br />- N14 <br />- N150 <br />- N158 <br />- N16 <br />- N392 <br />- N20 <br />- N21 <br />- N22 <br />- N391 <br />- R80 <br />- R81 <br />- R82 <br />- N06 <br />- N13 <br />- N17 <br />- N18 <br />- N19 <br />- N25 <br />- N26 <br />- N27 <br />- N28 <br />- N29 <br />- N31 <br />- N32 <br />- N33 <br />- N35 <br />- N36 <br />- N37 <br />- N398 <br />- R392 <br />- T198 <br />- T199 <br />- Z905 <br />- Z906 |
| Rastreamento Risco Cardiovascular | K22   | - Z136 <br />- Z824 |
