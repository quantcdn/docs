---
id: domains
title: Managing domains
sidebar_label: Domains and SSL
---

The "Domains" section of the dashboard will show all domains currently attached to the currently active project.

![Domains section](/img/quant-dashboard-domains.jpg)

Attach domains by clicking the "Add domain" button in the upper right.

Domains should be provided in the format `www.example.com` with no protocol or trailing path.

A preview domain is automatically created for each project. This allows you to view and test your website on Quant prior to any DNS change. This preview domain:
  * Emits `robots.txt` content to prevent search engine indexing
  * Can have [authentication applied](/docs/dashboard/authentication) to prevent public access

SSL certificates will automatically be generated (provided by [Let's Encrypt](https://letsencrypt.org/)). You may provide your own certificates if required.

Once a domain has been added DNS instructions will appear at the top of the table, and we will monitor for DNS change to take effect. When we detect your DNS has been configured correctly the "DNS engaged" value will be "Yes".

Certificates are automatically created and renewed periodically via our automated process, however if you need to manually trigger a SSL certificate generation (e.g during go-live to minimise SSL errors) then you may click the "Renew" button next to any domain.

:::tip
Quant will always redirect insecure traffic to HTTPS. For improved security you should consider [enabling HSTS](/docs/dashboard/custom-http-headers) via the custom headers tool
:::

:::tip
If you require any assistance with DNS configuration please do not hesitate to contact us.
:::