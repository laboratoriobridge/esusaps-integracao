---
id: principais_alteracoes_dw
title: Principais alterações entre versões
order: 0
parent: dw
---

Este documento relata as principais alterações entre as versões do DW.

#### Principais alterações da v.5.4.22 para a v.5.4.23 do e-SUS APS:

:nr As tabelas relacionadas aos relatórios operacionais serão descontinuadas em versões futuras.

#### Principais alterações da v.5.4.7 para a v.5.4.8 do e-SUS APS:

:nr Inclusão da coluna `co_fat_cidadao_pec` na `tb_acomp_cidadaos_vinculados`.

#### Principais alterações da v.5.4.6 para a v.5.4.7 do e-SUS APS:

:nr Inclusão da tabela `tb_fat_solicitacao_oci`, populada sempre que atendimentos individuais e odontológicos com algum registro de procedimentos do grupo `09 - Procedimento para Oferta de Cuidado Integrado` são processados.

#### Principais alterações da v.5.4.0 para a v.5.4.1 do e-SUS APS:

:nr Inclusão de campos nas `tb_fat_atd_ind_procedimentos`, `tb_fat_atend_odonto_proced` e `tb_fat_atend_odonto_exames`:

- co\_dim\_faixa\_etaria: Código da faixa etária. Campo `co_seq_dim_faixa_etaria` da `tb_dim_faixa_etaria`;
- dt\_inicial\_atendimento: Data e hora do início do atendimento no formato "YYYY-MM-DD HH:MM:SS.MMM";
- co\_dim\_tipo\_atendimento: Código do tipo de atendimento. Campo `co_seq_dim_tipo_atendimento` da `tb_dim_tipo_atendimento`;
- co\_dim\_turno: Código do turno do atendimento. Campo `co_seq_dim_turno` da `tb_dim_turno`;
- co\_dim\_sexo: Código do sexo. Campo `co_seq_dim_faixa_sexo` da `tb_dim_sexo`.

#### Principais alterações da v.5.3.25 para a v.5.3.26 do e-SUS APS:

:nr Inclusão de campos na `tb_acomp_cidadaos_vinculados`:

- co\_cds\_domicilio: Código identificador do domicílio ao qual o cidadão está vinculado;
- ds\_tipo\_localizacao\_domicilio: Descrição da Localização definida no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado;
- no\_raca\_cor: Nome da :link[Raça/Cor]{id=dicionario anchor=racacor} do cidadão.

#### Principais alterações da v.5.3.20 para a v.5.3.21 do e-SUS APS:

:nr Inclusão da tabela `tb_dim_grau_vulnerabilidade`:

- co\_seq\_dim\_grau\_vulnerabilidade: Código de identificação sequencial;
- nu\_identificador: Identificador único do grau de vulnerabilidade;
- ds\_grau: Descrição do grau de vulnerabilidade.


#### Principais alterações da v.5.3.14 para a v.5.3.15 do e-SUS APS:

:nr Inclusão da tabela `tb_dim_situacao_problema`, contendo todas as possíveis situações que podem ser preenchidas na lista de problemas e condições.

:nr Renomeação da tabela `tb_fat_atend_dom_condicao_aval` para `tb_fat_atend_dom_prob_cond`.

:nr Inclusão de novos campos nas tabelas de fato `tb_fat_atd_ind_problemas`, `tb_fat_atend_odonto_problemas` e `tb_fat_atend_dom_prob_cond`:

- nu\_uuid\_problema: Código identificador único do problema ou condição;
- co\_unico\_evolucao: Código identificador único da evolução do problema ou condição;
- co\_sequencial\_evolucao: Código sequencial da evolução dentro do próprio problema e condição atual;
- co\_dim\_situacao: Código da `tb_dim_situacao_problema` referente a situação do problema ou condição;
- co\_dim\_data\_inicio\_problema: Código da `tb_dim_tempo` referente a data de inicio do problema ou condição;
- co\_dim\_data\_fim\_problema: Código da `tb_dim_tempo` referente a data de finalização do problema ou condição;
- st\_avaliado: Indicador se o problema ou condição foi avaliado durante o atendimento.

:nr Inclusão de novos campos nas tabelas de fato `tb_fat_atd_ind_medicamentos` e `tb_fat_atend_odonto_medicamentos`:

- qt\_dose\_manha;
- qt\_dose\_tarde;
- qt\_dose\_noite.

#### Principais alterações da v.5.3.6 para a v.5.3.7 do e-SUS APS:

:nr Inclusão de novos campos nas tabelas de fato `tb_fat_atendimento_individual`, `tb_fat_proced_atend` e `tb_fat_atendimento_odonto`:

- nu\_medicao\_circ\_abdominal: Circunferência abdominal do cidadão em centímetros;
- nu\_medicao\_perim\_pantrlha: Perímetro da panturrilha do cidadão em centímetros;
- nu\_medicao\_pressao\_sistolica: Pressão arterial sistólica do cidadão em mmHg;
- nu\_medicao\_pressao\_diastolica: Pressão arterial diastólica do cidadão em mmHg;
- nu\_medicao\_freq\_respiratoria: Frequência respiratória do cidadão em MPM;
- nu\_medicao\_freq\_cardiaca: Frequência cardíaca do cidadão em BPM;
- nu\_medicao\_temperatura: Temperatura do cidadão em ºC;
- nu\_medicao\_saturacao\_o2: Saturação de oxigênio do cidadão em percentual;
- nu\_medicao\_glicemia: Glicemia capilar do cidadão em mg/dL;
- co\_dim\_tipo\_glicemia: Momento da coleta da glicemia capilar;
- nu\_peso: Peso do cidadão em quilogramas;
- nu\_altura: Altura do cidadão em centímetros;
- nu\_perimetro\_cefalico: Perímetro cefálico do cidadão em centímetros.

#### Principais alterações da v.5.2.36 para a v.5.2.37 do e-SUS APS:

:nr Inclusão do detalhamento dos fatos:

- :link{id=RF-EDW.atendimento_individual};
- :link{id=RF-EDW.procedimentos}.

#### Principais alterações da v5.2.33 para a v.5.2.34 do e-SUS APS:

:nr Inclusão da seção de :link{id=RF-EDW.visualizacoes}, com a nova :link{id=RF-EDW.acomp_cidadaos_vinculados}.

#### Principais alterações da v5.2.16 para a v.5.2.17 do e-SUS APS:

:nr No contexto de :link{id=RF-EDW.cuidado_compartilhado} foram incluídas as estruturas de dados para registro da informação do cuidado compartilhado. Esta informação está armazenada na tabela: `tb_fat_cuidado_compartilhado`.

:nr Para contextualizar as informações da tabela `tb_fat_cuidado_compartilhado`, foram criadas as seguintes tabelas de dimensão: `tb_dim_conduta_cuidado`e `tb_dim_prioridade_cuidado`.

:nr Inclusão do tipo de ficha "ESUS PEC Cuidado compartilhado" na `tb_dim_tipo_ficha`.

#### Principais alterações da v5.2.4 para a v.5.2.5 do e-SUS APS:

:nr{reset=true} Inclusão da tabela de dimensões referente ao vínculo entre equipes: `tb_dim_vinculacao_equipes`.

#### Principais alterações da v4.2.1 para a v4.2.3:

:nr{reset=true} No contexto de :link{id=RF-EDW.procedimentos} foram incluídos os campos `nu_peso` e `nu_altura`.

:nr No contexto de :link{id=RF-EDW.atendimento_odontologico_individual} foram incluídos os campos `nu_peso` e `nu_altura`.

#### Principais alterações da v4.2.0 para a v4.2.1:

:nr{reset=true} No contexto de :link{id=RF-EDW.cadastro_individual} foi incluído o campo `co_dim_povo_comunidade_tradicional`. Além deste campo, também foi criada a tabela de dimensão :link[tb\_dim\_povo\_comunidade\_tradicional]{id=RF-EDW.dim_povo_comunidad_trad}.

#### Principais alterações da v4.1.4 para a v4.2.0:

:nr{reset=true} No contexto de :link{id=RF-EDW.atendimento_individual} e :link{id=RF-EDW.atendimento_odontologico_individual} foram incluídas as estruturas de dados para registro das informações de resultados de exames. Estas informações estão armazenadas nas tabelas:

- `tb_fat_atd_ind_exames`;
- `tb_fat_atend_odonto_exames`.

:nr No contexto de :link{id=RF-EDW.cadastro_domiciliar} foram incluídos os campos `nu_latitude` e `nu_longitude`.

:nr No contexto de :link{id=RF-EDW.visita_domiciliar} foram incluídos os campos `nu_latitude`, `nu_longitude` e `co_uuid_origem_fcd`.

:nr No contexto de :link{id=RF-EDW.vacinacao} foram incluídos os campos `st_registro_anterior` e `co_dim_tempo_vacina_aplicada`.

#### Principais alterações da v4.1.2 para a v4.1.4:

:nr{reset=true} No contexto de :link{id=RF-EDW.vacinacao} foram incluídas as estruturas de dados para registro da informação de grupo de atendimento. Esta informação está armazenada na tabela: `tb_fat_vacinacao_vacina`.

:nr Para contextualizar as informações da tabela `tb_fat_vacinacao_vacina`, foi criada a seguinte tabela de dimensão: `tb_dim_grupo_atendimento`.

#### 14. Principais alterações da v4.0.0 para a v4.1.2:

:nr{reset=true} No contexto de :link{id=RF-EDW.atendimento_individual} foram incluídas as estruturas de dados para registro das informações de prescrição de medicamentos e encaminhamentos. Estas informações estão armazenadas nas tabelas:

- `tb_fat_atd_ind_medicamentos`;
- `tb_fat_atd_ind_encaminhamentos`.

:nr No contexto de :link{id=RF-EDW.atendimento_odontologico_individual} foram incluídas as estruturas de dados para registro das informações de prescrição de medicamentos e encaminhamentos. Estas informações estão armazenadas nas tabelas:

- `tb_fat_atend_odonto_medicamentos`;
- `tb_fat_atend_odonto_encaminhamentos`.

:nr No contexto de :link{id=RF-EDW.visita_domiciliar} foram adicionados os campos `nu_medicao_pressao_arterial`, `nu_medicao_temperatura`, `co_dim_tipo_glicemia` e `nu_medicao_glicemia`. Além destes campos, também foi criada a tabela de dimensão :link[tb\_dim\_tipo\_glicemia]{id=RF-EDW.dim_tipo_glicemia}.

:nr Para contextualizar as informações das tabelas `tb_fat_atd_ind_medicamentos` e `tb_fat_atend_odonto_medicamentos`, foram criadas as seguintes tabelas de dimensões:

- :link[tb\_dim\_catmat]{id=RF-EDW.dim_catmat};
- :link[tb\_dim\_via\_administracao]{id=RF-EDW.dim_via_administracao};
- :link[tb\_dim\_dose\_frequencia]{id=RF-EDW.dim_dose_frequencia};
- :link[tb\_dim\_dose\_frequencia\_medida]{id=RF-EDW.dim_dose_frequencia_medida};
- :link[tb\_dim\_duracao\_tratamento\_med]{id=RF-EDW.dim_duracao_tratamento_med}.

:nr Para contextualizar as informações das tabelas `tb_fat_atd_ind_encaminhamentos` e `tb_fat_atend_odonto_encaminhamentos`, foram criadas as seguintes tabelas de dimensões:

- :link[tb\_dim\_especialidade]{id=RF-EDW.dim_especialidade};
- :link[tb\_dim\_classificacao\_risc\_enc]{id=RF-EDW.dim_classificacao_risc_enc}.
