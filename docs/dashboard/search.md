---
id: search
title: Enable Quant Search
sidebar_label: Search
---

## Overview

Quant Search is an optional service that will allow you to create and maintain search pages with minimal effort.

When search is enabled on a project all content change will automatically be tracked in the search index. Similary when content is unpublished or deleted it will be removed from the index.

## Search subscription

Search is a bolt-on subscription which can be managed on a per account/organisation basis, meaning a single search subscription can be used for all projects within an account.

Navigate to the "Subscription" section of the Dashboard and click "Change plan" in the Search section to add or update a subscription.

## Enable search on the project

1. Navigate to the "Projects" section of the dashboard
2. Click "Edit" on any project you wish to enable search on
3. Check the "Enable Search" checkbox and save

## Configuring search

Once enabled, search can be configured on a per-project basis.

1. Navigate to the "Search" section" of the dashboard
2. Click the "Edit" button to configure search

### Content extractors

Quant will extract content from your markup to structure for search. The default structure for a search record:

* `title`: The page title (the first `h1` on a page by default)
* `content`: The content associated with the record (the meta `description` value by default)
* `image`: Optional URL containing an image (the meta `og:image` value by default)

These values can be altered using xpath selectors. If these xpath selectors are configured incorrectly records may not appear in search.

If you need assistance configuring xpath selectors for your site, please contact support.

### Faceting

If you are using the Drupal or Wordpress plugins Quant will automatically know about tags, categories, content type and custom taxonomy terms attached to content.

This can be used to expose facets (user-selectable filters) on your search pages.

#### Wordpress

Wordpress will automatically populate the following:

* `tags`
* `categories`
* `content_type`

Including these facet values will enable filtering on these values.

#### Drupal

Drupal will automatically populate `content_type` for any nodes, but also include any taxonomy terms attached to a node.

To include taxonomies in your facet list simply add any vocabulary machine name in the facet list.

## Creating search pages

Search pages can be created to 