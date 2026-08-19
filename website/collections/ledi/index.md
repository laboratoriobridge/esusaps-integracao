---
id: ledi
title: Layout e-SUS APS de Dados e Interface
order: 1
parent: integracao
---

Este documento descreve os atributos utilizados no **LEDI APS**:

- O **LEDI APS** é uma camada abstrata que especifica as informações, e seus formatos, que são aceitos no envio de dados de sistemas próprios para o PEC e-SUS APS;
- O **LEDI APS** pode ser implementado utilizando [XML](https://pt.wikipedia.org/wiki/XML) ou [Apache Thrift](https://en.wikipedia.org/wiki/Apache_Thrift);
- Possui versionamento independente, podendo não corresponder com a respectiva versão do sistema PEC e-SUS APS. A **Tabela 1** apresenta a compatibilidade entre as versões do LEDI APS e do PEC e-SUS APS.

**Tabela 1.** Compatibilidade entre as versões do LEDI APS e PEC e-SUS APS

| Versão PEC e-SUS APS | Versão do LEDI APS compatível                                       | Datas de liberação   |
|----------------------|---------------------------------------------------------------------|----------------------|
| 5.5.21 ou superior   | :link[LEDI APS 8.4.2]{id=layout_ab}                               | 02/07/2026           |
| 5.5.19 ou superior   | :link[LEDI APS 8.4.1]{id=layout_ab}                               | 23/06/2026           |
| 5.5.17 ou superior   | [LEDI APS 8.4.0](https://integracao.esusaps.bridge.ufsc.tech/v840/) | 12/06/2026           |
| 5.4.38 ou superior   | [LEDI APS 7.4.2](https://integracao.esusaps.bridge.ufsc.tech/v742/) | 14/05/2026           |
| 5.4.36 ou superior   | [LEDI APS 7.4.1](https://integracao.esusaps.bridge.ufsc.tech/v741/) | 23/04/2026           |
| 5.4.34 ou superior   | [LEDI APS 7.4.0](https://integracao.esusaps.bridge.ufsc.tech/v740/) | 26/03/2026           |
| 5.4.29 ou superior   | [LEDI APS 7.3.7](https://integracao.esusaps.bridge.ufsc.tech/v737/) | 22/01/2026           |
| 5.4.28 ou superior   | [LEDI APS 7.3.6](https://integracao.esusaps.bridge.ufsc.tech/v736/) | 15/01/2026           |
| 5.4.26 ou superior   | [LEDI APS 7.3.5](https://integracao.esusaps.bridge.ufsc.tech/v735/) | 16/12/2025           |
| 5.4.23 ou superior   | [LEDI APS 7.3.4](https://integracao.esusaps.bridge.ufsc.tech/v734/) | 19/11/2025           |
| 5.4.20 ou superior   | [LEDI APS 7.3.3](https://integracao.esusaps.bridge.ufsc.tech/v733/) | 23/10/2025           |
| 5.4.17 ou superior   | [LEDI APS 7.3.2](https://integracao.esusaps.bridge.ufsc.tech/v732/) | 09/10/2025           |
| 5.4.15 ou superior   | [LEDI APS 7.3.1](https://integracao.esusaps.bridge.ufsc.tech/v731/) | 25/09/2025           |
| 5.4.14 ou superior   | [LEDI APS 7.3.0](https://integracao.esusaps.bridge.ufsc.tech/v730/) | 09/09/2025           |
| 5.4.12 ou superior   | [LEDI APS 7.2.3](https://integracao.esusaps.bridge.ufsc.tech/v723/) | 21/08/2025           |
| 5.4.10 ou superior   | [LEDI APS 7.2.2](https://integracao.esusaps.bridge.ufsc.tech/v722/) | 07/08/2025           |
| 5.4.8 ou superior    | [LEDI APS 7.2.1](https://integracao.esusaps.bridge.ufsc.tech/v721/) | 10/07/2025           |
| 5.4.7 ou superior    | [LEDI APS 7.2.0](https://integracao.esusaps.bridge.ufsc.tech/v720/) | 27/06/2025           |
| 5.3.32 ou superior   | [LEDI APS 6.3.9](https://integracao.esusaps.bridge.ufsc.tech/v639/) | 22/05/2025           |
| 5.3.31 ou superior   | [LEDI APS 6.3.8](https://integracao.esusaps.bridge.ufsc.tech/v638/) | 06/05/2025           |
| 5.3.30 ou superior   | [LEDI APS 6.3.7](https://integracao.esusaps.bridge.ufsc.tech/v637/) | 17/04/2025           |
| 5.3.28 ou superior   | [LEDI APS 6.3.5](https://integracao.esusaps.bridge.ufsc.tech/v635/) | 20/03/2025           |
| 5.3.27 ou superior   | [LEDI APS 6.3.4](https://integracao.esusaps.bridge.ufsc.tech/v634/) | 27/02/2025           |
| 5.3.25 ou superior   | [LEDI APS 6.3.3](https://integracao.esusaps.bridge.ufsc.tech/v633/) | 30/01/2025           |
| 5.3.22 ou superior   | [LEDI APS 6.3.2](https://integracao.esusaps.bridge.ufsc.tech/v632/) | 20/12/2024           |
| 5.3.19 ou superior   | [LEDI APS 6.3.0](https://integracao.esusaps.bridge.ufsc.tech/v630/) | 14/11/2024           |
| 5.3.15 ou superior   | [LEDI APS 6.2.0](https://integracao.esusaps.bridge.ufsc.tech/v620/) | 07/11/2024           |
| 5.2.39 ou superior   | [LEDI APS 5.6.4](https://integracao.esusaps.bridge.ufsc.tech/v564/) | 02/08/2024           |
| 5.2.37 ou superior   | [LEDI APS 5.6.3](https://integracao.esusaps.bridge.ufsc.tech/v563/) | 27/06/2024           |
| 5.2.34 ou superior   | [LEDI APS 5.6.2](https://integracao.esusaps.bridge.ufsc.tech/v562/) | 16/05/2024           |
| 5.2.33 ou superior   | [LEDI APS 5.6.1](https://integracao.esusaps.bridge.ufsc.tech/v561/) | 30/04/2024           |
| 5.2.32 ou superior   | [LEDI APS 5.6.0](https://integracao.esusaps.bridge.ufsc.tech/v560/) | 11/04/2024           |
| 5.2.29 ou superior   | [LEDI APS 5.5.0](https://integracao.esusaps.bridge.ufsc.tech/v550/) | 19/03/2024           |
| 5.2.28 ou superior   | [LEDI APS 5.4.0](https://integracao.esusaps.bridge.ufsc.tech/v540/) | 29/02/2024           |
| 5.2.21 ou superior   | [LEDI APS 5.3.0](https://integracao.esusaps.bridge.ufsc.tech/v530/) | 30/11/2023           |
| 5.2.18 ou superior   | [LEDI APS 5.2.0](https://integracao.esusaps.bridge.ufsc.tech/v520/) | 26/10/2023           |
| 5.1.15 ou superior   | [LEDI APS 5.0.5](https://integracao.esusaps.bridge.ufsc.tech/v505/) | 26/04/2023           |
| 5.1.14 ou superior   | [LEDI APS 5.0.4](https://integracao.esusaps.bridge.ufsc.tech/v504/) | 18/04/2023           |
| 5.0.20 ou superior   | [LEDI APS 4.4.3](https://integracao.esusaps.bridge.ufsc.tech/v443/) | 02/10/2023           |
| 5.0.17 ou superior   | [LEDI APS 4.4.2](https://integracao.esusaps.bridge.ufsc.tech/v442/) | 20/01/2023           |
| 5.0.16 ou superior   | [LEDI APS 4.4.1](https://integracao.esusaps.bridge.ufsc.tech/v441/) | 12/02/2022           |
| 5.0.14 ou superior   | [LEDI APS 4.4.0](https://integracao.esusaps.bridge.ufsc.tech/v440/) | 11/04/2022           |
| 5.0.11 ou superior   | [LEDI APS 4.3.9](https://integracao.esusaps.bridge.ufsc.tech/v439/) | 27/09/2022           |
| 5.0.9 ou superior    | [LEDI APS 4.3.8](https://integracao.esusaps.bridge.ufsc.tech/v438/) | 16/09/2022           |
| 4.5.13 ou superior   | [LEDI APS 4.3.7](https://integracao.esusaps.bridge.ufsc.tech/v437/) | 09/05/2022           |
| 4.5.12 ou superior   | [LEDI APS 4.3.6](https://integracao.esusaps.bridge.ufsc.tech/v436/) | 08/11/2022           |
| 4.5.10 ou superior   | [LEDI APS 4.3.5](https://integracao.esusaps.bridge.ufsc.tech/v435/) | 07/08/2022           |
| 4.5.3 ou superior    | [LEDI APS 4.3.4](https://integracao.esusaps.bridge.ufsc.tech/v434/) | 04/06/2022           |
| 4.3.12 ou superior   | [LEDI APS 4.3.3](https://integracao.esusaps.bridge.ufsc.tech/v433/) | 02/03/2022           |
| 4.3.9 ou superior    | [LEDI APS 4.3.2](https://integracao.esusaps.bridge.ufsc.tech/v432/) | 15/12/2021           |
| 4.3.8 ou superior    | [LEDI APS 4.3.1](https://integracao.esusaps.bridge.ufsc.tech/v431/) | 18/11/2021           |
| 4.2.9 ou superior    | [LEDI APS 4.2.3](https://integracao.esusaps.bridge.ufsc.tech/v423/) | 24/09/2021           |
| 4.2.6 ou superior    | [LEDI APS 4.2.1](https://integracao.esusaps.bridge.ufsc.tech/v421/) | 28/06/2021           |
| 4.2.1 ou superior    | [LEDI APS 4.2.0](https://integracao.esusaps.bridge.ufsc.tech/v420/) | 28/04/2021           |
| 4.1.10 ou superior   | [LEDI APS 4.1.4](https://integracao.esusaps.bridge.ufsc.tech/v414/) | 23/02/2021           |
| 4.1.8 ou superior    | [LEDI APS 4.1.3](https://integracao.esusaps.bridge.ufsc.tech/v413/) | 29/01/2021           |
| 4.1.7 ou superior    | [LEDI APS 4.1.2](https://integracao.esusaps.bridge.ufsc.tech/v412/) | 19/01/2021           |
| 4.0.16 ou superior   | [LEDI APS 4.0.4](https://integracao.esusaps.bridge.ufsc.tech/v404/) | 01/08/2021           |
| 4.0.12 ou superior   | [LEDI APS 4.0.3](https://integracao.esusaps.bridge.ufsc.tech/v403/) | 23/10/2020           |
| 4.0.11 ou superior   | [LEDI APS 4.0.2](https://integracao.esusaps.bridge.ufsc.tech/v402/) | 23/10/2020           |
| 3.2.25 ou superior   | [LEDI APS 4.0.1](https://integracao.esusaps.bridge.ufsc.tech/v401/) | 06/09/2020           |
| 3.2.23 ou superior   | [LEDI APS 4.0.0](https://integracao.esusaps.bridge.ufsc.tech/v400/) | 26/03/2020           |
| 3.2.20 ou superior   | [LEDI APS 3.2.4](https://integracao.esusaps.bridge.ufsc.tech/v324/) | 20/12/2019           |
| 3.2.18 ou superior   | [LEDI APS 3.2.2](https://integracao.esusaps.bridge.ufsc.tech/v322/) | 29/10/2019           |
| 3.2.12 ou superior   | [LEDI APS 3.2.1](https://integracao.esusaps.bridge.ufsc.tech/v321/) | 22/07/2019           |
| 3.0.13 ou superior   | [LEDI APS 3.0.1](https://integracao.esusaps.bridge.ufsc.tech/v301/) | 16/10/2018           |
| 3.0.00 ou superior   | [LEDI APS 3.0.0](https://integracao.esusaps.bridge.ufsc.tech/v300/) | 19/01/2018           |
| 2.2.00 ou superior   | [LEDI APS 2.2.0](https://integracao.esusaps.bridge.ufsc.tech/v220/) | 19/05/2017           |
| 2.1.07 ou superior   | [LEDI APS 2.1.1](https://integracao.esusaps.bridge.ufsc.tech/v211/) | 13/12/2016           |
| 2.1.00 ou superior   | [LEDI APS 2.1.0](https://integracao.esusaps.bridge.ufsc.tech/v210/) | 22/08/2016           |
| 2.0.00 ou superior   | [LEDI APS 2.0.0](https://integracao.esusaps.bridge.ufsc.tech/v20/)  | 21/07/2015           |
