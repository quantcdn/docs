---
id: drupal-search
title: Using the Drupal Quant Search module
sidebar_label: Search module
---

The optional Drupal Quant Search (`quant_search`) submodule allows for creating Quant Search Pages within Drupal. Quant Search leverages the powerful [Algolia search platform](https://www.algolia.com/).

:::Note
Quant Search is an [add-on feature](https://www.quantcdn.io/features) with a [nominal cost](https://www.quantcdn.io/pricing).
:::

## Setup

1. [Connect Drupal with Quant](/docs/integrations/drupal)
1. [Enable Quant search in Dashboard](/docs/dashboard/search)
1. Use `composer` to add the `quantcdn` project
1. Enable the `quant_search` Drupal module
1. Go to the Drupal Quant Search admin page (`/admin/config/development/quant/search`)
1. You should see a `Search is enabled for *project*` message

## Search Pages

Unlimited Quant search pages can be added in Drupal. These pages are pushed to Quant automatically when creating or updating.

1. Go to the Drupal Quant Search Pages admin page (`/admin/config/development/quant/search/pages`)
1. Click the `Add Quant search page` button
1. Fill in the page details including, at minimum, `Label` and `Route`
1. The page can be enabled and disabled as needed and defaults to disabled
1. The options are fairly self-explanatory, but some notable options are noted below

### Manual filters

@todo

### Facets

Search facets can be added and will allow the user to filter the content.

1. There are 3 facet styles: checkbox, select, and menu
1. The `Content type` and `Language` facets have no additional configuration
1. The `Taxonomy` facet requires you choose a `Vocabulary`
1. The `Facet heading` is optional, but good for UX and accessibility
1. For mutilingual sites, the `Facet language` can be chosen
1. To remove any facet, click `Remove facet`
1. To add a facet, fill in the bottom facet details and click `Add facet`
1. Facets can be reordered by drag-and-drop or using the `Facet weight`
