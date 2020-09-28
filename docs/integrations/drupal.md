---
id: drupal
title: Get started with Quant and Drupal
sidebar_label: Drupal
---

Drupal modules exist for 7, 8, and 9. The codebases are (maintained in Github)[https://www.github.com/quantcdn/drupal]. Please raise issues, feature and pull requests there.

## Setup

1. Download the Quant module either via composer (`composer require drupal/quantcdn`) or from [Drupal.org](https://drupal.org/project/quantcdn)
2. Install the module and visit the Configuration > Quant admin page (`/admin/config/quant`).
3. Ensure "track content change" is enabled, and you have each entity enabled that should automatically push to Quant.
4. Set your server URL to the local webserver loopback address (generally http://localhost), and provide your website domain as the hostname (e.g `www.example.com`)
5. Navigate to the API tab and enter your account, project, and token details. These can all be found from the [Quant Dashboard](/docs/dashboard/get-started)
6. You should see a "Successfully connected to ..." message at to the top of the page. If not, check the values under the API tab and try again.

## Preparing the initial seed

Seeding or Hydrating is the act of initial population of Quant. This will take all content, media assets, redirects, etc and push into Quant as a one-time action.

Once the initial seed is completed all further content change will be tracked and pushed to Quant automatically.

1. Visit the Seed tab
2. Select the items you want to push (generally this should be everything).
3. If you have non-standard content that appears on custom routes be sure to add to the Custom Routes section


### When would I need to trigger a re-seed?

If you have made sweeping, site-wide change then a re-seed may be required. This could be in the following situations:
- Global look and feel changes (e.g Theme)
- Global IA change (e.g links in navigation)
