---
layout: doc
title: Lista de exames com resultado estruturado
id: exames_estruturados
order: 9
parent: referencias
---

Este documento apresenta a lista de exames que possuem resultados estruturados. Esta lista é utilizado na {% link dicionario-fai#27-resultadosexames, title: "Ficha de Atendimento Individual" %} e na {% link dicionario-fao#22-resultadosexames, title: "Ficha de Atendimento Odontológico Individual" %}.

##Tabela de exames com resultado estruturado

| Código SIGTAP\* | Descrição SIGTAP | Código AB correspondente | Descrição AB | Estrutura do resultado do exame | Unidade Medida |
| --------------- | ---------------- | ------------------------ | ------------ | ------------------------------- | -------------- |
| 02.02.01.050-3 | Dosagem de hemoglobina glicosilada | ABEX008 | Hemoglobina glicada | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | % |
| 02.11.07.027-0 | Potencial evocado auditivo p/ triagem auditiva (teste da orelhinha) | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | - |
| 02.11.07.014-9 | Emissões otoacústicas evocadas p/ triagem auditiva (teste da orelhinha) | ABEX020 | Teste da orelhinha (EOA) | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | - |
| 02.05.02.017-8 | Ultrassonografia transfontanela | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | - |
| 02.06.01.007-9 | Tomografia computadorizada do crânio | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | - |
| 02.07.01.006-4 | Ressonância magnética de crânio | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | - |
| 02.11.06.010-0 | Fundoscopia | ABPG013 | Exame de fundo de olho (fundoscopia) | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | - |
| - | - | ABEX022 | Teste do olhinho (TRV) | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | - |
| 02.02.02.050-9 | Prova do laço | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | - |
| 02.05.02.014-3 | Ultrassonografia obstétrica | ABEX024 | Ultrassonografia obstétrica | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `3 - Semanas` <br> [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `2 - Dias` <br> [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `4 - Data` | Semanas / dias / DPP eco |
| 02.05.02.015-1 | ultrassonografia obstétrica c/ doppler colorido e pulsado | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `3 - Semanas` <br> [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `2 - Dias` <br> [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `4 - Data` | Semanas / dias / DPP eco |
| 02.05.01.005-9 | Ultrassonografia doppler de fluxo obstétrico | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `3 - Semanas` <br> [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `2 - Dias` <br> [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `4 - Data` | Semanas / dias / DPP eco |
| 02.02.01.029-5 | Dosagem de colesterol total | ABEX002 | Colesterol total | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | mg/dL |
| 02.02.01.027-9 | Dosagem de colesterol HDL | ABEX007 | HDL | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | mg/dL |
| 02.02.01.028-7 | Dosagem de colesterol LDL | ABEX009 | LDL | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | mg/dL |
| 02.02.01.067-8 | Dosagem de triglicerídeos | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | mg/dL |
| 02.02.01.031-7 | Dosagem de creatinina | ABEX003 | Creatinina | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | mg/dL |
| 02.02.05.002-5 | Clearance de creatinina | - | - | [tipoResultadoExame]({% url dicionario %}#tiporesultadoexame) > `1 - Valor` | mL/min/1,73 m² |
_* Procedimentos pertencentes a competência **11/2025** do SIGTAP._