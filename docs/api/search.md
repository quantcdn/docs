---
id: search
title: Custom search records
sidebar_label: Search records
---

Search records can be independently managed via the Search API. You may also explicitly define search records at the same time content is posted.

This can be useful for more control over structured data (e.g title/summary/content/filterable attributes) rather than relying on the content extractors.

## Using the Search API

See the [Getting Started](/docs/api/get-started) section first to ensure you can authenticate and make successful API connections.

### Check index status

Use this endpoint to check index size, outstanding tasks, and basic configuration.

```
curl -H "Quant-Customer: (example-customer)" -H "Quant-Project: (example-project)" -H "Quant-Token: (project-token)" https://api.quantcdn.io/v1/search
```

### Creating new records

Use this endpoint to create or update search records. Mandatory keys are `title`, `url` and `content`.

Provide an array of search records - for example consider a `search-records.json` file containing the following:
```
[
    {
        "title": "This is a record",
        "url": "/blog/page",
        "summary": "The record is small and neat",
        "content": "Lots of good content here. But not too much!",
    },
    {
        "title": "Fully featured search record",
        "url": "/about-us",
        "summary": "The record contains all the trimmings.",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id dolor facilisis, ornare erat et, scelerisque odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "image": "https://www.quantcdn.io/images/about.jpg",
        "categories": [ "Blog", "Commerce", "Jamstack" ],
        "tags": [ "Tailwind" , "QuantCDN" ]
    }
]
```

An example curl request:
```
curl -X POST -H "Quant-Customer: (example-customer)" -H "Quant-Project: (example-project)" -H "Quant-Token: (project-token)"  -d @./search-records.json https://api.quantcdn.io/v1/search
```



### Make an attribute filterable (facet support)

As above, Search Records may contain attributes you may wish to filter on (for example `categories` and `tags`). Let the Search API know about new attributes like so:

```
curl -X POST -H "Quant-Customer: (example-customer)" -H "Quant-Project: (example-project)" -H "Quant-Token: (project-token)" -d '["categories", "tags"]' https://api.quantcdn.io/v1/search/facet
```

### Deleting individual record

Use the `DELETE` method combined with a `Quant-Url` header to remove an item from the index.

```
curl -X DELETE -H "Quant-Customer: (example-customer)" -H "Quant-Project: (example-project)" -H "Quant-Token: (project-token)" -H "Quant-Url: /about-us" https://api.quantcdn.io/v1/search
```

### Clear entire index

Use the `DELETE` method like so to clear the entire search index.

```
curl -X DELETE -H "Quant-Customer: (example-customer)" -H "Quant-Project: (example-project)" -H "Quant-Token: (project-token)" https://api.quantcdn.io/v1/search/all
```




## Custom Search Record when posting content

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
    "summary" : "Content snippet to display in search results.",
    "content" : "This page has a lot of body content. It is manually provided via search_record",
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
* `summary`: Used both as a searchable attribute and the content snippet displayed in the search results.
* `content`: Used as a searchable attribute. May contain markup (tags will be stripped). May be a large content body (e.g could be the entire page content)
* `image`: Used on some search result displays when available. Should be a full URL to an image.
* `categories`: An object containing any number of categories with an array of terms. Allows for faceting and filtering.

All keys within `search_record` are optional. The [configured extractors](/docs/dashboard/search#content-extractors) will attempt to determine content as a fallback.

Search records can be updated independently of content. This means even if the static content md5 is unchanged the record will still be updated in the search index.