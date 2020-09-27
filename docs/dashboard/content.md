---
id: content
title: Managing content and revisions
sidebar_label: Content and Revisions
---

Managing content and revisions is a fundamental part of the Quant offering. Revisions will automatically be created when content change is detected.

The "Content" section of the dashboard will provide a full view of all content in the Quant platform. This table will allow for searching and sorting content and displaying the URL, last modified date/time, published status, and revision count.

Click the "View" button to load the URL on the preview domain.

The equivalent can be found for files and media in the "Files & Media" section.

##  Managing revisions
### View revisions

Click on the "View Revisions" button to load the revisions viewer for any piece of content in Quant.

The revisions viewer will allow you to go back in time and view any historic content revision. Metadata values for `log` and `author` will display if they were provided when the content revision was pushed. Similarly if content had a publish schedule attached it will display in the revision detail.

### Unpublish content

Click on the "Unpublish" button with the currently published revision selected. This will mark the content as unpublished, and immediately start throwing 404 errors to site visitors.

### Restore revision

Select any historic revision and click the "Publish revision" button to mark this revision as actively published. This will replace any currently published revision. The content will be immediately available to site visitors.

##  Editing or creating new content
In some instances you may wish to create or edit content directly via the Quant Dashboard. To do this click the "Edit" button next to any content item in the table.

From here you have two options: WYSIWYG or Code editor.

### Using the WYSWIWYG editor

The WYSIWYG editor (built with [Grapes.js](https://github.com/artf/grapesjs)) attempts to load all assets in a full visual representation. This process may not be perfect, it is likely to fail if the page has a lot of javascript requirements that do not render correctly in the inline frame.

If the content is too complex, or this process fails, then please use the Code editor.

Simply click on any element in the page to edit. Text can be edited directly, and attributes such as classes, id, and simple style options (width, margin, padding, font, etc) can be edited using hte panel on the right.

For finer grained control you can edit the markup directly by clicking the "Edit Code" button in the top toolbar.

Once you are happy with content change click the "Save" icon.

:::tip
You can create an entirely new page by editing a page, then enter a new URL after clicking the "Save" button. This is especially useful when you have content templates to use as a base.
:::

### Using the Code editor

There is a fully fledged Code editor (using the [Monaco](https://microsoft.github.io/monaco-editor/) editor) built in for more advanced content editing.

To open the tool panel press the "F1" key on your keyboard.

To save press "F1" and search for the "Save (new published revision)" action.

:::tip
You can create an entirely new page by editing a page, then enter a new URL after running the "Save (new published revision)" action. This is especially useful when you have content templates to use as a base.
:::