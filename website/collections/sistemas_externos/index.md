---
id: sistemas_externos
title: Sistemas externos
order: 3
parent: integracao
---

## 1. Descrição

O Prontuário Eletrônico e-SUS APS, atualmente, permite a configuração de sistemas externos através do módulo de integração, disponível para o administrador da instalação. Atualmente os sistemas externos são exibidos dentro do contexto do Atendimento individual e Odontológico em uma aba específica e no menu principal do sistema, dependendo da configuração realizada pelo administrador.

Nas documentações abaixo apresentamos mais detalhes sobre aspectos de configuração e segurança:

- :link{id=iframe};
- :link{id=chave_assinatura};
- :link{id=parametros_dinamicos}.

## 2. Cadastro do sistema externo

:nr O cadastro de sistemas externos está habilitado somente para as instalações que possuam HTTPS configurado.

:nr O cadastro deve ser feito pelo Administrador da Instalação no módulo "Integração > Sistemas externos". Sendo necessário informar os seguintes dados dos integradores:

- Para cadastro de "Pessoa física" o registro deve conter as seguintes informações da pessoa que será responsável pela integração: URL de acesso ao sistema externo, Nome, CPF, E-mail e Nome do sistema;
- Para cadastro de "Pessoa jurídica" o registro deve conter as seguintes informações da pessoa que será responsável pela integração: URL de acesso ao sistema externo, Nome, CNPJ, E-mail e Nome do sistema.

:nr Após realizar o cadastro de um integrador o sistema irá gerar a **chave de assinatura**, que será utilizada para gerar a chave durante a requisição de acesso ao sistema externo. Sendo o Administrador da Instalação responsável por repassar a chave para os responsáveis dos sistemas externos. Não é possível recuperar uma chave gerada previamente, caso a chave seja perdida é necessário realizar um novo cadastro.
