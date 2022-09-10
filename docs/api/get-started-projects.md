---
id: get-started-projects
title: Get started with the Project API
sidebar_label: Get started (Projects)
---

:::tip
The full API schema is available at https://docs.dashboard.quantcdn.io
:::

## Overview

The projects API provides an interface to create and manage projects and domains. 

## Create a scoped token

Tokens can be generated from the [Quant Dashboard](https://dashboard.quantcdn.io/profile). If you belong to multiple organizations you may scope the token to select organizations only.

The token will inherit your user role and permissions within organizations.

## Make a request

All API requests must be directed to the `https://dashboard.quantcdn.io/api/v1/`. The path is prefixed with the API version. If backwards-breaking changes are introduced into the API the version number will be bumped, old versions of the API will be maintained and deprecated with plenty of notice. You will need to add specific headers to each request to ensure that the API endpoint can correctly identify you.

Provide the generated token as an `Authorization: Bearer ...` token in the request. An example via curl will look like:

```
curl https://dashboard.quantcdn.io/api/v1/organisations -H "Authorization: Bearer [token]]"
```

Read the full [schema documentation](https://docs.dashboard.quantcdn.io) to better understand how to interact with the API.


:::note
Not all dashboard functionality is available via API. Please raise a feature request if your organization requires additional access.
:::