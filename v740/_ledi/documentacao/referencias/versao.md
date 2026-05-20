---
layout: doc
title: Versão
id: versao
parent: referencias
order: 4
---

**Observação:** Indica a versão do dado a ser transportado. A versão do dado não necessariamente reflete a versão do sistema.

| Coluna | Tipo	| Obrigatório | Regra |
| ------ | ---- | ----------- | ----- |
| major | Integer | Sim | Valor único = 7 |
| minor | Integer | Sim | Valor único = 4 |
| revision | Integer | Sim | Valor único = 0 |

### Padrão de versionamento

A numeração *major* será incrementada quando houver necessidade de controle de compatibilidade do LEDI com novas versões *major* ou *minor* do e-SUS APS PEC.

Já as alterações na numeração *minor* representam a reformulação de campos já existentes ou a inclusão de novos campos ou estruturas no LEDI.

Pequenas alterações, geralmente na forma de atualização de regras de campos já existentes ou atualizações em tabelas de domínio, são denotadas pelo incremento da numeração *revision*.

