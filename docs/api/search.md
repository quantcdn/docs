---
id: search
title: Custom search records
sidebar_label: Search records
---

When posting content to the API you may explicitly define values for use in Search.

This can be useful for more control over structured data (e.g title/content/filterable attributes) rather than relying on the content extractors.


## Sample payload

Simply include a `search_record` object in your content payload structured like so:

```
curl -X POST https://api.quantcdn.io/v1 -d @./payload.json
```

```json
{
  "content": "<html><body><img src="/banner.jpg" /><h1>My static web page</h1></body></html>",
  "url": "/",
  "published": true,
  "info": {
    "author_name": "Joe Static",
    "author_email": "joe@quantcdn.io",
    "log": "Included custom search_record values"
  },
  "search_record": {
    "title" : "Manually provided title",
    "content" : "This page has a lot of content. It is manually provided via search_record",
    "image" : "https://via.placeholder.com/custom",
    "categories" : {
      "tags" : [ "manual-tag-1", "manual-tag-2" ],
      "custom_taxonomy" : [ "apple", "banana", "pineapple" ]
    }
  }
}
```

### Supported keys
* `title`: Used both as a searchable attribute and the title used in search results
* `content`: Used both as a searchable attribute, and the content snippet displayed in search results. May contain markup (tags will be stripped). May be a large content body (e.g could be the entire page content)
* `image`: Used on some search result displays when available. Should be a full URL to an image.
* `categories`: An object containing any number of categories with an array of terms. Allows for faceting and filtering.

All keys within `search_record` are optional. The [configured extractors](/docs/dashboard/search#content-extractors) will attempt to determine content as a fallback.

Search records can be updated independently of content. This means even if the static content md5 is unchanged the record will still be updated in the search index.