---
id: seed
title: Running a content seed
sidebar_label: Run a Seed
---

## Preparing the initial seed

Seeding or Hydrating is the act of initial population of Quant. This will take all content, media assets, redirects, etc and push into Quant as a one-time action.

Once the initial seed is completed all further content changes will be tracked and pushed to Quant as required (when it changes).

1. Visit the Seed tab
2. Select the items you want to push
3. If you have non-standard content that appears on custom routes be sure to add to the Custom Routes section
4. To run the process via a batch in the Drupal UI check the "Trigger the batch" box. It is recommended you do _not_ do this for very large sites, instead use the threaded queue processor as described below.

:::tip
If you wish to push all historic node revisions select the "Nodes (revision history)" option.
For best results is is recommended you run this queue *first*, followed by the "Nodes" option to push current/published revisions.

Historic revisions only need pushing once. For best results you may wish to limit historic revision seeding to a single thread.
:::

### Threaded queue processor
Very large sites will take some time to seed. To improve throughput you may use the Drush command which allows threaded / concurrent seeding operation.

1. On the Seed for ensure the "Trigger the batch" box is not selected
2. Click the "Queue" button
3. Run `drush quant:run-queue --threads=5` (default is 5)

You may increase the threads accordingly, note that increasing this value too high will result in additional server load - be sure to keep within sensible operating limits.


### When would I need to trigger a re-seed?

If you have made sweeping, site-wide change then a re-seed may be required. This could be in the following situations:
- Global look and feel changes (e.g widespread theme update)
- Global IA change (e.g links in navigation)

## Go-live setup

Ready to start serving traffic via Quant? Great! Follow the [standard go-live process](/docs/golive) to change DNS records.
