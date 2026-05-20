---
layout: doc
title: Camada de Transporte de Dados
id: camada-transporte
parent: estrutura_arquivos
order: 0
---

## DadoTransporte
Os atributos do registro transportado devem seguir as regras aqui descritas. Qualquer inconsistência nos dados transportados resultará no descarte da entidade [DadoTransporte](#dadotransporte).

### \#1 uuidDadoSerializado

UUID do dado (identificador "universal" gerado na criação do registro).

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 36 | 44 |

**Regras:** É recomendado concatenar o CNES na frente do UUID, de modo que os 7 digitos (CNES) + 1 de hífen somados aos 36 (32 caracteres + 4 hífen) do UUID são a limitação de 44 bytes do campo. Formato canônico.

**Referência:** [UUID Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### \#2 tipoDadoSerializado

Tipo/classe do objeto serializado através do [TBinaryProtocol](https://github.com/apache/thrift/blob/0.9.2/lib/java/src/org/apache/thrift/protocol/TBinaryProtocol.java).

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Sim | 1 | 2 |

**Referência:** [TipoDadoSerializado]({% url dicionario %}#tipodadoserializado).

### \#3 cnesDadoSerializado

Código CNES do estabelecimento de saúde.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 7 | 7 |

**Regras:** Somente fichas de CNES pertencentes ao respectivo município são consideradas válidas.

### \#4 codIbge

Código IBGE do dado serializado através do [TBinaryProtocol](https://github.com/apache/thrift/blob/0.9.2/lib/java/src/org/apache/thrift/protocol/TBinaryProtocol.java).

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 7 | 7 |

**Regras:** Somente fichas com IBGE ativo na instalação são consideradas válidas.

**Referência:** [Municípios]({% url municipios %}).

### \#5	ineDadoSerializado

Código INE da equipe que gerou a ficha.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 10 | 10 |

**Regras:** Somente fichas com INE pertencentes ao respectivo município são consideradas válidas.

### \#6	numLote

Número do lote para controle interno dos arquivos enviados.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Long | Não | - | - |

### \#7	dadoSerializado

Dado serializado através do [TBinaryProtocol](https://github.com/apache/thrift/blob/0.9.2/lib/java/src/org/apache/thrift/protocol/TBinaryProtocol.java) a partir de uma ficha.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Binary | Sim | - | - |

### \#8	remetente

Identifica a instalação que enviou o dado.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| DadoInstalacao | Sim | - | - |

**Referência:** [DadoInstalacao](#dadoinstalacao).

### \#9	originadora

Identifica a instalação que cadastrou/digitou.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| DadoInstalacao | Sim | - | - |

**Referência:** [DadoInstalacao](#dadoinstalacao).

### \#10 versao

Identifica a versão do e-SUS APS.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| Versao | Sim | - | - |

**Referência:** [Versão]({%url versao %}).

## DadoInstalacao

### \#1	contraChave

Identifica o software que gerou o dado (pec/cds, cdsOff ou software de terceiros).

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | - | - |

**Regras:** Seguir o padrão `<Nome do software do município> - Versão do software`.

**Observações:** Campo serve para a identificar o software que gerou / cadastrou / enviou os dados.

### \#2	uuidInstalacao

É um identificador da instalação do software que gerou o dado. Seja ele o e-SUS ou software de terceiro. Cada e-SUS possui um UUID.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | - | - |

Observações: Campo serve para a identificar a instalação que gerou / cadastrou / enviou os dados.

### \#3	cpfOuCnpj

CPF do responsável ou CNPJ da empresa responsável.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | 11 | 15 |

**Observações:** Campo serve para a identificar a instalação que gerou / cadastrou / enviou os dados.

### \#4	nomeOuRazaoSocial

Nome do responsável ou razão social da empresa responsável.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Sim | - | - |

**Observações:** Campo serve para a identificar a instalação que gerou / cadastrou / enviou os dados.

### \#5	fone

Telefone da pessoa ou empresa responsável.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 10 | 11 |

**Observações:** Campo serve para a identificar a instalação que gerou / cadastrou / enviou os dados.

### \#6	email

E-mail da pessoa ou empresa responsável.

| Tipo | Obrigatório | Mínimo | Máximo |
| ---- | ----------- | ------ | ------ |
| String | Não | 6 | 255 |

**Regras:** Requerido seguir o padrão `endereco@domínio.extensão`.

**Observações:** Campo serve para a identificar a instalação que gerou / cadastrou / enviou os dados.