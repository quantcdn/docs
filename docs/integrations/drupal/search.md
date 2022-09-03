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

:::Tip
For Drupal sites, the `quant_search` module is the preferred method for adding Quant search pages. If you add search pages within the Quant Dashboard, these will not show up in Drupal. And, any search pages created in Drupal do not show up in the [Dashboard Search](https://dashboard.quantcdn.io/search) section. Search pages created in Drupal can be viewed with regular content in the [Dashboard Content](https://dashboard.quantcdn.io/content) section.
:::

## Search Pages

Unlimited Quant search pages can be added in Drupal. These pages are pushed to Quant automatically when creating or updating.

1. Go to the Drupal Quant Search Pages admin page (`/admin/config/development/quant/search/pages`)
1. Click the `Add Quant search page` button
1. Fill in the page details including, at minimum, `Label` and `Route`
1. The page can be enabled and disabled as needed and defaults to disabled
1. The options are fairly self-explanatory, but some notable options are detailed below
1. Click the `Save` button to save the page and send the page to Quant

### Manual filters

See the [Algolia Filter documentation](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/) for details on the types of filters that can be added.

### Facets

Search facets can be added and will allow the user to filter the content.

1. There are 3 facet styles: checkbox, select, and menu
1. The `Content type` and `Language` facets have no additional configuration
1. The `Taxonomy` facet requires you choose a `Vocabulary`
1. The `Facet heading` is optional, but good for UX and accessibility
1. For mutilingual sites, the `Facet language` can be chosen
1. To remove any facet, click the `Remove facet` button
1. To add a facet, fill in the bottom facet details and click the `Add facet` button
1. Facets can be reordered using drag-and-drop or changing the `Facet weight`
1. After changing any facet information, click the `Save` button

## Search Index

The Quant Search index contains all the information sent to Quant based on the entity configuration and search pages.

1. Go to the Drupal Quant Search admin page for index status (`/admin/config/development/quant/search`)
1. Click the `Clear index` button to remove all the content from the search index
1. Go to the Drupal Quant Index admin page to reindex content (`/admin/config/development/quant/search/index`)

:::Tip
Clearing the index means all of the search-related data is removed, but the Drupal pages will remain in Drupal and in Quant. If you have active search pages, these will show no results if the index has been cleared and not updated.

1. If you intend to remove search from your site, disable all search pages first and then clear the index
1. If you are temporarily removing index data, make sure to reindex as soon as possible
:::

## Entity Configuration

Some of the search results details are configurable such as the result title, summary, image, and view mode.

1. Go to the Drupal Quant `Entity configuration` admin page (`/admin/config/development/quant/search/entities`)
1. The configuration defaults to common search requirements
1. Enable or disable `node` (page) and `term` content with the checkboxes
1. No other configuration is available for taxonomy

### Node Configuration

Search content for `nodes` (pages) can be configured per content type.

1. There are default options for `Title`, `Summary`, `Image`, and `Content view mode`
1. For each content type, there are overrides available for these options
1. Content types can also be excluded from the search index entirely
1. Click the `Save configuration` button to save changes
1. Reindex content if the configuration has changed

:::Tip
Excluding a content type after its content has been added to the index, requires clearing the search index before reindexing.
:::

### Images

To show images with ithe search results, update the image token to the correct image style for your content type. Example:

```
[node:field_image:medium:url]
```
