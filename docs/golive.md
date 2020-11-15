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