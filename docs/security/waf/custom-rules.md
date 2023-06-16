---
title: Custom rule definitions
sidebar_lable: Custom rules
---

QuantWAF allows developers and security experts to provide configuration values to further customize the firewall's behavior. This enables further configuration for the Core Rule Set that is provided by [Coraza](https://coraza.io/) and allows completely custom rules to be included in the firewall.

## Writing a custom rule

QuantWAF will load all `.conf` files that are present in `/opt/proxy_config/custom-rules`. Rules are written in the [ModSecurity rules language](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-(v3.x)).

### Overriding configuration values

ModSecurity comes preconfigured with a number of variables that are used by the rulesets. These rules are defined as default values if no prior rule has set them. This enables fine-tuning of a number of parameters for the firewall.

**Sample configuration value**

The allowed content types by the default WAF configuration is:

- application/x-www-form-urlencoded
- multipart/form-data
- multipart/related
- text/xml
- application/xml
- application/soap+xml
- application/x-amf
- application/json
- application/cloudevents+json
- application/cloudevents-batch+json
- application/octet-stream
- application/csp-report
- application/xss-auditor-report
- text/plain

Drupal relies heavily on the JSON:API specification which states that the `application/vnd.api+json` content type should be used when making requests. Requests that use this content type will be blocked.

This can be overridden by providing a custom `.conf` file that sets the `allowed_request_content_type` variable.

```
# Default HTTP policy: allowed_request_content_type (rule 900220)
SecRule &TX:allowed_request_content_type "@eq 0" \
  "id:1,\
  phase:1,\
  pass,\
  nolog,\
  ver:'OWASP_CRS/4.0.0-rc1',\
  setvar:'tx.allowed_request_content_type=|application/x-www-form-urlencoded| |multipart/form-data| |multipart/related| |text/xml| |application/xml| |application/soap+xml| |application/x-amf| |application/json| |application/cloudevents+json| |application/cloudevents-batch+json| |application/octet-stream| |application/csp-report| |application/xss-auditor-report| |text/plain| |application/vnd.api+json|'"
```


