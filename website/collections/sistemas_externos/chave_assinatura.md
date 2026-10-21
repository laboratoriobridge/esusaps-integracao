---
id: chave_assinatura
title: Chave de assinatura
order: 3
parent: sistemas_externos
---

## 1. Objetivo

Este documento apresenta detalhes sobre como pode ser realizada a validação de segurança em relação a requisição de acesso realizada pelo Prontuário Eletrônico e-SUS APS.

Durante a configuração do sistema externo, o Prontuário Eletrônico e-SUS APS gera uma chave de assinatura, o objetivo dessa chave de assinatura é permitir que o sistema externo que está sendo acessado valide que a requisição realmente partiu do Prontuário Eletrônico e-SUS APS. A chave de assinatura deve ser obtida através de contato com o administrador da instalação do município. 

## 2. Exemplo

## Verificação de Assinatura HMAC da requisição

### Exemplo de URL

```
https://localhost:4000/iframe?documento-profissional=12345&documento-cidadao=67890&cnes=[CNES]&pec_timestamp=1749542182&pec_sign=9e6c598297ba33f47cfccafa4869ec70428ac3c76b0e037ec08daf96d2616c0f
```

### Como funciona

:nr **Parte Base da URL** (usada para assinar):

```
https://localhost:4000/iframe?documento-profissional=12345&documento-cidadao=67890&cnes=[CNES]&pec_timestamp=1749542182
```

Esta é a parte que será usada para gerar e verificar a assinatura. Note que ela **termina no timestamp**.

:nr **Timestamp**:

- O parâmetro **`pec_timestamp=1749542182`** representa o momento da requisição (segundos);
- O sistema pode estabelecer um critério de validade, por exemplo, considerando válidas apenas requisições numa janela de **30 minutos**.

:nr **Assinatura**:

- O parâmetro **`pec_sign=9e6c...6c0f`** contém a assinatura HMAC-SHA256 da URL;
- A assinatura é calculada usando **toda a URL até o timestamp** (inclusive);
- É usado o algoritmo **HMAC-SHA256** com a chave secreta para gerar a assinatura.

### Processo de Verificação

1. O sistema pega a URL completa e **remove tudo após** `&pec_sign=`;
2. Usa esta URL "limpa" para calcular um novo HMAC;
3. Compara o HMAC calculado com o recebido no parâmetro `pec_sign`;
4. Simultaneamente, verifica se o `pec_timestamp` está dentro de uma janela esperada.

A requisição só é considerada válida se:

- A parte da URL até o timestamp gerar a **mesma assinatura** que foi recebida;
- O **timestamp** estiver dentro da janela estabelecida.

### Implementação de Exemplo (Javascript/Node/Express)

#### Cálculo do HMAC

```javascript
function calculateHMAC(req) {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`; //url assinada no PEC é canônica. Pode ser necessário codificar a url se tiver caracteres especiais.
  const urlToSign = fullUrl.split("&pec_sign=")[0];

  return {
    urlToSign,
    signature: crypto
      .createHmac("sha256", HMAC_KEY) //HMAC_KEY corresponde a chave obtida junto ao administrador da instalação
      .update(urlToSign)
      .digest("hex"),
  };
}
```

#### Verificação do Timestamp

```javascript
function verifyTimestamp(timestamp) {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const timeDiff = Math.abs(currentTimeInSeconds - timestamp);
  // Permitir diferença de até 30 minutos
  return timeDiff <= 1800;
}
```
