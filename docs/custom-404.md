---
slug: custom-404
title: Create custom 404 error page
sidebar_label: Customise 404 page
---

Custom 404 pages are easy with Quant. Any content pushed to QuantCDN with the special `/_quant404` route will become the active 404 page.

## WordPress

1. Set the 404 page in QuantCDN settings (Settings > QuantCDN) - for example `/path/to/404-page`.
2. Ensure the 404 page is pushed into Quant (Batches > Custom routes and 404 page)
3. From now on any change to the 404 page content will automatically update the 404 error page in QuantCDN

## Drupal

1. Ensure the 404 configuration is set in Drupal (Configuration > Site Information > Default 404 page)
2. When the node is updated or a seed takes places the 404 page will be updated

## Static Generators

Ensure you have content under the `/_quant404` path (for example, `/_quant404/index.html`) before running `quant deploy`.

## Create via the Quant Dashboard

You can also create custom 404 content directly via the Quant Dashboard using the [WYSIWYG or Code editors](/docs/dashboard/content#editing-or-creating-new-content). Remember to save under the special `_quant404` route.