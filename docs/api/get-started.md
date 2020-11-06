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

Quant uses bearer tokens for authentication. All requests must specify the `Quant-Token` request header and need to send the value presented in your dashboard. If you haven't created a project head over to your [dashboard](https://dashboard.quantcdn.io) set one up to retrieve your token and start publishing!

To further identify your request you are required to add `Quant-Customer` and `Quant-Project` request headers. These will be validated against the `Quant-Token` to ensure that the request is valid.

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

### Sending markup and content

This is the main action of the Quant API and is how we register paths and content to be served from those paths. When you send markup you will need to tell Quant what URL this markup will be accessible by, if the content is published and additional metadata.

```
curl -X POST https://api.quantcdn.io/v1 -d @./payload.json
```

```json
{
  "content": "<html><body><img src="/banner.jpg" /><h1>My static web page</h1></body></html>",
  "url": "/",
  "published": true,
  "info": {
    "author": "Joe Static",
    "log": "Revision log message"
  }
}
```

The Quant API will scan your markup and identify assets. It will respond to your request with a list of assets that already exist in Quant (along with md5 values) so you only need to push files that have changed or do not already exist.

#### Custom headers

You may optionally provide custom headers along with the content payload. This allows fine-grained control of the headers that are emitted for each individual piece of content. Simply include key/value pairs under the `header` key:

```json
{
  "content": "{\"key\": \"example\", \"value\": \"example\"}",
  "headers": {
    "content-type": "application/json"
  }
}
```

:::tip
This approach is useful for machine-readable content that is not markup. It allows for this content to be sent inline rather than as a binary file.
:::

### Sending assets

The second part to a web page is all the assets that help provide the visual experience. This includes images, javascript, stylesheets, video files and all other static assets. Files are sent as multipart uploads directly to the Quant API. Quant will handle inspecting and creating revisions of the assets.

To add a URL for the file you need to specify the `Quant-File-Url` header.

```
curl -X POST https://api.quantcdn.io/v1 -F "filename=@./banner.jpg" -H "Quant-File-Url: /banner.jpg"
```

:::tip
Send markup before binary files. The response will show any files already in Quant and reduce the number of API requests you need to make to seed your static website.
:::

### Custom headers

As with content, files may also present custom headers. These are passed in as encoded JSON using the `Quant-File-Headers` header on the POST request.

```
curl -X POST https://api.quantcdn.io/v1 -F "filename=@./image.jpg" -H "Quant-File-Url: /path/to/extensionless-image" -H "Quant-File-Headers: {\"content-type\": \"image/jpeg\"}"
```

:::tip
This is generally not required during normal operation, but included for completeness. Common headers expected for binary files such as `Content-type` and `Content-length` are automatically determined.
:::

## Commonly used endpoints

### Metadata

When you request metadata about your site, Quant will send a paginated API response containing information about your files that is not served to end users. This includes information like the published revision, the number of revisions, where the file is accessed and more.

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

You may query for the metadata of individual URLs using the `/url-meta` endpoint.
```
curl -X POST -d '{"Quant-Url": ["/styles.css", "/about-us" ]}' https://api.quantcdn.io/url-meta
```

### Unpublish content

`PATCH /unpublish` instructs Quant that a particular path is no longer accessible. This will cause Quant to issue a 404 for the path instead of the content stored for the path.

```
curl -X PATCH -H "Quant-Url: /path/to/unpublish"
```

### Restore a previous revision
`PATCH /publish/[REVISION_ID]` allows a previous revision to become the actively published content. You may retrieve revision ids via the metadata endpoints.

```
curl -X PATCH -H "Quant-Url: /content" https://api.quantcdn.io/publish/123
```

### Create a redirect

`POST /redirect` creates a redirect.

This allows you to redirect one path to another when Quant is serving pages. You can control the status code that quant serve when you create this redirect.

```json
{
  "url" : "/url/to/redirect",
  "redirect_url" : "/target/path",
  "redirect_http_code" : 301,
  "published" : true
}
```

### Create a proxy

`POST /proxy` creates an origin proxy.

This will cause Quant Serve to pass the request directly back to the origin server.

```json
{
  "url" : "/contact-us",
  "destination": "https://123.123.123.123/contact-us",
  "host": "www.example.com",
  "published": true,
  "basic_auth_user": "username",
  "basic_auth_pass": "password"
}
```
