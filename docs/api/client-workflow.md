---
id: client-workflow
title: Ideal API client workflow
sidebar_label: API client workflow
---


## Step 1: Send markup

The first request should send page markup. The Quant service will respond with detected assets (e.g images, stylesheets, etc) and include existing MD5 values if the files already exist in Quant.

An example content payload:
```json
{
  "url" : "/",
  "content" : "<html><head><script src='/path/to/script.js'></script><link rel='stylesheet' href='/path/to/styles.css'></head><body><h1>Welcome!</h1><img src='/path/to/image.jpeg?itok=aB33k'><form action='/contact-us'></form></body></html>",
  "published" : true,
}
```

.. and example response from Quant:
```json
{
   "published":true,
   "byte_length":213,
   "error":false,
   "md5":"e808012771922b894138b757fa41fa10",
   "attachments":{
      "forms":[
         {
            "path":"\/contact-us"
         }
      ],
      "js":[
         {
            "path":"\/path\/to\/script.js",
            "existing_md5":"a152e0eb61138e9a07a176d75eee7f35"
         }
      ],
      "css":[
         {
            "path":"\/path\/to\/styles.css",
            "existing_md5":"891ca2f45bfeb77cb22ad89e0fa448b6"
         }
      ],
      "media":{
         "video":{
         },
         "audio":{
         },
         "images":[
            {
               "existing_md5":"928cf351ba7ba6e73bf34033b7c1c0dd",
               "path":"\/path\/to\/image.jpeg",
               "full_path":"\/path\/to\/image.jpeg?itok=aB33k"
            }
         ],
         "documents":{
         }
      }
   },
   "type":"content"
}
```

## Step 2: Local comparison of MD5 values

Based on the response the client should iterate through relevant attachments and compare `existing_md5` values with local asset hashes. Only files that do not have any existing MD5 (or the MD5 does not match) need to be uploaded to ensure the process is as efficient as possible.