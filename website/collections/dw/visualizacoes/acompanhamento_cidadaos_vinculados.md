---
id: RF-EDW.acomp_cidadaos_vinculados
title: Tabela de acompanhamento de cidadãos vinculados
order: 2
parent: RF-EDW.visualizacoes
---

## 1. Dados

Esta estratégia de negócio refere-se ao :link[Cadastro Individual do Cidadão]{id=dicionario-fci}, que pode ser realizado diretamente no módulo de Cadastro Individual do CDS ou do PEC. Em sua composição também são utilizados dados do :link[Cadastro Domiciliar e Territorial]{id=dicionario-fcd} para composição de informações como endereço, microárea e estrutura do núcleo familiar.

## 2. Regras

:nr Os **Cidadãos** estão armazenados na `tb_acomp_cidadaos_vinculados`.

:nr Somente são considerados cidadãos que possuem vínculo com alguma equipe em seu cadastro.

:nr Por padrão, é utilizada a equipe definida no "Cadastro Individual do Cidadão", sendo que essa informação pode ser alterada através da atualização do mesmo.

:nr Com exceção dos casos de cadastro duplicado, um mesmo cidadão é apresentado uma única vez nesta tabela, estando vinculado exclusivamente a uma única equipe.

:nr Dados referente ao "Cadastro Domiciliar e Territorial" serão preenchidos somente para cidadãos que estejam devidamente estruturados em um núcleo familiar. A gestão do núcleo também pode ser realizada através do [acompanhamento do território](https://esusaps.freshdesk.com/support/solutions/articles/48001245078-acompanhamento-do-territ%C3%B3rio).

:nr A estrutura comporta tanto os dados de endereço do "Cadastro individual" quanto do "Cadastro Domiciliar e Territorial", o PEC sempre prioriza os dados do domicílio (quando existem) em relação aos dados do cadastro individual.

## 3. Estrutura

| Coluna                             | Tipo    | Descrição                    |
| ---------------------------------- | ------- | ---------------------------- |
| co\_seq\_acomp\_cidadaos\_vinc     | inteiro | Código sequencial da tabela. |
| no\_cidadao                        | texto   | Nome do cidadão. |
| no\_social\_cidadao                | texto   | Nome social do cidadão. |
| dt\_nascimento\_cidadao            | data    | Data de nascimento do cidadão. |
| no\_sexo\_cidadao                  | texto   | Descrição do :link[Sexo]{id=dicionario anchor=sexo} do cidadão. |
| tp\_identidade\_genero\_cidadao    | texto   | :link[Identidade de gênero]{id=dicionario anchor=identidadegenerocidadao} do cidadão. |
| nu\_cpf\_cidadao                   | texto   | CPF do cidadão. |
| nu\_cns\_cidadao                   | texto   | CNS do cidadão. |
| st\_usar\_cadastro\_individual     | inteiro | Se a opção "Utilizando a informação do Cadastro Individual do cidadão" foi marcada na hora de vincular um cidadão a uma equipe (0 - Não; 1 - Sim). |
| st\_possui\_fci                    | inteiro | Se o cidadão possui uma FCI (0 - Não; 1 - Sim), quando "Não", significa que o registro possui apenas o "Cadastro Simplificado do Cidadão¹". |
| st\_possui\_fcdt                   | inteiro | Se o cidadão possui uma FCDT (0 - Não; 1 - Sim), quando "Não", significa que o registro não está vinculado a um "Cadastro Domiciliar e Territorial". |
| nu\_telefone\_celular              | texto   | Número do telefone celular do cidadão. |
| nu\_telefone\_contato              | texto   | Número do telefone de contato do cidadão. |
| co\_unico\_ultima\_ficha           | texto   | Uuid do último "Cadastro Individual do Cidadão" associado ao cidadão. Campo `nu_uuid_ficha` da `tb_fat_cad_individual` |
| dt\_ultima\_atualizacao\_cidadao   | data    | Data da última atualização dos dados do cidadão, seja ela feita através do "Cadastro Individual do Cidadão" ou através do "Cadastro Simplificado do Cidadão¹" no módulo do cidadão do PEC. |
| co\_cidadao                        | inteiro | Código identificador do cidadão. |
| no\_responsavel                    | texto   | Nome do responsável pelo cidadão definido através do vínculo do responsável familiar no "Cadastro Individual do Cidadão". |
| nu\_fone\_residencial              | texto   | Telefone da residência do cidadão. |
| nu\_cnes\_vinc\_equipe             | texto   | CNES da unidade de saúde responsável pelo cidadão de acordo com as regras definidas neste documento. |
| dt\_atualizacao\_fcd               | data    | Data de atualização do "Cadastro Domiciliar e Territorial" que originou os dados de vínculo domiciliar do cidadão. |
| nu\_ine\_vinc\_equipe              | texto   | INE da equipe responsável pelo cidadão de acordo com as regras definidas neste documento. |
| no\_equipe\_vinc\_equipe           | texto   | Nome da equipe responsável pelo cidadão de acordo com as regras definidas neste documento. |
| nu\_micro\_area\_tb\_cidadao       | texto   | Número da microárea do cidadão definido no "Cadastro Simplificado do Cidadão¹". |
| nu\_micro\_area\_domicilio         | texto   | Número da microárea do domicílio definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| no\_tipo\_logradouro\_tb\_cidadao  | texto   | Nome do :link[Tipo do Logradouro]{id=ufs anchor=tipo-de-logradouro} definido no "Cadastro Simplificado do Cidadão¹". |
| ds\_logradouro\_tb\_cidadao        | texto   | Logradouro definido no "Cadastro Simplificado do Cidadão¹". |
| nu\_numero\_tb\_cidadao            | texto   | Número definido no "Cadastro Simplificado do Cidadão¹". |
| st\_sem\_numero\_tb\_cidadao       | inteiro | Se o endereço possui um número definido no "Cadastro Simplificado do Cidadão¹" (0 - Não; 1 - Sim). |
| ds\_complemento\_tb\_cidadao       | texto   | Complemento definido no "Cadastro Simplificado do Cidadão¹". |
| no\_bairro\_tb\_cidadao            | texto   | Nome do bairro definido no "Cadastro Simplificado do Cidadão¹". |
| no\_municipio\_tb\_cidadao         | texto   | Nome do município definido no "Cadastro Simplificado do Cidadão¹". |
| sg\_uf\_tb\_cidadao                | texto   | Sigla da UF definida no "Cadastro Simplificado do Cidadão¹". |
| ds\_cep\_tb\_cidadao               | texto   | CEP definido no "Cadastro Simplificado do Cidadão¹". |
| no\_tipo\_logradouro\_domicilio    | texto   | Nome do :link[Tipo do Logradouro]{id=ufs anchor=tipo-de-logradouro} definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| ds\_logradouro\_domicilio          | texto   | Logradouro definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| nu\_numero\_domicilio              | texto   | Número oriundo definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| st\_sem\_numero\_domicilio         | inteiro | Se o endereço possui um número definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado (0 - Não; 1 - Sim). |
| ds\_complemento\_domicilio         | texto   | Complemento definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| no\_bairro\_domicilio              | texto   | Nome do bairro definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| no\_municipio\_domicilio           | texto   | Nome do município definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| sg\_uf\_domicilio                  | texto   | Sigla da UF definida no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| ds\_cep\_domicilio                 | texto   | CEP definido no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. |
| ds\_logradouro\_tb\_cidadao\_filtr | texto   | Coluna com dado normalizado referente ao logradouro do "Cadastro Simplificado do Cidadão" utilizada para realizar buscas com performance otimizada. |
| no\_bairro\_tb\_cidadao\_filtro    | texto   | Coluna com dado normalizado referente ao bairro do "Cadastro Simplificado do Cidadão" utilizada para realizar buscas com performance otimizada. |
| ds\_logradouro\_domicilio\_filtro  | texto   | Coluna com dado normalizado referente ao logradouro do "Cadastro Domiciliar e Territorial" utilizada para realizar buscas com performance otimizada. |
| no\_bairro\_domicilio\_filtro      | texto   | Coluna com dado normalizado referente ao bairro do "Cadastro Domiciliar e Territorial" utilizada para realizar buscas com performance otimizada. |
| co\_cds\_domicilio			     | inteiro | Código identificador do domicílio ao qual o cidadão está vinculado. Relacionado ao campo `co_seq_cds_domicilio` da `tb_cds_domicilio`.|
| ds\_tipo\_localizacao\_domicilio   | texto   | Descrição da Localização definida no "Cadastro Domiciliar e Territorial" que o cidadão está vinculado. Relacionado ao campo `ds_tipo_localizacao` da `tb_dim_tipo_localizacao`.|
| no\_raca\_cor                      | texto   | Nome da :link[Raça/Cor]{id=dicionario anchor=racacor} do cidadão. |
| co\_fat\_cidadao\_pec              | inteiro | Código identificador do cidadão nas tabelas fato, relacionado a outras tabelas de fato, como `tb_fat_atendimento_individual` |
