---
id: RF-EDW.tb_fat_visita_domiciliar
title: Tabela fato de visita domiciliar
order: 0
parent: RF-EDW.visita_domiciliar
---

## 1. Objetivo

A tabela `tb_fat_visita_domiciliar` é populada sempre que os dados de uma :link[Visita Domiciliar]{id=dicionario-fvd} são processados.

## 2. Regras

:nr A `tb_fat_visita_domiciliar` é preenchida quando são processadas:

- Fichas de visita domiciliar recebidas através da importação de sistemas terceiros ou outras instalações do PEC e-SUS-APS;
- Registro de uma visita domiciliar pelo ACS no CDS;
- Registro de uma visita domiciliar no aplicativo e-SUS Território.

## 3. Fatos

### 3.1 Metadados dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_visita\_domiciliar | - | Código de identificação sequencial criado automaticamente pelo sistema |
| nu\_uuid\_ficha | :link[uuidFicha]{id=dicionario-fvd anchor=1-uuidficha} | Identificador universalmente único do registro |
| nu\_uuid\_dado\_transp | :link[uuidDadoSerializado]{id=camada-transporte anchor=1-uuiddadoserializado} | Identificador universalmente único da camada de transporte de dados. Caso o registro seja gerado dentro do PEC terá o mesmo valor do campo nu\_uuid\_ficha |
| nu\_prontuario | :link[numProntuario]{id=dicionario-fvd anchor=2-numprontuario} | Número do prontuário criptografado |
| nu\_cns | :link[cnsCidadao]{id=dicionario-fvd anchor=3-cnscidadao} | CNS do cidadão |
| nu\_cpf\_cidadao | :link[cpfCidadao]{id=dicionario-fvd anchor=14-cpfcidadao} | CPF do cidadão |
| co\_fat\_cidadao\_pec | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| co\_uuid\_origem\_fcd | :link[uuidOrigemCadastroDomiciliar]{id=dicionario-fvd anchor=22-uuidorigemcadastrodomiciliar} | Armazena o UUID do domicílio que recebeu a visita. Corresponde ao campo `nu_uuid_ficha_origem` da `tb_fat_cad_domiciliar` |

### 3.2 Métricas dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| nu\_micro\_area | :link[microarea]{id=dicionario-fvd anchor=9-microarea} | Número da microárea onde o domicílio está localizado |
| dt\_nascimento | :link[dtNascimento]{id=dicionario-fvd anchor=4-dtnascimento} | Data de nascimento do cidadão |
| nu\_peso | :link[pesoAcompanhamentoNutricional]{id=dicionario-fvd anchor=12-pesoacompanhamentonutricional} | Peso do cidadão em quilogramas |
| nu\_altura | :link[alturaAcompanhamentoNutricional]{id=dicionario-fvd anchor=13-alturaacompanhamentonutricional} | Altura do cidadão em centímetros |
| st\_visita\_compartilhada | :link[statusVisitaCompartilhadaOutroProfissional]{id=dicionario-fvd anchor=6-statusvisitacompartilhadaoutroprofissional} | Status que indica se a visita foi realizada de forma compartilhada |
| st\_mot\_vis\_cad\_att | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica se o motivo da visita foi atualização/cadastramento |
| st\_mot\_vis\_visita\_periodica | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica se o motivo da visita foi visita periódica |
| st\_mot\_vis\_egresso\_internacao | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica se o motivo da visita foi egresso de internação |
| st\_mot\_vis\_convte\_atvidd\_cltva | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica se o motivo da visita foi convite para atividade coletiva |
| st\_mot\_vis\_orintacao\_prevncao | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica se o motivo da visita foi orientação/prevenção |
| st\_mot\_vis\_outros | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica se o motivo da visita foi outros |
| st\_mot\_vis\_busca\_ativa | - | Agrupador — indica se alguma opção do grupo **Busca ativa** foi selecionada |
| st\_mot\_vis\_acompanhamento | - | Agrupador — indica se alguma opção do grupo **Acompanhamento** foi selecionada |
| st\_mot\_vis\_ctrl\_ambnte\_vetor | - | Agrupador — indica se alguma opção do grupo **Controle ambiental / vetorial** foi selecionada. Até a versão 2.0 esta opção era única; a partir da versão 2.1 passou a ser um agrupador |
| st\_busca\_ativa\_consulta | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica busca ativa para consulta |
| st\_busca\_ativa\_exame | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica busca ativa para exame |
| st\_busca\_ativa\_vacina | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica busca ativa para vacinação |
| st\_busca\_ativa\_bolsa\_familia | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica busca ativa para Bolsa Família |
| st\_acomp\_gestante | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de gestante |
| st\_acomp\_puerpera | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de puérpera |
| st\_acomp\_recem\_nascido | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de recém-nascido |
| st\_acomp\_crianca | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de criança |
| st\_acomp\_pessoa\_desnutricao | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com desnutrição |
| st\_acomp\_pessoa\_reabil\_deficie | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa em reabilitação ou com deficiência |
| st\_acomp\_pessoa\_hipertensao | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com hipertensão arterial |
| st\_acomp\_pessoa\_diabetes | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com diabetes |
| st\_acomp\_pessoa\_asma | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com asma |
| st\_acomp\_pessoa\_dpoc\_enfisema | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com DPOC/enfisema |
| st\_acomp\_pessoa\_cancer | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com câncer |
| st\_acomp\_pessoa\_doenca\_cronica | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com outra doença crônica |
| st\_acomp\_pessoa\_hanseniase | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com hanseníase |
| st\_acomp\_pessoa\_tuberculose | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com tuberculose |
| st\_acomp\_sintomaticos\_respirat | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de sintomáticos respiratórios |
| st\_acomp\_tabagista | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de tabagista |
| st\_acomp\_domiciliados\_acamados | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de domiciliados e acamados |
| st\_acomp\_condi\_vulnerab\_social | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa em condição de vulnerabilidade social |
| st\_acomp\_condi\_bolsa\_familia | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de beneficiário do Bolsa Família |
| st\_acomp\_saude\_mental | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa com problema de saúde mental |
| st\_acomp\_usuario\_alcool | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de usuário de álcool |
| st\_acomp\_usuario\_outras\_drogra | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de usuário de outras drogas |
| st\_acomp\_pessoa\_idosa | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica acompanhamento de pessoa idosa |
| st\_ctrl\_amb\_vet\_acao\_educativa | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica controle ambiental/vetorial — ação educativa |
| st\_ctrl\_amb\_vet\_imovel\_foco | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica controle ambiental/vetorial — imóvel com foco |
| st\_ctrl\_amb\_vet\_acao\_mecanica | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica controle ambiental/vetorial — ação mecânica |
| st\_ctrl\_amb\_vet\_tratamnt\_focal | :link[motivosVisita]{id=dicionario-fvd anchor=7-motivosvisita} | Indica controle ambiental/vetorial — tratamento focal |
| nu\_medicao\_glicemia | :link[glicemia]{id=dicionario-fvd anchor=18-glicemia} | Glicemia capilar do cidadão em mg/dL |
| nu\_medicao\_pressao\_arterial | - | Pressão arterial do cidadão em mmHg |
| nu\_medicao\_temperatura | :link[temperatura]{id=dicionario-fvd anchor=17-temperatura} | Temperatura do cidadão em ºC |
| nu\_latitude | :link[latitude]{id=dicionario-fvd anchor=20-latitude} | Latitude da localização do domicílio visitado |
| nu\_longitude | :link[longitude]{id=dicionario-fvd anchor=21-longitude} | Longitude da localização do domicílio visitado |
| st\_processado\_origem\_fcd | - | Indica se o registro foi processado a partir de uma Ficha de Cadastro Domiciliar |

## 4. Dimensões da tabela

| Coluna DW | Dimensão referência |
| --------- | ------------------- |
| co\_dim\_municipio | Código de identificação do município. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_tipo\_ficha | Código de identificação do tipo de ficha. Campo `co_seq_dim_tipo_ficha` da `tb_dim_tipo_ficha` |
| co\_dim\_profissional | Código de identificação do profissional responsável. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_cbo | Código de identificação do CBO profissional responsável. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_unidade\_saude | Código de identificação da unidade de saúde do profissional responsável. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_equipe | Código de identificação da equipe do profissional responsável. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_tempo | Responsável por armazenar as datas de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_turno | Código do turno da visita. Campo `co_seq_dim_turno` da `tb_dim_turno` |
| co\_dim\_tipo\_imovel | Código do tipo de imóvel visitado. Campo `co_seq_dim_tipo_imovel` da `tb_dim_tipo_imovel` |
| co\_dim\_sexo | Código do sexo do cidadão visitado. Campo `co_seq_dim_faixa_sexo` da `tb_dim_sexo` |
| co\_dim\_faixa\_etaria | Código da faixa etária do cidadão visitado. Campo `co_seq_dim_faixa_etaria` da `tb_dim_faixa_etaria` |
| co\_dim\_desfecho\_visita | Código do desfecho da visita. Campo `co_seq_dim_desfecho_visita` da `tb_dim_desfecho_visita` |
| co\_dim\_tipo\_origem\_dado\_transp | Código da origem do dado no transporte. Campo `co_seq_dim_tp_orgm_dado_transp` da `tb_dim_tipo_origem_dado_transp` |
| co\_dim\_cds\_tipo\_origem | Código da origem do dado no transporte. Campo `co_seq_dim_tipo_origem` da `tb_dim_tipo_origem` |
| co\_dim\_tipo\_glicemia | Código do tipo de glicemia capilar. Campo `co_seq_dim_tipo_glicemia` da `tb_dim_tipo_glicemia` |
