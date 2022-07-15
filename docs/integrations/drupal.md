---
id: drupal
title: Get started with Quant and Drupal
sidebar_label: Initial setup
---

Drupal modules exist for 7, 8, and 9. The codebases are [maintained in GitHub](https://www.github.com/quantcdn/drupal). Please raise issues, feature and pull requests there.

## Setup

1. Download the Quant module either via composer (`composer require drupal/quantcdn`) or from [Drupal.org](https://drupal.org/project/quantcdn)
2. Install the module and visit the Configuration > Quant admin page (`/admin/config/quant`).
3. Ensure "track content changes" is enabled, and you have each entity enabled that should automatically push to Quant.
4. Set your Webserver URL to the local webserver loopback address (e.g http://localhost), and provide your website domain as the HTTP Host header (e.g `www.example.com`)
5. Navigate to the API tab and enter your account, project, and token details. These can all be found from the [Quant Dashboard](/docs/dashboard/get-started)
6. You should see a "Successfully connected to ..." message at to the top of the page. If not, check the values under the API tab and try again.

### Shield

If using Shield (or have other basic authentication enabled on your webserver) then ensure you pass in the username and password in the Webserver URL field.

For example if you have username: `user` with password: `password` then the Webserver URL value may look like this:
```
http://user:pass@localhost
```