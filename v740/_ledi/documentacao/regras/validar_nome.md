---
layout: doc
title: Validar nome
id: validar_nome
parent: regras
order: 2
---

Essas regras foram baseadas nas regras oficiais definidas pelo CADSUS na Especificação Técnica para integração PIX/PDQ
<a href="Especificacao_CADSUS.pdf" title="Clique para visualizar o documento de Especificação Técnica para integração PIX/PDQ">
	<img src="img/pdf.jpg" width="20" height="20"/>
</a>

No documento essa regras são definidas na **RN002. Informação do “Nome do Usuário”**. Nem todas as regras do manual são implementadas no PEC.

### 1. Regras aplicadas

{% nr %} A informação deve conter pelo menos três caracteres;

{% nr %} A informação que contiver um único termo, não entrará na base de dados (Ex: JOAQUIM);

{% nr %} A informação não deve permitir a inserção de espaço duplicado;

{% nr %} A informação deve ser padronizada para letra maiúscula, ou seja, letras minúsculas deverão ser convertidas para maiúsculas (Ex: Maria da Paz é convertida para MARIA DA PAZ);

{% nr %} A informação só pode conter letras do alfabeto romano (incluindo K, W, Y), além dos acentos gráficos (agudo, circunflexo, til e trema) e do caractere apóstrofo (‘), para possibilitar a inserção de nomes como JOÃO D’ÁVILA, sendo vedada a utilização de outros caracteres especiais;

{% nr %} A informação que contiver o primeiro e segundo termos com apenas um caractere em cada um deles não entrará na base de dados (Ex. A A DA SILVA);

{% nr %} A informação que contiver apenas dois termos, ambos com apenas dois caracteres, não entrará na base de dados;

As outras regras da especificação que não são citadas acima, serão validadas apenas pelo serviço do CADSUS, no módulo de cidadão, no momento em que o cadastro for enviado ao serviço PIX do CADSUS.