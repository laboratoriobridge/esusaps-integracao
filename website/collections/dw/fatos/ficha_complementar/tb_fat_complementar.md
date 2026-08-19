---
id: RF-EDW.tb_fat_complementar
title: >-
  Tabela fato da ficha complementar de Síndrome neurológica por Zika /
  Microcefalia
order: 0
parent: RF-EDW.ficha_complementar
---

## 1. Objetivo

A tabela `tb_fat_complementar` é populada sempre que os dados de um registro de :link[Síndrome neurológica por Zika / Microcefalia]{id=dicionario-fczm} são processados.

## 2. Regras

:nr A `tb_fat_complementar` é preenchida quando são processado(a)s:

- Fichas complementares recebidas através da importação de sistemas terceiros ou outras instalações do PEC e-SUS-APS;
- Registro de uma ficha complementar de Síndrome neurológica por Zika / Microcefalia no CDS ou no atendimento individual.

## 3. Fatos

### 3.1 Metadados dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_complementar | - | Código de identificação sequencial criado automaticamente pelo sistema |
| nu\_uuid\_ficha | :link[uuidFicha]{id=dicionario-fczm anchor=2-uuidficha} | Identificador universalmente único do registro |
| nu\_uuid\_dado\_transp | :link[uuidDadoSerializado]{id=camada-transporte anchor=1-uuiddadoserializado} | Identificador universalmente único da camada de transporte de dados |
| nu\_cns | :link[cnsCidadao]{id=dicionario-fczm anchor=5-cnscidadao} | CNS do cidadão |
| nu\_cns\_responsavel | :link[cnsResponsavelFamiliar]{id=dicionario-fczm anchor=6-cnsresponsavelfamiliar} | CNS do responsável pelo cidadão |
| nu\_cpf\_cidadao | :link[cpfCidadao]{id=dicionario-fczm anchor=19-cpfcidadao} | CPF do cidadão |
| nu\_cpf\_responsavel | :link[cpfResponsavelFamiliar]{id=dicionario-fczm anchor=20-cpfresponsavelfamiliar} | CPF do responsável pelo cidadão |
| co\_fat\_cidadao\_pec | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| co\_fat\_cidadao\_pec\_responsvl | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` referente ao responsável |

### 3.2 Métricas dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| dt\_teste\_olhinho | :link[dataRealizacaoTesteOlhinho]{id=dicionario-fczm anchor=7-datarealizacaotesteolhinho} | Data em que foi realizado o teste do olhinho (reflexo vermelho) |
| st\_teste\_olhinho | :link[coResultadoTesteOlhinho]{id=dicionario-fczm anchor=8-coresultadotesteolhinho} | Resultado do teste do olhinho |
| dt\_exame\_fundo\_olho | :link[dataRealizacaoExameFundoOlho]{id=dicionario-fczm anchor=9-datarealizacaoexamefundoolho} | Data em que foi realizado o exame de fundo de olho |
| st\_exame\_fundo\_olho | :link[coResultadoExameFundoOlho]{id=dicionario-fczm anchor=10-coresultadoexamefundoolho} | Resultado do exame de fundo de olho |
| dt\_teste\_orelhinha | :link[dataRealizacaoTesteOrelhinha]{id=dicionario-fczm anchor=11-datarealizacaotesteorelhinha} | Data em que foi realizado o teste da orelhinha (PEATE) |
| st\_teste\_orelhinha | :link[coResultadoTesteOrelhinha]{id=dicionario-fczm anchor=12-coresultadotesteorelhinha} | Resultado do teste da orelhinha |
| dt\_transfontanela | :link[dataRealizacaoUSTransfontanela]{id=dicionario-fczm anchor=13-datarealizacaoustransfontanela} | Data em que foi realizada a ultrassonografia transfontanela |
| st\_transfontanela | :link[coResultadoUsTransfontanela]{id=dicionario-fczm anchor=14-coresultadoustransfontanela} | Resultado da ultrassonografia transfontanela |
| dt\_tomografia | :link[dataRealizacaoTomografiaComputadorizada]{id=dicionario-fczm anchor=15-datarealizacaotomografiacomputadorizada} | Data em que foi realizada a tomografia computadorizada |
| st\_tomografia | :link[coResultadoTomografiaComputadorizada]{id=dicionario-fczm anchor=16-coresultadotomografiacomputadorizada} | Resultado da tomografia computadorizada |
| dt\_ressonancia | :link[dataRealizacaoRessonanciaMagnetica]{id=dicionario-fczm anchor=17-datarealizacaoressonanciamagnetica} | Data em que foi realizada a ressonância magnética |
| st\_ressonancia | :link[coResultadoRessonanciaMagnetica]{id=dicionario-fczm anchor=18-coresultadoressonanciamagnetica} | Resultado da ressonância magnética |
| st\_nao\_possui\_cpf | :link[stNaoPossuiCpf]{id=dicionario-fczm anchor=21-stnaopossuicpf} | Indica se o cidadão não possui CPF |

## 4. Dimensões da tabela

| Coluna DW | Dimensão referência |
| --------- | ------------------- |
| co\_dim\_municipio | Código de identificação do município. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_tipo\_ficha | Código de identificação do tipo de ficha. Campo `co_seq_dim_tipo_ficha` da `tb_dim_tipo_ficha` |
| co\_dim\_profissional | Código de identificação do profissional responsável. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_unidade\_saude | Código de identificação da unidade de saúde do profissional responsável. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_equipe | Código de identificação da equipe do profissional responsável. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_cbo | Código de identificação do CBO do profissional responsável. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_tempo | Responsável por armazenar as datas de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_turno | Código do turno. Campo `co_seq_dim_turno` da `tb_dim_turno` |
| co\_dim\_tipo\_origem\_dado\_transp | Código da origem do dado no transporte. Campo `co_seq_dim_tp_orgm_dado_transp` da `tb_dim_tipo_origem_dado_transp` |
| co\_dim\_cds\_tipo\_origem | Código da origem do dado no transporte. Campo `co_seq_dim_tipo_origem` da `tb_dim_tipo_origem` |
| co\_dim\_just\_nao\_possui\_cpf | Código da justificativa de não possuir CPF. Campo `co_seq_dim_just_nao_possui_cpf` da `tb_dim_just_nao_possui_cpf` |
