---
id: s3-sync
title: S3 sync
sidebar_label: S3 sync
---

This feature allows the latest published version of all content pushed to Quant to be synced to an S3 bucket in your own account.

All content, media items and redirects are included.

This allows you to easily access, distribute, and serve your own static snapshot that will always be kept up to date via the standard Quant service.

## Configure

To configure you will need to share S3 bucket settings with the Quant Support team directly. Lodge a new support ticket and we will walk you through the process of securely sharing the following details:

* S3 region
* S3 bucket
* S3 access key
* S3 secret key

**IMPORTANT:** Be sure to scope the IAM user appropriately. Quant only requires access to Put and Delete items in an S3 bucket.

The Quant Support team will provide you with a special S3 key to enter under your project settings. Navigate to the projects section of the dashboard, and edit the relevant project to add the S3 sync key.

_Note:_ For best results the S3 sync should be configured before the first content seed.

![Enable S3 sync](../../static/img/quant-dashboard-s3.jpg)

## Optionally configure S3 as a static site

If you wish you may serve content directly from the synced S3 bucket (using AWS Static website hosting) rather than using the Quant CDN service.

Note the following should be taken into consideration in this situation:
* Content and media add/update/delete operations are supported
* Redirects are supported
* Error pages (e.g 404) are supported
* Content editing at edge (e.g via WYSIWYG or code editors) is supported
* Page Rules (e.g proxies, redirects, authentication) will **not** work
* Custom Headers will **not** work
* Quant Forms will **not** work

To enable this:
1. Enable Static website hosting on the S3 bucket
2. Set index document to `index.html`
3. Set error document to `_quant404/index.html`
4. Disable "Block public access (bucket settings)" options to allow public access
5. Attach a permissive bucket policy to allow direct public access, e.g:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

:::caution
Quant expects to control the content in the S3 bucket. If you update or delete content it may cause synchronization issues. Contact Quant Support if you require assistance to resolve this.
:::
