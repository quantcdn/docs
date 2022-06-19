---
slug: golive
title: Going live on QuantCDN
sidebar_label: Go-live process
---

The go-live process on Quant is simple. A preview domain will be generated for each project, allowing validation and testing before changing any DNS records.

Assuming you have already [created a project](/docs/welcome) and populated with content:

1. Ensure the [domains](/docs/dashboard/domains) attached to your project are correct
2. Validate and test your website contains all content as expected on the preview domain
3. Visit the ["Domains"](https://dashboard.quantcdn.io/domains) section of the dashboard and follow the DNS record instructions provided
4. Refresh the ["Domains"](https://dashboard.quantcdn.io/domains) section and confirm the "DNS engaged" value. This may take a few minutes depending on your DNS TTL value.
5. Check your website and confirm everything is working as expected. If you receive an SSL error you may click the "Renew" button next to the domain from Quant Dashboard, otherwise it will automatically generate periodically.

:::tip
If you are unsure about DNS values, where to change, or generally need support with the go-live process please contact support via your Quant Dashboard.
:::

## Maintaining access to your CMS

Once you have moved public traffic to Quant one issue remains: How to retain access to your WordPress or Drupal site for ongoing content authoring and administration.

Generally the simplest thing to do is move your CMS to a separate domain.

### WordPress

Set your new WordPress CMS domain in your `wp-config.php` file as below, or follow the [WordPress.org guide](https://wordpress.org/support/article/changing-the-site-url/) for more options.

```
define( 'WP_HOME', 'https://wordpress.example.com' );
define( 'WP_SITEURL', 'https://wordpress.example.com' );
```

The most flexible choice is to allow your Wordpress site to respond on any domain, and under any protocol. This allows the site to run under both `edit.example.com` as well as `www.example.com`.

To allow this simply make the following change in `wp-config.php`:
```
$protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === 0 ? 'https://' : 'http://';

if (!empty($_SERVER['HTTP_HOST'])) {
  define('WP_SITEURL', $protocol . $_SERVER['HTTP_HOST']);
  define('WP_HOME', $protocol . $_SERVER['HTTP_HOST']);
}
```


### Drupal

Ensure your CMS domain is included in your Drupal `settings.php` file (`trusted_host_patterns` array). For example:
```
$settings['trusted_host_patterns'] = [
  // Public URLs.
  '^www\.quantcdn\.io$',
  '^quantcdn\.io$',
  // Editorial / admin domain.
  '^edit\.quantcdn\.io$'
];
```

For more detail see the [Drupal.org page](https://www.drupal.org/docs/installing-drupal/trusted-host-settings).


:::tip
For improved security choose a highly randomised CMS domain, put behind basic auth, or move to a private network. You have much greater control over access once you use Quant to serve public traffic.
:::
