# 11ty-starter
Eleventy Starter Project

## Setup

1. Install `git`
2. Install `node`

On Mac OS X, use [brew](https://brew.sh/) to install these.

```sh
brew install git
brew install node@14
```

## Create a repository

1. Create an account on GitHub.
2. Create a [new repository](https://github.com/new) (private) on GitHub.

```sh
cd ~/Desktop
git clone <repo url>
cd <your project name>
```

## Initialize 11ty

As described on https://www.11ty.dev/docs/getting-started/

```sh
npm init -y
npm install --save-dev @11ty/eleventy
```

Test eleventy using:

```sh
npx @11ty/eleventy
```

## Add a .gitignore file

```
node_modules
.DS_Store
_site
```

## Add a page template and a layout

`_includes/page.njk`

```njk
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>{{ title }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <header>
      {% block header %}
        Header
      {% endblock %}
    </header>
    <main>
      {% block main %}
        Content
      {% endblock %}
    </main>
    <footer>
      {% block footer %}
        Footer
      {% endblock %}
    </footer>
  </body>
</html>
```

`_includes/layout.njk`

```njk
{% extends "page.njk" %}
```

## Creating pages

Create two new Markdown files, `index.md` and `about.md` in your project folder.

We set the desired layout (`layout.njk`) and title as [front-matter](https://www.11ty.dev/docs/data-frontmatter/) at the start of the documents.

We also establish a [collection](https://www.11ty.dev/docs/collections/) by setting the same tags for both pages (in this case `main`).

The `index.md`:

```md
---
title: Homepage
layout: layout.njk
tags: main
---

# Überschrift 1

This is my [eleventy](https://eleventy.dev) starter project
```

The `about.md`

```md
---
title: About
layout: layout.njk
tags: main
---

# About

This is the about page
```

#### Exclude the github readme from your website

Also make sure, that the `README.md` from github is ignored, as we don't want this as part of our website.

For that purpose, create a file named `.eleventyignore` with the following content:

```
README.md
```

## Run the eleventy server

Start the live-reload server (if you didn't do so already):

```sh
npx @11ty/eleventy --serve
```
