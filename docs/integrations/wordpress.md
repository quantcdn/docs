---
id: wordpress
title: Get started with Quant and Wordpress
sidebar_label: Wordpress
---

Wordpress is the most popular CMS on the planet. Quant offers a one-click solution for integration.

## Setup

1. Download the Plugin from [Wordpress](https://wordpress.org/plugins/quantcdn), or install from the admin UI.
2. Visit the Settings > QuantCDN admin page, and click the "Settings" tab
3. Ensure "Enable QuantCDN integration" is enabled
4. Set your webserver URL to the local webserver loopback address (generally http://localhost), and provide your website domain as the hostname (e.g `www.example.com`)
5. Under the API section enter your account, project, and token details. These can all be found from the [Quant Dashboard](/docs/dashboard/get-started)
6. You should see a "Successfully made a connection to Quant" message at to the top of the page upon saving settings. If not, check the values under the API section and try again.
7. Navigate to the "Seed Settings" tab and tick the "theme assets" box. Click "Save Settings" and you're ready to go!

### Contact Form 7 support

If you use Contact Form 7 and intend on using the [Quant Forms](/docs/dashboard/forms) solution you need to make a small [configuration tweak](/docs/dashboard/forms#contact-form-7-support-wordpress).

### Elementor support

Elementor is a popular drag and drop layout and page manager for Wordpress. Elementor has been tested thoroughly and works well with Quant. Make the following configuration change for best results:

1. Navigate to the advanced Elementor settings page on your Wordpress installation (Elementor > Settings > Advanced)
2. Change the "CSS Print Method" dropdown to "Internal Embedding"


## Preparing the initial seed

Seeding or Hydrating is the act of initial population of Quant. This will take all content, media assets, redirects, etc and push into Quant as a one-time action.

Once the initial seed is completed all further content change will be tracked and pushed to Quant automatically.

1. Visit the "Batches" section of the admin area
2. Here you will find all detected content that needs to be pushed
3. Click each batch, followed by "Start". The content will begin pushing to Quant, you should it appear immediately in your Quant dashboard

### Setting up Cron

Quant also supports pushing content when cron is triggered. This allows for a flexible model where certain aspects of the site are pushed when a cron run occurs (e.g once per hour/day).

This is useful for content such as feeds, or dynamic pages that may change relatively frequently but are not automatically pushed with the Quant plugin.

### When would I need to trigger a re-seed?

If you have made sweeping, site-wide change then a re-seed may be required. This could be in the following situations:
- Global look and feel changes (e.g Theme)
- Global IA change (e.g links in navigation)


