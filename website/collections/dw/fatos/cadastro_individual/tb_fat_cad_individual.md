---
id: RF-EDW.tb_fat_cad_individual
title: Tabela fato do cadastro individual
order: 0
parent: RF-EDW.cadastro_individual
---

## 1. Objetivo

A tabela `tb_fat_cad_individual` é populada sempre que os dados de um :link[Cadastro Individual do Cidadão]{id=dicionario-fci} são processados.

## 2. Regras

:nr A `tb_fat_cad_individual` é preenchida quando são processado(a)s:

- Fichas de cadastro individual recebidas através da importação de sistemas terceiros,  outras instalações do PEC e-SUS-APS ou aplicativo e-SUS Território;
- Registro da criação de um cadastro individual no CDS ou no módulo Cadastro individual,
- Registro de atualização de um cadastro individual no CDS, módulo de Cadastro individual, Acompanhamento do Território, Reterritorialização ou Unificação de prontuários.

## 3. Fatos

### 3.1 Metadados dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_cad\_individual | - | Código de identificação sequencial criado automaticamente pelo sistema |
| nu\_uuid\_ficha | :link[uuid]{id=dicionario-fci anchor=9-uuid} | Identificador universalmente único do registro |
| nu\_uuid\_ficha\_origem | :link[uuidFichaOriginadora]{id=dicionario-fci anchor=10-uuidfichaoriginadora} | Identificador universalmente único da ficha de origem do cadastro |
| nu\_uuid\_dado\_transp | :link[uuidDadoSerializado]{id=camada-transporte anchor=1-uuiddadoserializado} | Identificador universalmente único da camada de transporte de dados. Caso o registro seja gerado dentro do PEC terá o mesmo valor do campo nu\_uuid\_ficha |
| nu\_cns | :link[cnsCidadao]{id=dicionario-fci anchor=9-cnscidadao} | CNS do cidadão |
| nu\_cpf\_cidadao | :link[cpfCidadao]{id=dicionario-fci anchor=25-cpfcidadao} | CPF do cidadão criptografado |
| nu\_cpf\_responsavel | :link[cpfResponsavelFamiliar]{id=dicionario-fci anchor=26-cpfresponsavelfamiliar} | CPF do responsável familiar criptografado |
| nu\_cns\_responsavel | :link[cnsResponsavelFamiliar]{id=dicionario-fci anchor=10-cnsresponsavelfamiliar} | CNS do responsável familiar |
| co\_fat\_cidadao\_pec | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| co\_fat\_cidadao\_pec\_responsvl | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` referente ao responsável familiar |

### 3.2 Métricas dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| st\_recusa\_cadastro | :link[statusTermoRecusaCadastroIndividualAtencaoBasica]{id=dicionario-fci anchor=7-statustermorecusacadastroindividualatencaobasica} | Status que indica se o cidadão recusou o cadastro |
| dt\_nascimento | :link[dataNascimentoCidadao]{id=dicionario-fci anchor=3-datanascimentocidadao} | Data de nascimento do cidadão |
| st\_desconhece\_mae | :link[desconheceNomeMae]{id=dicionario-fci anchor=4-desconhecenomemae} | Status que indica se não há identificação da mãe do cidadão |
| st\_desconhece\_pai | :link[desconheceNomePai]{id=dicionario-fci anchor=19-desconhecenomepai} | Status que indica se não há identificação do pai do cidadão |
| st\_responsavel\_familiar | :link[statusEhResponsavel]{id=dicionario-fci anchor=16-statusehresponsavel} | Status que indica se o cidadão é o responsável familiar |
| st\_gestante | :link[statusEhGestante]{id=dicionario-fci anchor=14-statusehgestante} | Status que indica se a cidadã está gestante |
| st\_deficiencia | :link[statusTemAlgumaDeficiencia]{id=dicionario-fci anchor=14-statustemalgumadeficiencia} | Status que indica se o cidadão tem alguma deficiência |
| st\_defi\_auditiva <br /> st\_defi\_intelectual\_cognitiva <br /> st\_defi\_outra <br /> st\_defi\_visual <br /> st\_defi\_fisica | :link[deficienciasCidadao]{id=dicionario-fci anchor=1-deficienciascidadao} | Indica o(s) tipo(s) de deficiência do cidadão |
| st\_defi\_tea | - | Indica se o cidadão possui Transtorno do Espectro Autista (TEA) |
| st\_fumante | :link[statusEhFumante]{id=dicionario-fci anchor=13-statusehfumante} | Status que indica se o cidadão é fumante |
| st\_alcool | :link[statusEhDependenteAlcool]{id=dicionario-fci anchor=11-statusehdependentealcool} | Status que indica se o cidadão usa álcool |
| st\_outra\_droga | :link[statusEhDependenteOutrasDrogas]{id=dicionario-fci anchor=12-statusehdependenteoutrasdrogas} | Status que indica se o cidadão usa outras drogas |
| st\_hipertensao\_arterial | :link[statusTemHipertensaoArterial]{id=dicionario-fci anchor=20-statustemhipertensaoarterial} | Status que indica se o cidadão tem hipertensão arterial |
| st\_diabete | :link[statusTemDiabetes]{id=dicionario-fci anchor=17-statustemdiabetes} | Status que indica se o cidadão tem diabetes |
| st\_avc | :link[statusTeveAvcDerrame]{id=dicionario-fci anchor=24-statusteveavcderrame} | Status que indica se o cidadão já teve AVC/derrame |
| st\_infarto | :link[statusTeveInfarto]{id=dicionario-fci anchor=26-statusteveinfarto} | Status que indica se o cidadão já teve infarto |
| st\_hanseniase | :link[statusTemHanseniase]{id=dicionario-fci anchor=19-statustemhanseniase} | Status que indica se o cidadão tem hanseníase |
| st\_tuberculose | :link[statusTemTuberculose]{id=dicionario-fci anchor=23-statustemtuberculose} | Status que indica se o cidadão tem tuberculose |
| st\_cancer | :link[statusTemTeveCancer]{id=dicionario-fci anchor=21-statustemtevecancer} | Status que indica se o cidadão tem câncer |
| st\_internacao\_12 | :link[statusTeveInternadoem12Meses]{id=dicionario-fci anchor=27-statusteveinternadoem12meses} | Status que indica se o cidadão esteve internado nos últimos 12 meses |
| st\_tratamento\_psiquiatra | :link[statusDiagnosticoMental]{id=dicionario-fci anchor=30-statusdiagnosticomental} | Status que indica se o cidadão está em tratamento psiquiátrico |
| st\_acamado | :link[statusEstaAcamado]{id=dicionario-fci anchor=15-statusestaacamado} | Status que indica se o cidadão está acamado |
| st\_domiciliado | :link[statusEstaDomiciliado]{id=dicionario-fci anchor=16-statusestadomiciliado} | Status que indica se o cidadão está domiciliado |
| st\_usa\_planta\_medicinal | :link[statusUsaPlantasMedicinais]{id=dicionario-fci anchor=29-statususaplantasmedicinais} | Status que indica se o cidadão usa plantas medicinais |
| st\_doenca\_cardiaca | :link[statusTeveDoencaCardiaca]{id=dicionario-fci anchor=25-statustevedoencacardiaca} | Status que indica se o cidadão tem doença cardíaca |
| st\_doenca\_card\_insuficiencia <br /> st\_doenca\_card\_outro <br /> st\_doenca\_card\_n\_sabe | :link[doencaCardiaca]{id=dicionario-fci anchor=6-doencacardiaca} | Indica o(s) tipo(s) de doença cardíaca do cidadão |
| st\_doenca\_respiratoria | :link[statusTemDoencaRespiratoria]{id=dicionario-fci anchor=18-statustemdoencarespiratoria} | Status que indica se o cidadão tem doença respiratória |
| st\_doenca\_respira\_asma <br /> st\_doenca\_respira\_dpoc\_enfisem <br /> st\_doenca\_respira\_outra <br /> st\_doenca\_respira\_n\_sabe | :link[doencaRespiratoria]{id=dicionario-fci anchor=7-doencarespiratoria} | Indica o(s) tipo(s) de doença respiratória do cidadão |
| st\_problema\_rins | :link[statusTemTeveDoencasRins]{id=dicionario-fci anchor=22-statustemtevedoencasrins} | Status que indica se o cidadão tem problema nos rins |
| st\_problema\_rins\_insuficiencia <br /> st\_problema\_rins\_outro <br /> st\_problema\_rins\_nao\_sabe | :link[doencaRins]{id=dicionario-fci anchor=8-doencarins} | Indica o(s) tipo(s) de problema renal do cidadão |
| st\_pic | :link[statusUsaOutrasPraticasIntegrativasOuComplementares]{id=dicionario-fci anchor=28-statususaoutraspraticasintegrativasoucomplementares} | Status que indica se o cidadão usa práticas integrativas e complementares em saúde (PIC) |
| st\_plano\_saude\_privado | :link[statusPossuiPlanoSaudePrivado]{id=dicionario-fci anchor=13-statuspossuiplanosaudeprivado} | Status que indica se o cidadão possui plano de saúde privado |
| st\_participa\_grupo\_comunitario | :link[statusParticipaGrupoComunitario]{id=dicionario-fci anchor=12-statusparticipagrupocomunitario} | Status que indica se o cidadão participa de algum grupo comunitário |
| st\_frequenta\_creche | :link[statusFrequentaEscola]{id=dicionario-fci anchor=10-statusfrequentaescola} | Status que indica se a criança frequenta creche |
| st\_frequenta\_cuidador | :link[statusFrequentaBenzedeira]{id=dicionario-fci anchor=9-statusfrequentabenzedeira} | Status que indica se a criança fica com cuidador |
| st\_comunidade\_tradicional | :link[statusMembroPovoComunidadeTradicional]{id=dicionario-fci anchor=11-statusmembropovocomunidadetradicional} | Status que indica se o cidadão é membro de comunidade tradicional |
| st\_morador\_rua | :link[statusSituacaoRua]{id=dicionario-fci anchor=9-statussituacaorua} | Status que indica se o cidadão é morador de rua |
| st\_recebe\_beneficio | :link[statusRecebeBeneficio]{id=dicionario-fci anchor=8-statusrecebebeneficio} | Status que indica se o cidadão recebe algum benefício social |
| st\_beneficio\_bolsa\_familia <br /> st\_beneficio\_cesta\_alimento <br /> st\_beneficio\_leite\_nao\_humano <br /> st\_beneficio\_nao\_recebe <br /> st\_beneficio\_outros <br /> st\_beneficio\_aposentado <br /> st\_beneficio\_prest\_continuada | :link[statusRecebeBeneficio]{id=dicionario-fci anchor=8-statusrecebebeneficio} | Indica o(s) tipo(s) de benefício que o cidadão recebe |
| st\_referencia\_familiar | :link[statusPossuiReferenciaFamiliar]{id=dicionario-fci anchor=7-statuspossuireferenciafamiliar} | Status que indica se o cidadão é a referência da família no território |
| st\_acompanhado\_instituicao | :link[statusAcompanhadoPorOutraInstituicao]{id=dicionario-fci anchor=6-statusacompanhadoporoutrainstituicao} | Status que indica se o cidadão é acompanhado por alguma instituição |
| st\_visita\_familiar\_frequente | :link[statusVisitaFamiliarFrequentemente]{id=dicionario-fci anchor=11-statusvisitafamiliarfrequentemente} | Status que indica se o cidadão visita a família com frequência |
| st\_higiene\_pessoal\_acesso | :link[statusTemAcessoHigienePessoalSituacaoRua]{id=dicionario-fci anchor=10-statustemacessohigienepessoalsituacaorua} | Status que indica se o cidadão em situação de rua tem acesso a higiene pessoal |
| st\_hig\_pess\_banho <br /> st\_hig\_pess\_sanitario <br /> st\_hig\_pess\_higiene\_bucal <br /> st\_hig\_pess\_outros | :link[higienePessoalSituacaoRua]{id=dicionario-fci anchor=2-higienepessoalsituacaorua} | Indica o(s) tipo(s) de acesso a higiene pessoal |
| st\_orig\_alimen\_restaurante\_pop <br /> st\_orig\_alimen\_doacao\_reli <br /> st\_orig\_alimen\_doacao\_rest <br /> st\_orig\_alimen\_doacao\_popular <br /> st\_orig\_alimen\_outros | :link[origemAlimentoSituacaoRua]{id=dicionario-fci anchor=3-origemalimentosituacaorua} | Indica a(s) origem(ns) da alimentação do cidadão em situação de rua |
| st\_respons\_crianca\_adulto\_resp <br /> st\_respons\_crianca\_outra\_crian <br /> st\_respons\_crianca\_adolescente <br /> st\_respons\_crianca\_sozinha <br /> st\_respons\_crianca\_creche <br /> st\_respons\_crianca\_outro | :link[responsavelPorCrianca]{id=dicionario-fci anchor=17-responsavelporcrianca} | Indica com quem fica a criança de 0 a 9 anos |
| st\_informar\_orientacao\_sexual | :link[statusDesejaInformarOrientacaoSexual]{id=dicionario-fci anchor=8-statusdesejainformarorientacaosexual} | Status que indica se o cidadão optou por não informar a orientação sexual |
| st\_informar\_identidade\_genero | :link[statusDesejaInformarIdentidadeGenero]{id=dicionario-fci anchor=16-statusdesejainformaridentidadegenero} | Status que indica se o cidadão optou por não informar a identidade de gênero |
| dt\_naturalizacao | :link[dtNaturalizacao]{id=dicionario-fci anchor=20-dtnaturalizacao} | Data de naturalização do cidadão |
| dt\_entrada\_brasil | :link[dtEntradaBrasil]{id=dicionario-fci anchor=22-dtentradabrasil} | Data de entrada no Brasil |
| dt\_obito | :link[dataObito]{id=dicionario-fci anchor=2-dataobito} | Data do óbito do cidadão |
| nu\_micro\_area | :link[microarea]{id=dicionario-fci anchor=23-microarea} | Número da microárea onde o cidadão reside |
| st\_comeu\_que\_tinha\_dnheir\_acab | :link[comeuAlgunsAlimentosQueTinhaDinheiroAcabou]{id=dicionario-fci anchor=2-comeualgunsalimentosquetinhadinheiroacabou} | Indica se nos últimos três meses o cidadão comeu apenas alguns alimentos que ainda tinha porque o dinheiro acabou |
| st\_alimentos\_acab\_sem\_dinheiro | :link[alimentosAcabaramAntesTerDinheiroComprarMais]{id=dicionario-fci anchor=1-alimentosacabaramantesterdinheirocomprarmais} | Indica se nos últimos três meses os alimentos acabaram antes que houvesse dinheiro para comprar mais |
| st\_atend\_socioeducativo | - | Indica se o cidadão está em atendimento socioeducativo |
| nu\_dnv\_cidadao | :link[dnv]{id=dicionario-fci anchor=29-dnv} | Número da Declaração de Nascido Vivo do cidadão |
| st\_nao\_possui\_cpf | :link[stNaoPossuiCpf]{id=dicionario-fci anchor=30-stnaopossuicpf} | Indica se o cidadão não possui CPF |
| no\_nome | :link[nomeCidadao]{id=dicionario-fci anchor=7-nomecidadao} | Nome do cidadão |
| no\_nome\_social | :link[nomeSocial]{id=dicionario-fci anchor=1-nomesocial} | Nome social do cidadão |
| no\_nome\_mae | :link[nomeMaeCidadao]{id=dicionario-fci anchor=8-nomemaecidadao} | Nome da mãe do cidadão |
| no\_nome\_pai | :link[nomePaiCidadao]{id=dicionario-fci anchor=18-nomepaicidadao} | Nome do pai do cidadão |
| nu\_nis | :link[numeroNisPisPasep]{id=dicionario-fci anchor=12-numeronispispasep} | NIS/PIS/PASEP do cidadão |
| nu\_portaria\_naturalizacao | :link[portariaNaturalizacao]{id=dicionario-fci anchor=21-portarianaturalizacao} | Número da portaria de naturalização |
| nu\_celular | :link[telefoneCelular]{id=dicionario-fci anchor=11-telefonecelular} | Número de celular do cidadão |
| no\_email | :link[emailCidadao]{id=dicionario-fci anchor=5-emailcidadao} | Endereço de e-mail do cidadão |
| nu\_obito\_do | :link[numeroDO]{id=dicionario-fci anchor=3-numerodo} | Número da Declaração de Óbito do cidadão |
| no\_maternidade\_referencia | :link[maternidadeDeReferencia]{id=dicionario-fci anchor=9-maternidadedereferencia} | Nome da maternidade de referência |
| no\_causa\_internacao12 | :link[descricaoCausaInternacaoEm12Meses]{id=dicionario-fci anchor=1-descricaocausainternacaoem12meses} | Descrição da causa de internação nos últimos 12 meses |
| no\_plantas\_medicinais | :link[descricaoPlantasMedicinaisUsadas]{id=dicionario-fci anchor=5-descricaoplantasmedicinaisusadas} | Descrição das plantas medicinais utilizadas |
| no\_outra\_condicao1 | :link[descricaoOutraCondicao1]{id=dicionario-fci anchor=2-descricaooutracondicao1} | Descrição de outra condição de saúde 1 |
| no\_outra\_condicao2 | :link[descricaoOutraCondicao2]{id=dicionario-fci anchor=3-descricaooutracondicao2} | Descrição de outra condição de saúde 2 |
| no\_outra\_condicao3 | :link[descricaoOutraCondicao3]{id=dicionario-fci anchor=4-descricaooutracondicao3} | Descrição de outra condição de saúde 3 |
| no\_acompanhado\_instituicao | :link[outraInstituicaoQueAcompanha]{id=dicionario-fci anchor=4-outrainstituicaoqueacompanha} | Nome da instituição que acompanha o cidadão |
| no\_visita\_familiar\_parentesco | :link[grauParentescoFamiliarFrequentado]{id=dicionario-fci anchor=1-grauparentescofamiliarfrequentado} | Grau de parentesco do familiar visitado frequentemente |
| st\_cidadao\_aldeado | - | Indica se o cidadão reside em aldeia indígena |
| st\_ficha\_inativa | - | Indica se a ficha de cadastro está inativa |
| st\_gerado\_automaticamente | - | Indica se o registro foi gerado automaticamente pelo sistema |
| st\_processo\_cidadao | - | Indica o processamento do cadastro no contexto do processo do cidadão |
| st\_processo\_linha\_tempo | - | Indica o processamento do cadastro na linha do tempo do cidadão |
| st\_proc\_operacionais | - | Indica dados de processamento operacional do cadastro |

Os seguintes campos da tabela armazenam valores criptografados:

- no\_nome
- no\_nome\_social
- no\_nome\_mae
- no\_nome\_pai
- nu\_nis
- nu\_portaria\_naturalizacao
- nu\_celular
- no\_email
- nu\_obito\_do
- no\_maternidade\_referencia
- no\_causa\_internacao12
- no\_plantas\_medicinais
- no\_outra\_condicao1
- no\_outra\_condicao2
- no\_outra\_condicao3
- no\_acompanhado\_instituicao
- no\_visita\_familiar\_parentesco
- nu\_cpf\_cidadao
- nu\_cpf\_responsavel

## 4. Dimensões da tabela

### 4.1 Dimensões específicas dessa tabela

| Coluna DW | Dimensão referência |
| --------- | ------------------- |
| co\_dim\_sexo | Código do sexo do cidadão. Campo `co_seq_dim_faixa_sexo` da `tb_dim_sexo` |
| co\_dim\_raca\_cor | Código da raça/cor do cidadão. Campo `co_seq_dim_raca_cor` da `tb_dim_raca_cor` |
| co\_dim\_etnia | Código da etnia do cidadão. Campo `co_seq_dim_etnia` da `tb_dim_etnia` |
| co\_dim\_nacionalidade | Código da nacionalidade do cidadão. Campo `co_seq_dim_nacionalidade` da `tb_dim_nacionalidade` |
| co\_dim\_pais\_nascimento | Código do país de nascimento do cidadão. Campo `co_seq_dim_pais` da `tb_dim_pais` |
| co\_dim\_municipio\_cidadao | Código do município de nascimento do cidadão. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_faixa\_etaria | Código da faixa etária do cidadão. Campo `co_seq_dim_faixa_etaria` da `tb_dim_faixa_etaria` |
| co\_dim\_frequencia\_alimentacao | Código da frequência de alimentação. Campo `co_seq_dim_frequencia_alimentacao` da `tb_dim_frequencia_alimentacao` |
| co\_dim\_tipo\_parentesco | Código do tipo de parentesco com o responsável familiar. Campo `co_seq_dim_tipo_parentesco` da `tb_dim_tipo_parentesco` |
| co\_dim\_cbo | Código do CBO do profissional que realizou o cadastro. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_cbo\_cidadao | Código do CBO (ocupação) do cidadão. Campo `co_seq_dim_cbo` da `tb_dim_cbo` |
| co\_dim\_tipo\_escolaridade | Código do grau de escolaridade do cidadão. Campo `co_seq_dim_tipo_escolaridade` da `tb_dim_tipo_escolaridade` |
| co\_dim\_situacao\_trabalho | Código da situação de trabalho do cidadão. Campo `co_seq_dim_situacao_trabalho` da `tb_dim_situacao_trabalho` |
| co\_dim\_tipo\_orientacao\_sexual | Código da orientação sexual do cidadão. Campo `co_seq_dim_tipo_orientacao_sexual` da `tb_dim_tipo_orientacao_sexual` |
| co\_dim\_identidade\_genero | Código da identidade de gênero do cidadão. Campo `co_seq_dim_identidade_genero` da `tb_dim_identidade_genero` |
| co\_dim\_tipo\_saida\_cadastro | Código do tipo de saída do cadastro. Campo `co_seq_dim_tipo_saida_cadastro` da `tb_dim_tipo_saida_cadastro` |
| co\_dim\_tipo\_condicao\_peso | Código da condição de peso do cidadão. Campo `co_seq_dim_tipo_condicao_peso` da `tb_dim_tipo_condicao_peso` |
| co\_dim\_tempo\_morador\_rua | Código do tempo em situação de rua. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_tipo\_sanguineo | Código do tipo sanguíneo do cidadão. Campo `co_seq_dim_tipo_sanguineo` da `tb_dim_tipo_sanguineo` |
| co\_dim\_estado\_civil | Código do estado civil do cidadão. Campo `co_seq_dim_estado_civil` da `tb_dim_estado_civil` |
| co\_dim\_tipo\_socioeducativo | Código do tipo de atendimento socioeducativo. Campo `co_seq_tipo_socioeducativo` da `tb_dim_tipo_socioeducativo` |
| co\_dim\_tempo\_socioeducativo | Código do tempo de atendimento socioeducativo. Campo `co_seq_tempo_socioeducativo` da `tb_dim_tempo_socioeducativo` |
| co\_dim\_just\_nao\_possui\_cpf | Código da justificativa de não possuir CPF. Campo `co_seq_dim_just_nao_possui_cpf` da `tb_dim_just_nao_possui_cpf` |
| co\_dim\_povo\_comunidad\_trad | Código do povo ou comunidade tradicional do cidadão. Campo `co_seq_dim_povo_comunidad_trad` da `tb_dim_povo_comunidad_trad` |

### 4.2 Dimensões comuns a todos os fatos do cadastro individual

| Coluna DW | Dimensão referência |
| --------- | ------------------- |
| co\_dim\_municipio | Código de identificação do município. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_tipo\_ficha | Código de identificação do tipo de ficha. Campo `co_seq_dim_tipo_ficha` da `tb_dim_tipo_ficha` |
| co\_dim\_profissional | Código de identificação do profissional responsável. Campo `co_seq_dim_profissional` da `tb_dim_profissional` |
| co\_dim\_unidade\_saude | Código de identificação da unidade de saúde do profissional responsável. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_equipe | Código de identificação da equipe do profissional responsável. Campo `co_seq_dim_equipe` da `tb_dim_equipe` |
| co\_dim\_tempo | Responsável por armazenar as datas de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_tempo\_validade | Responsável por armazenar a data de validade do cadastro. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_tempo\_validade\_recusa | Responsável por armazenar a data de validade da recusa de cadastro. Campo `co_seq_dim_tempo` da `tb_dim_tempo` |
| co\_dim\_tipo\_origem\_dado\_transp | Código da origem do dado no transporte. Campo `co_seq_dim_tp_orgm_dado_transp` da `tb_dim_tipo_origem_dado_transp` |
| co\_dim\_cds\_tipo\_origem | Código da origem do dado no transporte. Campo `co_seq_dim_tipo_origem` da `tb_dim_tipo_origem` |
