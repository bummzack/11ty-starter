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
