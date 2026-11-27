---
id: RF-EDW.tb_fat_marca_consumo_alimnt
title: Tabela fato de marcadores de consumo alimentar
order: 0
parent: RF-EDW.marcadores_consumo_alimentar
---

## 1. Objetivo

A tabela `tb_fat_marca_consumo_alimnt` é populada sempre que os dados de um :link[Marcador de Consumo Alimentar]{id=dicionario-mca} são processados.

## 2. Regras

:nr A `tb_fat_marca_consumo_alimnt` é preenchida quando são processado(a)s:

- Fichas de marcadores de consumo alimentar recebidas através da importação de sistemas terceiros ou outras instalações do PEC;
- Registro de um atendimento que teve registro de marcador de consumo alimentar no **Objetivo**;
- Registro de um Marcador de consumo alimentar no CDS.

## 3. Fatos

### 3.1 Metadados dos fatos

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| co\_seq\_fat\_marca\_\con\_almnt | - | Código de identificação sequencial criado automaticamente pelo sistema |
| nu\_uuid\_ficha | :link[uuidFicha]{id=dicionario-mca anchor=10-uuidficha}  | Identificador universalmente único do registro |
| nu\_uuid\_dado\_transp | - | Identificador universalmente único da camada de transporte de dados. Caso o registro seja gerado dentro do PEC terá o mesmo valor do campo nu\_uuid\_ficha |
| co\_fat\_cidadao\_pec | - | Campo `co_seq_fat_cidadao_pec` da `tb_fat_cidadao_pec` |
| nu\_cpf\_cidadao | :link[cpfCidadao]{id=dicionario-mca anchor=12-cpfcidadao} | CPF do cidadão |
| nu\_cns | :link[cnsCidadao]{id=dicionario-mca anchor=2-cnscidadao} | CNS do cidadão |
| no\_nome | - | Nome do cidadão (armazenado criptografado) |

### 3.2 Métricas dos Fatos

Como as informações presentes nesta ficha são difíceis de serem representadas devido ao seu tamanho, as colunas da tabela receberam nomes genéricos, conforme apresentados na tabela abaixo.

| Colunas DW | Referência LEDI | Referência sistema |
| ---------- | --------------- | ------------------ |
| dt\_nascimento | :link[dataNascimento]{id=dicionario-mca anchor=4-datanascimento} | Data de nascimento do cidadão |
| nu\_resp\_menor\_6\_meses\_1 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | A criança ontem tomou leite do peito? |
| nu\_resp\_menor\_6\_meses\_2 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | Ontem a criança consumiu: Mingau |
| nu\_resp\_menor\_6\_meses\_3 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | Ontem a criança consumiu: Água / Chá |
| nu\_resp\_menor\_6\_meses\_4 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | Ontem a criança consumiu: Leite de vaca |
| nu\_resp\_menor\_6\_meses\_5 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | Ontem a criança consumiu: Fórmula infantil |
| nu\_resp\_menor\_6\_meses\_6 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | Ontem a criança consumiu: Suco de fruta |
| nu\_resp\_menor\_6\_meses\_7 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | Ontem a criança consumiu: Fruta |
| nu\_resp\_menor\_6\_meses\_8 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | Ontem a criança consumiu: Comida de sal (de panela, papa ou sopa) |
| nu\_resp\_menor\_6\_meses\_9 | :link[PerguntaQuestionarioCriancasMenoresSeisMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasmenoresseismeses} | Ontem a criança consumiu: Outros alimentos / bebidas |
| nu\_resp\_de\_6\_a\_23\_meses\_1 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | A criança ontem tomou leite do peito? |
| nu\_resp\_de\_6\_a\_23\_meses\_2 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem, a criança comeu fruta inteira, em pedaço ou amassada? |
| nu\_resp\_de\_6\_a\_23\_meses\_3 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Se sim, quantas vezes? |
| nu\_resp\_de\_6\_a\_23\_meses\_4 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança comeu comida de sal (de panela, papa ou sopa)? |
| nu\_resp\_de\_6\_a\_23\_meses\_5 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Se sim, quantas vezes? |
| nu\_resp\_de\_6\_a\_23\_meses\_6 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Se sim, essa comida foi oferecida: |
| nu\_resp\_de\_6\_a\_23\_meses\_7 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Outro leite que não o leite do peito |
| nu\_resp\_de\_6\_a\_23\_meses\_8 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Mingau com leite |
| nu\_resp\_de\_6\_a\_23\_meses\_9 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Iogurte |
| nu\_resp\_de\_6\_a\_23\_meses\_10 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Legumes (não considerar os utilizados como temperos, nem batata, mandioca / aipim / macaxeira, cará e inhame) |
| nu\_resp\_de\_6\_a\_23\_meses\_11 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Vegetal ou fruta de cor alaranjada (abóbora ou jerimum, cenoura, mamão, manga) ou folhas verde-escuras (couve, caruru, beldroega, bertalha, espinafre, mostarda) |
| nu\_resp\_de\_6\_a\_23\_meses\_12 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Verdura de folha (alface, acelga, repolho) |
| nu\_resp\_de\_6\_a\_23\_meses\_13 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Carne (boi, frango, peixe, porco, miúdos, outras) ou ovo |
| nu\_resp\_de\_6\_a\_23\_meses\_14 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Fígado |
| nu\_resp\_de\_6\_a\_23\_meses\_15 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Feijão |
| nu\_resp\_de\_6\_a\_23\_meses\_16 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Arroz, batata, inhame, aipim / macaxeira / mandioca, farinha ou macarrão (sem ser instantâneo) |
| nu\_resp\_de\_6\_a\_23\_meses\_17 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Hambúrguer e / ou embutidos (presunto, mortadela, salame, linguiça, salsicha) |
| nu\_resp\_de\_6\_a\_23\_meses\_18 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Bebidas adoçadas (refrigerante, suco de caixinha, suco em pó, água de coco de caixinha, xaropes de guaraná / groselha ou suco de fruta com adição de açúcar) |
| nu\_resp\_de\_6\_a\_23\_meses\_19 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Macarrão instantâneo, salgadinhos de pacote ou biscoitos salgados |
| nu\_resp\_de\_6\_a\_23\_meses\_20 | :link[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]{id=dicionario-mca anchor=perguntaquestionariocriancasdeseisvintetresmeses} | Ontem a criança consumiu: Biscoito recheado, doces ou guloseimas (balas, pirulitos, chiclete, caramelo, gelatina) |
| nu\_resp\_2\_anos\_ou\_mais\_1 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Quais refeições você faz ao longo do dia? Almoço |
| st\_resp\_2\_anos\_ou\_mais\_2\_1 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Quais refeições você faz ao longo do dia? Café da manhã |
| st\_resp\_2\_anos\_ou\_mais\_2\_2 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Quais refeições você faz ao longo do dia? Lanche da manhã |
| st\_resp\_2\_anos\_ou\_mais\_2\_3 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Quais refeições você faz ao longo do dia? Almoço |
| st\_resp\_2\_anos\_ou\_mais\_2\_4 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Quais refeições você faz ao longo do dia? Lanche da tarde |
| st\_resp\_2\_anos\_ou\_mais\_2\_5 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Quais refeições você faz ao longo do dia? Jantar |
| st\_resp\_2\_anos\_ou\_mais\_2\_6 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Quais refeições você faz ao longo do dia? Ceia |
| nu\_resp\_2\_anos\_ou\_mais\_3 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Ontem você consumiu: Feijão |
| nu\_resp\_2\_anos\_ou\_mais\_4 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Ontem você consumiu: Frutas frescas (não considerar suco de frutas) |
| nu\_resp\_2\_anos\_ou\_mais\_5 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Ontem você consumiu: Verduras e / ou legumes (não considerar batata, mandioca, aipim, macaxeira, cará e inhame) |
| nu\_resp\_2\_anos\_ou\_mais\_6 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Ontem você consumiu: Hambúrguer e / ou embutidos (presunto, mortadela, salame, linguiça, salsicha) |
| nu\_resp\_2\_anos\_ou\_mais\_7 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Ontem você consumiu: Bebidas adoçadas (refrigerante, suco de caixinha, suco em pó, água de coco de caixinha, xaropes de guaraná / groselha ou suco de fruta com adição de açúcar) |
| nu\_resp\_2\_anos\_ou\_mais\_8 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Ontem você consumiu: Macarrão instantâneo, salgadinhos de pacote ou biscoitos salgados |
| nu\_resp\_2\_anos\_ou\_mais\_9 | :link[PerguntaQuestionarioCriancasComMaisDoisAnos]{id=dicionario-mca anchor=perguntaquestionariocriancascommaisdoisanos} | Ontem você consumiu: Biscoito recheado, doces ou guloseimas (balas, pirulitos, chiclete, caramelo, gelatina) |
| st\_nao\_possui\_cpf | :link[stNaoPossuiCpf]{id=dicionario-mca anchor=13-stnaopossuicpf} | Indica se o cidadão não possui CPF |

## 4. Dimensões da tabela

| Coluna DW | Dimensão referência | 
| --------- | ------------------- | 
| co\_dim\_municipio | Código de identificação do município. Campo `co_seq_dim_municipio` da `tb_dim_municipio` |
| co\_dim\_tipo\_ficha | Código de identificação do tipo de ficha. Campo `co_seq_dim_tipo_ficha` da `tb_dim_tipo_ficha` | 
| co\_dim\_profissional | Código de identificação do profissional responsável. Campo `co_seq_dim_profissional` da `tb_dim_profissional` | 
| co\_dim\_cbo | Código de identificação do CBO profissional responsável. Campo `co_seq_dim_cbo` da `tb_dim_cbo` | 
| co\_dim\_unidade\_saude | Código de identificação da unidade de sáude do profissional responsável. Campo `co_seq_dim_unidade_saude` da `tb_dim_unidade_saude` |
| co\_dim\_equipe | Código de identificação da equipe do profissional responsável. Campo `co_seq_dim_equipe` da `tb_dim_equipe` | 
| co\_dim\_tipo\_origem\_dado\_transp | Código da origem do dado no transporte. Campo `co_seq_dim_tp_orgm_dado_transp` da `tb_dim_tipo_origem_dado_transp` |
| co\_dim\_cds\_tipo\_origem | Código da origem do dado no transporte. Campo `co_seq_dim_tipo_origem` da `tb_dim_tipo_origem` | 
| co\_dim\_tempo | Responsável por armazenar as datas de maneira estruturada. Campo `co_seq_dim_tempo` da `tb_dim_tempo` | 
| co\_dim\_sexo | Código do sexo. Campo `co_seq_dim_faixa_sexo` da `tb_dim_sexo` |
| co\_dim\_local\_atendimento | Código do local de atendimento. Campo `co_seq_dim_local_atendimento` da `tb_dim_local_atendimento` |
| co\_dim\_faixa\_etaria | Código da faixa etária. Campo `co_seq_dim_faixa_etaria` da `tb_dim_faixa_etaria` |
| co\_dim\_just\_nao\_possui\_cpf | Código da justificativa de não possuir CPF. Campo `co_seq_dim_just_nao_possui_cpf` da `tb_dim_just_nao_possui_cpf` |
