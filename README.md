[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/quantcdn/QuantCDN%2Fquant-docs?key=eyJhbGciOiJIUzI1NiJ9.NWU5ZDVmZmE1MWJmOTZjYTU0NWRiNTBk.2vLiCtkYTfWcwAbwbzuL5KlwSrZRXetNTXgpWn5ZMag&type=cf-1)]( https%3A%2F%2Fg.codefresh.io%2Fpipelines%2Fquant-docs%2Fbuilds%3Ffilter%3Dtrigger%3Abuild~Build%3Bpipeline%3A5e9d6314ea5ddb6d218cf67d~quant-docs)


# QuantCDN developer docs

The docs.quantcdn.io site is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

Built docs are automatically deployed to QuantCDN using [quant-cli](https://github.com/quantcdn/node-cli).


### Installation

```
$ yarn
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

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
quant init
quant deploy
```
