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

```
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

The second part to a web page is all the assets that help provide the visual experience. This includes images, javascript, stylesheets and even video files! Files are sent as multipart uploads directly to the Quant API. Quant will handle inspecting and creating revisions of the assets.

To add a URL for the file you need to specify the `Quant-File-Url` header.

```
curl -X POST https://api.quantcdn.io/v1 -F "filename=@./banner.jpg" -H "Quant-File-Url: /banner.jpg"
```

:::tip
If you send markup Quant will identify only files that have changed or are missing so you don't have to send everything each time.
:::

## Commonly used endpoints

### Metadata

All files deployed to Quant have metadata stored about them.

```
GET /global-meta
```

### Unpublish an asset



```
PATCH /unpublish
```

### Create a redirect

This endpoint allows you to redirect one route to another. The destination route needs to exist in Quant to be a valid redirect location.

```
POST /redirect
```

### Create a proxy

If you use one of Quants integration methods you might need to rely on origin for processing some data. This allows you to create a direct passthru from Quant Serve when a request is made for the URL you define it will be proxied directly back to your origin server.

```
POST /proxy
```
