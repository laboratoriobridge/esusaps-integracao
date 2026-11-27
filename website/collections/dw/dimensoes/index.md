---
id: RF-EDW.dimensoes
title: Dimensões
order: 3
parent: dw
---

## 1. Objetivo

O nome das tabelas de **Dimensão** é formado pelo prefixo `tb_dim_` seguido do nome da respectiva dimensão, por exemplo: `tb_dim_racionalidade_saude`. As tabelas de dimensão auxiliam na organização da estrutura dos dados dos fatos e podem ser usadas para construir relatórios dinâmicos. 

Apesar de apresentarem uma relação profunda com as tabelas de domínio do :link[Dicionário de dados do LEDI]{id=dicionario} as tabelas de dimensão também apresentam valores legados que podem não constar mais na versão atual do mesmo. Além disso, os códigos identificadores de cada opção podem não corresponder aos códigos utilizados no LEDI, necessitando, portando, mapeamento cuidadoso nas eventuais consultas realizadas.

As tabelas de dimensão são divididas da seguinte forma:

- Tabelas com o objetivo de organizar a estrutura dos relatórios do sistema e-SUS APS PEC:

    - :link{id=RF-EDW.dim_agrupador_filtro};
    - :link{id=RF-EDW.dim_cidadao_pec_grupo};
    - :link{id=RF-EDW.dim_grupo_cbo};
    - :link{id=RF-EDW.dim_tempo}.

- Tabelas com objetivo de apresentar as informações que darão sentido aos identificadores existentes nas tabelas **Fatos** ou outras tabelas **Dimensão**:

    - :link{id=RF-EDW.dim_aleitamento};
    - :link{id=RF-EDW.dim_catmat};
    - :link{id=RF-EDW.dim_cbo};
    - :link{id=RF-EDW.dim_ciap};
    - :link{id=RF-EDW.dim_cid};
    - :link{id=RF-EDW.dim_classificacao_risc_enc};
    - :link{id=RF-EDW.dim_conduta_ad};
    - :link{id=RF-EDW.dim_conduta_cuidado};
    - :link{id=RF-EDW.dim_cuidador};
    - :link{id=RF-EDW.dim_desfecho_visita};
    - :link{id=RF-EDW.dim_dose_frequencia};
    - :link{id=RF-EDW.dim_dose_frequencia_medida};
    - :link{id=RF-EDW.dim_dose_imunobiologico};
    - :link{id=RF-EDW.dim_duracao_tratamento_med};
    - :link{id=RF-EDW.dim_equipe};
    - :link{id=RF-EDW.dim_especialidade};
    - :link{id=RF-EDW.dim_estrategia_vacinacao};
    - :link{id=RF-EDW.dim_etnia};
    - :link{id=RF-EDW.dim_faixa_etaria};
    - :link{id=RF-EDW.dim_forma_farmaceutica};
    - :link{id=RF-EDW.dim_frequencia_alimentacao};
    - :link{id=RF-EDW.dim_grau_vulnerabilidade_ivcf};
    - :link{id=RF-EDW.dim_grupo_atendimento};
    - :link{id=RF-EDW.dim_identidade_genero};
    - :link{id=RF-EDW.dim_imunobiologico};
    - :link{id=RF-EDW.dim_inep};
    - :link{id=RF-EDW.dim_local_atendimento};
    - :link{id=RF-EDW.dim_modalidade_ad};
    - :link{id=RF-EDW.dim_municipio};
    - :link{id=RF-EDW.dim_nacionalidade};
    - :link{id=RF-EDW.dim_pais};
    - :link{id=RF-EDW.dim_pic};
    - :link{id=RF-EDW.dim_povo_comunidad_trad};
    - :link{id=RF-EDW.dim_prioridade_cuidado};
    - :link{id=RF-EDW.dim_procedencia_origem};
    - :link{id=RF-EDW.dim_procedimento};
    - :link{id=RF-EDW.dim_profissional};
    - :link{id=RF-EDW.dim_raca_cor};
    - :link{id=RF-EDW.dim_racionalidade_saude};
    - :link{id=RF-EDW.dim_sexo};
    - :link{id=RF-EDW.dim_situacao_problema};
    - :link{id=RF-EDW.dim_situacao_trabalho};
    - :link{id=RF-EDW.dim_tempo_morador_rua};
    - :link{id=RF-EDW.dim_tempo_socioeducativo};
    - :link{id=RF-EDW.dim_tipo_abastecimento_agua};
    - :link{id=RF-EDW.dim_tipo_acesso_domicilio};
    - :link{id=RF-EDW.dim_tipo_atendimento};
    - :link{id=RF-EDW.dim_tipo_atividade};
    - :link{id=RF-EDW.dim_tipo_condicao_peso};
    - :link{id=RF-EDW.dim_tipo_consulta_odonto};
    - :link{id=RF-EDW.dim_tipo_destino_lixo};
    - :link{id=RF-EDW.dim_tipo_domicilio};
    - :link{id=RF-EDW.dim_tipo_elegibilidade};
    - :link{id=RF-EDW.dim_tipo_endereco};
    - :link{id=RF-EDW.dim_tipo_escoamento_sanitar};
    - :link{id=RF-EDW.dim_tipo_escolaridade};
    - :link{id=RF-EDW.dim_tipo_ficha};
    - :link{id=RF-EDW.dim_tipo_imovel};
    - :link{id=RF-EDW.dim_tipo_localizacao};
    - :link{id=RF-EDW.dim_tipo_logradouro};
    - :link{id=RF-EDW.dim_tipo_material_parede};
    - :link{id=RF-EDW.dim_tipo_orientacao_sexual};
    - :link{id=RF-EDW.dim_tipo_origem};
    - :link{id=RF-EDW.dim_tipo_origem_dado_transp};
    - :link{id=RF-EDW.dim_tipo_origem_energ_elet};
    - :link{id=RF-EDW.dim_tipo_parentesco};
    - :link{id=RF-EDW.dim_tipo_posse_terra};
    - :link{id=RF-EDW.dim_tipo_renda_familiar};
    - :link{id=RF-EDW.dim_tipo_sanguineo};
    - :link{id=RF-EDW.dim_tipo_saida_cadastro};
    - :link{id=RF-EDW.dim_tipo_situacao_moradia};
    - :link{id=RF-EDW.dim_tipo_socioeducativo};
    - :link{id=RF-EDW.dim_tipo_tratamento_agua};
    - :link{id=RF-EDW.dim_turno};
    - :link{id=RF-EDW.dim_uf};
    - :link{id=RF-EDW.dim_unidade_saude};
    - :link{id=RF-EDW.dim_aldeia};
    - :link{id=RF-EDW.dim_condicao_maternal};
    - :link{id=RF-EDW.dim_estado_civil};
    - :link{id=RF-EDW.dim_just_nao_possui_cpf};
    - :link{id=RF-EDW.dim_local_apl_vacina};
    - :link{id=RF-EDW.dim_via_adm_vacina};
    - :link{id=RF-EDW.dim_tipo_glicemia};
    - :link{id=RF-EDW.dim_via_administracao};
    - :link{id=RF-EDW.dim_vinculacao_equipes}.

## Anexo 1 - Tabelas complementares

O anexo 1 apresenta as tabelas dimensão pertencentes a estrutura do Data Warehouse que não estão definidas no :link{id=ledi}.

### Tabela tb\_dim\_tipo\_origem

| Identificador | Descrição | Observações |
|------- | --------- | ----------- |
| - | Não informado | - |
| 0 | Offline | A origem da informação é de um sistema de CDS que opera em modo Offline (CDS Offline) |
| 1 | Online | A origem da informação é de um sistema de CDS que opera em modo Online (e-SUS APS CDS) |
| 2 | PEC | A origem da informação é de um sistema de prontuário eletrônico (e-SUS APS PEC) |
| 3 | Externo | A origem da informação é de um sistema terceiro e foi importado no e-SUS APS PEC através do :link[LEDI]{id=ledi} |
| 4 | Android_ACS | A origem da informação é de um aplicativo e-SUS Território que está integrado ao e-SUS APS PEC |
| 5 | Android_AC | A origem da informação é de um aplicativo e-SUS Atividade Coletiva que está integrado ao e-SUS APS PEC |
| 6 | APP_VACINACAO | A origem da informação é de um aplicativo e-SUS Vacinação que está integrado ao e-SUS APS PEC |

### Tabela tb\_dim\_faixa\_etaria

| Identificador | Descrição | Observações |
| ------------- | --------- | ----------- |
| - | Não informado | - |
| 1 | Menos de 01 ano | Até 11 meses e 29 dias |
| 2 | 01 ano | De 1 ano, 0 meses e 0 dias até 1 ano, 11 meses e 29 dias |
| 3 | 02 anos | De 2 anos, 0 meses e 0 dias até 2 anos, 11 meses e 29 dias |
| 4 | 03 anos | De 3 anos, 0 meses e 0 dias até 3 anos, 11 meses e 29 dias |
| 5 | 04 anos | De 4 anos, 0 meses e 0 dias até 4 anos, 11 meses e 29 dias |
| 6 | 05 a 09 anos | De 5 anos, 0 meses e 0 dias até 9 anos, 11 meses e 29 dias |
| 7 | 10 a 14 anos | De 10 anos, 0 meses e 0 dias até 14 anos, 11 meses e 29 dias |
| 8 | 15 a 19 anos | De 15 anos, 0 meses e 0 dias até 19 anos, 11 meses e 29 dias |
| 9 | 20 a 24 anos | De 20 anos, 0 meses e 0 dias até 24 anos, 11 meses e 29 dias |
| 10 | 25 a 29 anos | De 25 anos, 0 meses e 0 dias até 29 anos, 11 meses e 29 dias |
| 11 | 30 a 34 anos | De 30 anos, 0 meses e 0 dias até 34 anos, 11 meses e 29 dias |
| 12 | 35 a 39 anos | De 35 anos, 0 meses e 0 dias até 39 anos, 11 meses e 29 dias |
| 13 | 40 a 44 anos | De 40 anos, 0 meses e 0 dias até 44 anos, 11 meses e 29 dias |
| 14 | 45 a 49 anos | De 45 anos, 0 meses e 0 dias até 49 anos, 11 meses e 29 dias |
| 15 | 50 a 54 anos | De 50 anos, 0 meses e 0 dias até 54 anos, 11 meses e 29 dias |
| 16 | 55 a 59 anos | De 55 anos, 0 meses e 0 dias até 59 anos, 11 meses e 29 dias |
| 17 | 60 a 64 anos | De 60 anos, 0 meses e 0 dias até 64 anos, 11 meses e 29 dias |
| 18 | 65 a 69 anos | De 65 anos, 0 meses e 0 dias até 69 anos, 11 meses e 29 dias |
| 19 | 70 a 74 anos | De 70 anos, 0 meses e 0 dias até 74 anos, 11 meses e 29 dias |
| 20 | 75 a 79 anos | De 75 anos, 0 meses e 0 dias até 79 anos, 11 meses e 29 dias |
| 21 | 80 anos ou mais | 80 anos, 0 meses e 0 dias ou superior |

### Tabela tb\_dim\_tipo\_origem\_dado\_transp

| Identificador | Descrição | Observações |
|-------------- | --------- | ----------- |
| - | Não informado | - |
| 1 | Criado local | A própria aplicação foi quem gerou este dado |
| 2 | Recebido online | Transmitido de outro e-SUS APS PEC para esta aplicação |
| 3 | Importado de arquivo (zip) | Pode ter sido gerado por qualquer sistema e importado conforme definido no :link[LEDI]{id=ledi} |
| 4 | Originado em versão anterior à 1.3.00 | Dados gerados por qualquer sistema e-SUS APS cuja versão era inferior à 1.3.00 |
| 5 | ACS | Transmitido de um aplicativo e-SUS Território para esta aplicação |
| 6 | AC | Transmitido de um aplicativo e-SUS Atividade Coletiva para esta aplicação |
| 7 | e-SUS Vacinação | Transmitido de um aplicativo e-SUS Vacinação para esta aplicação |
| 8 | Recebido online externo | Recebido via API por qualquer sistema e importado conforme definido no :link[LEDI]{id=ledi} |

