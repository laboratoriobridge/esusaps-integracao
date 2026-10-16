# website

Site de integração e-SUS APS (LEDI, DW PEC e Sistemas externos) em
[Docusaurus](https://docusaurus.io/). Substitui o site Jekyll gerado a
partir do repositório `esusab-integracao-private` — ver
[../MIGRACAO.md](../MIGRACAO.md).

O conteúdo em `collections/` é sincronizado do **esus-aps-doc**, que segue
sendo a fonte de verdade; aqui ele só é publicado.

## Requisitos

Node 20 (`.nvmrc`).

```bash
nvm use
npm install
```

## Desenvolvimento

```bash
npm start
```

Sobe em <http://localhost:3000> com recarga automática. Com Docker:
`docker compose up`.

## Build e publicação

```bash
npm run build     # gera ./build
npm run publish   # build + copia para a raiz do repositório (gh-pages)
```

`npm run publish` chama `../scripts/publish-site.sh`, que nunca toca nas
pastas `v<versão>` (snapshots de versões já publicadas).

## Outros comandos

```bash
npm run generate:redirects   # regenera src/data/jekyllRedirects.json
npm run typecheck
npm run serve                # serve ./build localmente
```

## Ao publicar uma nova versão do LEDI

1. sincronize `collections/` a partir do esus-aps-doc (ver
   [../MIGRACAO.md](../MIGRACAO.md));
2. atualize `SITE_VERSION` em `src/data/integracao.ts` — é o selo "versão
   x.y.z" da navbar, equivalente ao `version:` do `_config.yml` do Jekyll;
3. `npm run generate:redirects` se algum `id` ou caminho de arquivo mudou;
4. `npm run publish`.
