---
id: drupal
title: Get started with Quant and Drupal
sidebar_label: Initial setup
---

Drupal modules exist for versions 7, 8, 9, and 10. The codebases are [maintained in GitHub](https://www.github.com/quantcdn/drupal) and are synced to the [Drupal.org QuantCDN project](https://www.drupal.org/project/quantcdn) when releases are created. As such, the Drupal.org repo can lag behind the GitHub repo slightly. Issues, feature requests, and pull requests can be raised in GitHub or Drupal.org.

## Setup

1. Download the Quant module via [Drupal.org](https://drupal.org/project/quantcdn) or:
- **Drupal 7:** Drush (`drush dl quantcdn`)
- **Drupal 8, 9, 10:** Composer (`composer require drupal/quantcdn`)
2. Install the module and visit the main Quant configuration page:
- **Drupal 7:** `/admin/config/services/quant`
- **Drupal 8, 9, 10:** `/admin/config/quant`
3. Ensure "Track content changes" is enabled, and you have all entities enabled that should be automatically pushed to Quant when changes are made.
4. Set your "Webserver URL" to the local webserver loopback address (e.g. `http://localhost`), and provide your website domain as the HTTP Host header (e.g. `www.example.com`).
5. Check other options on the main configuration page to see if there are other settings you want to update.
6. Navigate to the API tab and enter your endpoint, organization, project, and token details. These can be found on the **`Integrations` page** in the [Quant Dashboard](/docs/dashboard/get-started).
7. After filling in your API details, you should see a "Successfully connected to ..." message at to the top of the page. If not, check your API tab details and compare them against the information on the **`Integrations` page** in the Dashboard and update as needed.
8. If you are still experiencing issues, create a [support ticket](https://support.quantcdn.io/), so we can help you get set up.

### Shield

If you are using the [Drupal Shield module](https://www.drupal.org/project/shield) (or have other basic authentication enabled on your webserver), then ensure you pass in the username and password in the "Webserver URL" field.

For example if you have username, `user`, and password, `pass`, then the Webserver URL value may look like this:
```
http://user:pass@localhost
```
