---
id: purger
title: Using quant_purger
sidebar_label: Purger
---

The optional `quant_purger` submodule adds cache tag support for Quant content seeding. This relies on the [Purge API](https://www.drupal.org/project/purge) and allows the Quant module suite to identify pages (including related content) that require updating based on user actions and then queues them for seeding.

## How does it work?

The `quant_purger` module creates a reference table that is used to map Drupal-generated cache tags to paths that have been seeded to Quant.

When Drupal issues a cache clear event, the Purge module collects that information and exposes it so that reverse proxies can be invalidated. In Quant's use case, this provides an entry point for the Quant module suite to identify which tags require clearing and use that information to create queue entries that can be seeded to Quant on the next queue run.

## Setup

1. Enable the `quant_purger` module
2. Seed your content to create entries in the reference table

## Configuration

Drupal is verbose with the number of tags that will be cleared for each run, and there are some commonly excluded tags from the list (e.g., `render`) as they appear on every page.

In order for cache tag purging to be effective, you will need to inspect the cache tags that are present on the URLs and create a list of tags to exclude.

1. Enable the `purge_ui` companion module
2. Edit the **Purge Quant** querer
3. Update the tag block list

:::tip
To identify the tags that are associated with your site, you can access them from the reference table:

```
drush sqlq "select url, tags from purge_queuer_quant"
```
:::

![Quant Purger queue configuration](/img/quant-purger-config.png)

:::tip
The current tag list can be viewed with `drush config:get quant_purger.settings tag_blocklist`
:::