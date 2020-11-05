---
id: domains
title: Adding your domain to Quant
sidebar_label: Domains and SSL
---

The 'Domains' section of the dashboard will show all domains currently attached to the currently active project.

To add or edit domains click the 'Edit domains button' in the upper right.

When "Basic Auth" is enabled the domain will be protected from public access via username and password. This is set on a project level rather than per-domain, click the 'edit domains' button to alter.

When we detect your DNS has been configured correctly the "DNS engaged" value will be "Yes".

HTTPS certificates are automatically created and renewed via our automated process, however if you need to manually trigger a SSL certificate generation (e.g during go-live to minimise SSL errors) then you may click the "Renew" button next to any domain.

:::tip
Quant will always redirect insecure traffic to HTTPS. For improved security you should consider [enabling HSTS](/docs/dashboard/custom-http-headers) via the custom headers tool
:::