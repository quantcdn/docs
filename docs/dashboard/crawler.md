---
id: crawler
title: Crawler
sidebar_label: Crawler
---

The crawler can create a static snapshot of an entire website, or subset via manually provided URLs. Crawled web content including all assets (images, CSS, JavaScript, documents) will all be stored in the Quant static edge.

Advanced crawler configuration including headless JavaScript-enabled browsers, rules for discovering additional links, pagination clicking, and much more are available.

Crawler configurations may be run on a schedule, allowing content to be kept up to date automatically.

There are a variety of use cases, including:
* Creating a static archive of a website before decommissioning
* Keeping a fresh copy of a website for failover/disaster recovery (DR)
* Keeping a full revision history of all website content accessible via the revisions viewer
* Crawling a website daily and serving public traffic from the Quant static edge directly


## Create a new crawler configuration

1. Ensure you have created a new project in Quant Dashboard and have it selected as the active project.
2. Navigate to Crawler > Configs and click the "Add" button.
3. To create a simple crawler provide a descriptive name and the domain to crawl (e.g `https://www.quantcdn.io`).
4. If your website requires JavaScript to render correctly you may choose the "headless browser" mode.
5. Optionally, you may provide a list of URLs to crawl if you wish to limit the crawl to a subset of pages.

## Run the crawler

After creating a crawler configuration you may run it manually from the Crawl > Configs page.

![Crawler table](/img/crawler-table.png)

Click **Run > All URLs** to begin a new crawl of your website. You can monitor the result from the Crawl > Runs section of the Dashboard.

:::note
In order to unlock full crawler options and increase the throughput you will need to verify the domain. Follow the instructions in the "Domain verification" section to verify via either DNS record or by placing a web-accessible file in the defined location.
:::

## View the result

After the crawler has completed you can view the result on the preview domain. To find your preview domain, go to the Domains section of the dashboard and click the preview domain link.

The crawler should find all website pages and assets, however some content may not be possible for the crawler to find. For example, if there are pages on your website that are not linked to anywhere publicly, or available in the sitemap, then you may need to provide the URLs manually to let the crawler know about them.


## Advanced configuration and scheduling

Advanced configuration and creating schedules for crawlers are available. Contact your support representative for more information.