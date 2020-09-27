---
id: crawler
title: Crawl and migrate
sidebar_label: Crawl and migrate
---

The CLI tool has a built in crawler, which is capable of migrating an entire website over to Quant with a single command.

First ensure you have initialised the CLI tool and are running from a folder containing a valid `quant.json` file.

Then, simply run:
```
quant crawl -d https://www.example.com
```

The crawler will run and push any files and content to the Quant service. This should be capable of migrating most sites to Quant with no further effort required.

In some instances this process may also be useful to crawl and push content to Quant on a schedule (e.g if a [CMS integration](/docs/integrations/overview) is not available).