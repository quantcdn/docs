---
id: forms
title: Using Quant Forms
sidebar_label: Forms
---

Quant provides a simple way to capture form submissions on your existing web forms.

## Create a new form

From the "Forms" section click "New form" and enter the URL to accept form submissions.

It should be the same URL your HTML form posts values to, for example if your form was `<form action="/contact" action="POST">` you should use `/contact` here.

## Configuring your form

### Basic settings

Check the **Enable Quant Forms** checkbox to enable forms for the route.

Optionally provide success, missing value, and generic failure messages. These may contain markup.

![Enable Quant Forms](/img/quant-forms-settings.jpg)

### Mandatory & remove fields

Add **Mandatory fields** as required. Submissions will be rejected if these values are not present.

Optionally set **Remove fields** to strip specific form values from the result.


### Notifications

Quant currently provides two notification options: Email and Slack.

![Notification Configuration](/img/form-notifications.jpg)

Use **Disable HTML emails** to remove rich-text emails.
Use **Include submission data** to include submission values in the notification message itself.
Set the email to, cc, from, subject values as desired.
Optionally provide a **Slack webhook** in the format `https://hooks.slack.com/services/a/b` to receive notifications via Slack.

To further customize emails received you may set timezone and provide a business / organization name.

## Spam protection

Quant has spam protection built in, however it is recommended you also protect your forms with a honeypot to prevent spam submissions from bots.

To do this, add a field to your form that should _not_ be filled in. For example:
```
<input type="hidden" name="fname">
```

![Quant Forms honeypot](/img/quant-forms-honeypot.jpg)

Add this to the Quant configuration under "Honeypot fields". If a form is received with this value filled out the form will be rejected with an error.


## View submissions

Your form submissions are available via the Quant Dashboard. Go to the "Forms" section, and view any submissions associated with a webform.

Submitted files will also be available for download.


## Submission result messages

Quant will inject the result of a form submission in the markup. This allows you to return a success/failure message to end users upon submission.

Simply add a container to your page with an attribute: `id="quant-form-result"`. This is where the result messages will render upon submission. For example:
```
<div id="quant-form-result"></div>
```
