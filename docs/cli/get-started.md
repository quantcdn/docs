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

This process will push all files and content that have changed since the previous deployment. It will also **unpublish** any content that has been removed since the last deployment.

## Static generators
Most static generators will work with the CLI tool by their very nature (generation of static assets!)

Quant has been tested with success with Jekyll, Hugo, Hexo, Gatsby, MkDocs, Docusaurus (this site), Pelican, and more. Please [contact us](https://www.quantcdn.io/contact) if you have issues integrating with any existing static generators, we would love to hear from you!