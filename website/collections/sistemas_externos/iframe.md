---
id: iframe
title: Sistemas habilitados para iFrame
order: 2
parent: sistemas_externos
---

## 1. Objetivo

Este documento apresenta detalhes sobre como um sistema deve ser configurado para permitir o uso dentro de um iFrame.

## 2. Sistemas habilitados para iFrame

Não é possível carregar o iFrame no Prontuário Eletrônico e-SUS APS, caso o sistema configurado possua configurações que restrinjam o uso do conteúdo, como, por exemplo, quando o servidor envia cabeçalhos de segurança específicos. Os cabeçalhos que podem causar essa restrição incluem:

- Content-Security-Policy: Se configurado como frame-ancestors 'none', impede que qualquer site carregue o conteúdo em um iFrame.
- X-Frame-Options: Definido com valores como SAMEORIGIN ou DENY, esse cabeçalho restringe a exibição do conteúdo em iFrames. O valor SAMEORIGIN permite que o conteúdo seja exibido apenas em páginas do mesmo domínio, enquanto DENY bloqueia completamente a exibição em iFrames.
    
Para mais informações:    

- [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP);
- [X-Frame Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options).
