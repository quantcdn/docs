---
id: page-rules
title: Page Rules
sidebar_label: Page Rules
---

Page Rules allow you to configure powerful traffic routing rules to your projects.

This can be used to proxy specific assets or URL paths to your own servers, implement complex redirection rules, or require authentication for sections of your site.

You can have any number of rules, the first match will win. Simply drag and drop rules to change the priority order.

If no rules match, then Quant will serve the content as per normal.


## Matching on Domain and URL

The first part of creating a new rule is to configure a matching pattern.

![Create URL match](../../static/img/rules-match.png)

It may apply to all domains attached to a project, or specific domains.

The URL match field should be a relative path (e.g `/path/to/match`) and is case insensitive.

## Wildcard matches and captures

You can create complex matching patterns by using the wildcard character (`*`). These matches can be captured and reused in the resulting action.

With this flexibility you can create many complex rule sets, for example:

  * Match content under `/private/files/*` and apply an authentication shield
  * Match content at `*` and proxy the entire domain (traditional CDN)
  * Match content at `/api/v1/*` and proxy to an API microservice (optionally enforcing cache-time on the response)
  * Match content at `/api/v2/*` and proxy to a separate API microservice
  * Match content at `/views/ajax*` and proxy to a backend Drupal instance
  * Match content at `/blogs/*/category/*/posts/*` and redirect to `/categories/$2/year/$1/$3`

In the above examples you can see wildcards can be used to match on part of the URLs. The resulting captures can be re-used whereby `$1` refers to the first match, `$2` refers the second and so on.


## Actions

The action refers to the response Quant will take if the pattern matches.

### Proxy

A proxy will function in the same way as a traditional CDN would, making a backend request to an origin server and serving the resulting content, optionally caching the result at the edge.

For more detail and configuration documentation, see the [CDN Proxy page](./page-rules-proxy).

### Redirect

Redirection will allow for content to redirect internally (relative) or externally (absolute).

![Redirect configuration](../../static/img/rules-redirect.png)

* Redirect to: is the relative or absolute URL to redirect to. You may use captured values (e.g `$1`) in the redirection.
* Redirect code: is the status code to issue with the redirect (permanent or temporary).


### Authentication

Authentication allows you to password protect areas of your site.

![Authentication configuration](../../static/img/rules-auth.png)


## Configure

:::caution
Incorrect configuration can make your site inaccessible. It is recommended you trial Page Rules on a non-production project before applying.
:::
