---
slug: welcome
title: Welcome to Quant
sidebar_label: Welcome
---

Quant is an all-in-one CDN and static website host designed to provide you the benefits of traditional CDN solutions as well as options for static web / Jamstack deployments. Quant provides integrations for popular CMS and static generators to ensure low-effort to getting up and running, whether in traditional CDN or static web mode.

While the fundamental idea is to ensure a low barrier to enjoy the many [benefits of the static web](https://www.quantcdn.io/benefits), there are rich [APIs](/docs/api/get-started-content) for developers to create their own custom integrations.

## Discover Quant

Read more about the [features](https://www.quantcdn.io/features) that drive Quant, and what makes this solution different from other CDN providers.


## Get started

### Create your first project

Projects are maintained via the [Quant dashboard](/docs/dashboard/get-started). When logged in, click the "New Project" link on the left sidebar to start the project creation process.

### Set up a new CDN project

From the "New Project" screen simply select the CDN option and follow the steps. Read more about setting up a project for [traditional CDN delivery](/docs/guides/cdn-setup).

## Static / Jamstack setup

### CMS integration

CMS integrations allow for an initial one-click push of an entire website, as well as ongoing content change tracking and automatically pushing updates to the Quant static edge. These integrations ensure your content is published on Quant the second it changes on your CMS.

* [Drupal](/docs/integrations/drupal) (version 7, 8, 9 and 10+)
* [WordPress](/docs/integrations/wordpress) version 5+

### Popular static web generators

Popular static web builders operate by generating compiled assets (markup, JavaScript, CSS, images, etc) as files on disk, ready for deployment to QuantCDN.

Use the [CLI tool](/docs/cli/get-started) to deploy static assets, or during a [CI build pipeline](/docs/cli/continuous-integration).

### Forms

Webforms are a common challenge when moving to the static web. Quant has a powerful, embedded solution that is simple to enable.

[Read more about setting up Quant Forms](/docs/dashboard/forms).

### Search

Our seamless search solution allows content to automatically index and remain in sync as it changes.

Create structured search records and build faceted search pages with ease.

[Read more about setting up Quant Search](/docs/dashboard/search).

## Domains and TLS
[Add an existing domain](/docs/dashboard/domains) to Quant to assign a custom domain to your site. We provide free automatic SSL certificates via [Let's Encrypt](https://letsencrypt.org/).


## Developers
### CLI
You can use the [Quant CLI tool](/docs/cli/get-started) to help automate integration with the Quant API. This allow you to trigger deployments, publish and unpublish routes and view metadata.

It is also capable of [crawling and migrating](/docs/cli/crawler) an entire site to Quant in minutes.

### API
To get started with the Quant API, learn how to [authenticate](/docs/api/get-started-content#make-a-request), [seed content](/docs/api/get-started-content#sending-content-to-the-api) and move into advanced topics like managing workflows and content states.
