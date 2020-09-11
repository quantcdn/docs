---
id: get-started
title: Get started with the Quant API
sidebar_label: Get started
---


## Make a request

All API requests must be directed to the `https://api.quantcdn.io/v1/`. The path is prefixed with the API version. If backwards-breaking changed are introduced into the API the version number will be bumped, old versions of the API will be maintained and deprecated with plenty of notice. You will need to add specific headers to each request to ensure that the API endpoint can correctly identify you.

In CURL a request will look like;

```
curl -H "Quant-Customer: (your account)" -H "Quant-Project: (your project)" -H "Quant-Token: (your token)" https://api.quantcdn.io/v1/ping
```

## Authentication

Quant users bearer tokens for authentication. All requests must specify the `Quant-Token` request header and need to send the value presented in your dashboard. If you haven't created a project head over to your [dashboard](https://dashboard.quantcdn.io) set one up to retrieve your token and start publishing!

To further identify your request you are required to add `Quant-Customer` and `Quant-Project` request headers. These will be validated against the `Quant-Token` to ensure that the request is valid.

## Rate limiting

@TODO

## Pagination

Requests that return multiple items will be paginated to 100 items by default. You can specify the `page` query parameter to iterate through the result set. You can also change the number returned by quant with the `per_page` parameter.

Paginated API endpoints will return data under a `records` key.

### Metadata

Paginated result sets will include metadata to help identify how many results are available for any given call. These are available in the result object as `page`, `page_size`, `total_records` and `total_pages`.

## Sending content to the API

The most common API action is sending content, either new content or a content revision. Quant supports two types of files;

- HTML (markup)[#sending-markup] as pages
- Accompanying (assets)[#sending-assets] like images, javascript and stylesheets

Quant is based on atomic deployments, each time a file changes Quant treats it as if a new file was submitted to the API. This allows Quant to show point in-time representations of any asset that has been sent to Quant.

### Sending markup

This is the main action of the Quant API and is how we register paths and content to be served from those paths. When you send markup you will need to tell Quant what URL this markup will be accessible by, if the content is published and additional metadata.

```
curl -X POST https://api.quantcdn.io/v1 -d @./payload.json
```

```json
{
  "content": "<html><body><img src="/banner.jpg" /><h1>My static web page</h1></body></html>",
  "url": "/".
  "published": true,
  "info": {
    "author": "Joe Static"
  }
}
```

The Quant API will scan your markup and identify any missing assets by comparing everything it can find. It will respond to your request with a list of assets that you will need to send before you have a complete static representation of your website.

### Sending assets

The second part to a web page is all the assets that help provide the visual experience. This includes images, javascript, stylesheets, video files and all other static assets. Files are sent as multipart uploads directly to the Quant API. Quant will handle inspecting and creating revisions of the assets.

To add a URL for the file you need to specify the `Quant-File-Url` header.

```
curl -X POST https://api.quantcdn.io/v1 -F "filename=@./banner.jpg" -H "Quant-File-Url: /banner.jpg"
```

:::tip
If you send markup Quant will identify assets that are missing, this reduces the number of API requests you need to make to seed your static website.
:::

## Commonly used endpoints

### Metadata

When you request metadata about your site, Quant will send a paginated API response containing information about your files that is not served to end users. This includes information like the published revision, the number of revisions, where the file is access and more.

The endpoint requires the standard authentication headers described above.

```
GET /global-meta
```

```json
{
  "global_meta": {
    "records": [
      {
        "last_modified": "2020-07-20T10:21:11",
        "meta": {
          "url": "/about-us",
          "type": "content",
          "seq_num": 3,
          "published": true,
          "byte_length": 41750,
          "published_md5": "1476374aafe25fb499729ee7e4505e62",
          "date_timestamp": 1595240471,
          "revision_count": 3,
          "published_revision": 3,
          "highest_revision_number": 3
        }
      },
    ]
  }
}
```

### Unpublish an asset

`PATCH /unpublish` instructs Quant that a particular path is no longer accessible. This will cause Quant to issue a 404 for the path instead of the content stored for the path.

```json
{
  "published": false,
  "published_revision": 2,
  "url": "\/about-us",
  "revisions": {
    "1": {
      "md5": "cf1cbd8d24db376425cdc78033a1cdfb",
      "type": "content",
      "byte_length": 135,
      "revision_number": 1,
      "date_timestamp": 1595240437
    },
    "2": {
      "revision_number": 2,
      "date_timestamp": 1595240449,
      "byte_length": 41750,
      "md5": "1476374aafe25fb499729ee7e4505e62",
      "type": "content"
    }
  },
  "transitions": {},
  "highest_revision_number": 2,
  "seq_num": 4
}
```

### Create a redirect

`POST /redirect` creates a redirect.

This allows you to redirect one path to another when Quant is serving pages. You can control the status code that quant serve when you create this redirect.

```json
{
  "revision_number": 3,
  "redirect_http_code": 301,
  "md5": "db2e492983fb28e9e7f86d0487f5670b",
  "published": true,
  "byte_length": 0,
  "date_timestamp": 1599217598,
  "url": "\/nalas.jpg",
  "redirect_url": "\/",
  "highest_revision_number": 2,
  "type": "redirect"
}
```

### Create a proxy

`POST /proxy` creates an origin proxy.

This will cause Quant Serve to pass the request directly back to the origin server.

```json
{
  "revision_number": 1,
  "destination": "https:\/\/www.google.com.au",
  "published": true,
  "byte_length": 0,
  "md5": "592ea306c467b2d055e60f6c83fc322d",
  "url": "\/google",
  "type": "proxy",
  "highest_revision_number": 0,
  "date_timestamp": 1599218157
}
```
