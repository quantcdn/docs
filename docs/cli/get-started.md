---
id: get-started
title: Get started with the Quant CLI
sidebar_label: Get started
---

## Install

Install the CLI tool via NPM. Simply run:
```
npm i -g @quantcdn/quant-cli
```

## Initialize

The CLI tool expects to run from a folder containing a `quant.json` file, which contains information necessary to connect to the Quant service.

To initialize Quant (and create the `quant.json` file) navigate to a directory containing build assets and run `quant init`.
```
*** Initialise Quant ***
prompt: Enter QuantCDN endpoint:  (https://api.quantcdn.io)
prompt: Enter QuantCDN client id:  example-org
prompt: Enter QuantCDN project:  example-project
prompt: Enter QuantCDN token:  *****************

prompt: Directory containing static assets:  (build)
✅✅✅ Successfully connected to example-project
```

## Deploy
To deploy all content run `quant deploy`

This process will push all files and content that have changed since the previous deployment. By default this process will **unpublish** any content that has been removed since the last deployment.

### Using a local revision log

When deploying, you may specify a directory to hold a revision log using the `--revision-log` parameter. This revision log tracks MD5 hashes of files and content locally, making the next deployment far more efficient as it will skip content that has not changed.

It is recommended to use the `--revision-log` option, especially for large sites.

:::info
If you run your SSG build process in CI you should cache the revision-log so it persists between builds. This will ensure your build and deploy process is lightning quick!
:::

### Other options

* `--skip-unpublish`: May be used to optionally skip the automatic unpublish process. Useful when using incremental builds or pushing a small iterative change.
* `--skip-unpublish-regex`: Same as above, however the skip will only apply to a specific regex pattern.
* `--skip-purge`: Skip the automatic cache purge process. Useful to ensure your previous site content is maintained in the cache until you choose to flush the cache manually.
* `--chunk-size`: Maintains the concurrency (and speed) of the deployment. Default 10, max 20.
* `--force`: Force push the assets even if the MD5 hash is identical.
* `--enable-index-html`: Includes `index.html` on the final content path. By default, this is stripped for friendlier content paths.

## Static generators
Most static generators will work with the CLI tool by their very nature (generation of static assets!)

Quant has been tested with success with Jekyll, Hugo, Hexo, Tome, Gatsby, MkDocs, Docusaurus (this site), Pelican, and more. Please [contact us](https://www.quantcdn.io/contact) if you have issues integrating with any existing static generators, we would love to hear from you!