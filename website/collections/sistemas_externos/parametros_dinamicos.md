---
id: parametros_dinamicos
title: Parâmetros dinâmicos de integração
order: 4
parent: sistemas_externos
---

## 1. Objetivo

Este documento apresenta os parâmetros dinâmicos disponíveis para comunicação entre o Prontuário Eletrônico e-SUS APS e o Sistema externo.

Os parâmetros permitem que o Prontuário Eletrônico e-SUS APS envie informações através da URL para o sistema externo que está sendo acessado.

## 2. Parâmetros disponíveis

:nr [CNES]: código CNES do estabelecimento da lotação do profissional realizando o atendimento

:nr [documentoCidadao]: identificador do cidadão que está sendo atendido pelo profissional, preferencialmente é enviado o CPF do cidadão, caso não exista, é enviado o CNS. Essa variável está disponível apenas quando o **Local de acesso** do sistema externo cadastrado estiver definido como "Atendimento".

:nr [documentoProfissional]: identificador do profissional que está acessando o sistema externo, preferencialmente é enviado o CPF do profissional, caso não exista, é enviado o CNS.

## 3. Exemplo de URL

O sistema externo deverá disponibilizar a URL para o administrador da instalação utilizando as variáveis, no formato previsto pelo Prontuário Eletrônico e-SUS APS:

```
https://[url_do_sistema_externo]?documento-profissional=[documentoProfissional]&documento-cidadao=[documentoCidadao]&cnes=[CNES]
```

Ao acionar a URL, o Prontuário Eletrônico e-SUS APS irá substituir os valores das variáveis pelo efetivo valor da mesma:

```
https://[url_do_sistema_externo]?documento-profissional=27406912030&documento-cidadao=07838480051&cnes=1205677
```

Dessa forma, o sistema externo poderá identificar o profissional, o cidadão e o estabelecimento envolvidos na requisição, direcionando a busca com precisão para os dados corretos no sistema de destino.

Importante ressaltar que os dados de segurança sempre serão enviados através da URL, mais detalhes estão disponíveis em :link{id=chave_assinatura}.
