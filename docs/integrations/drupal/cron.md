---
id: drupal-cron
title: Using drupal_cron
sidebar_label: Cron setup
---

The optional `drupal_cron` submodule allows for selective content push whenever cron runs. This can be useful to ensure certain routes are always kept fresh, especially those that contain dynamic elements not accounted for in content change tracking.

## Setup

1. Enable the `quant_cron` module
2. Visit the Quant Cron admin page (`/admin/config/quant/cron`).
3. Configure entities or custom routes to push each time cron runs

:::tip
Configure a custom cronjob to run the Quant cron seed more frequently if desired. For example to run every 30m:
```
*/30 * * * * drush php-eval 'quant_cron_cron();' > /var/log/last-quant-cron.log 2>&1
```
:::
