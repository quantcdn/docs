---
id: custom-http-headers
title: Custom HTTP headers
sidebar_label: Custom headers
---

Project-wide HTTP headers can be configured via the "Custom headers" section of the dashboard.

This global configuration is useful for hardening security headers, such as those explained below.

## Content Security Policy (CSP)

The `Content-Security-Policy` header can be used to define which sources are approved to access content from your website, and block requests coming from disallowed sources. This is a key part of preventing Cross Site Scripting (XSS) and code injection attacks.

## Cross-Origin Resource Sharing (CORS)

While CSP controls what may run on the website itself, the CORS header `Access-Control-Allow-Origin` prevents content being accessed or embedded on other hosts.

This can prevent your content being embedded in iFrames or hotlinked on external sites.

## HTTP Strict Transport Security (HSTS)

The `Strict-Transport-Security` header restricts web browsers to only access content on your website via TLS, and blocks insecure HTTP connections.

Quant will automatically redirect non-HTTP requests to HTTPS - however you should be sure the SSL certificate has been provisioned and valid **before enabling HSTS headers**.