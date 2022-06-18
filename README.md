![CI build & deploy](https://github.com/quantcdn/docs/actions/workflows/deploy.yml/badge.svg)

# QuantCDN developer docs

The docs.quantcdn.io site is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

Built docs are automatically deployed to QuantCDN using [quant-cli](https://github.com/quantcdn/node-cli).


### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. You can validate by serving the files locally with `yarn serve`.

### Deployment

```
quant init
quant deploy
```
