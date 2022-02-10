# CockroachDB Remix Starter App

[![Netlify Status](https://api.netlify.com/api/v1/badges/840637aa-64ce-4af7-917a-e2b67dd5e7be/deploy-status)](https://app.netlify.com/sites/remix-cockroachdb-starter/deploys)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Overview

This is a [Remix](https://remix.run/) project bootstrapped with `create-remix` and set up to be instantly deployed to [Netlify](https://netlify.com/).

## Stack

- Framework - [Remix v12](httpremix.run.org)
- Database - [CockroachDB](https://cockroachlabs.com)
- ORM - [Prisma](https://prisma.io)
- Hosting - [Netlify](https://netlify.com)

## Getting Started

### CockroachDB Serverless Configuration

- [Create a free serverless cluster](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html)
- Execute the [provided script](./prisma/init_database.sql) using the SQL client to create the database and tables;
  ```
  cockroach sql --url [Connection string] --file ./prisma/init_database.sql
  ```
- Save the connection string to the `DATABASE_URL` environment variable

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cockroachlabs/remix-cockroachdb-starter)

Clicking this button will create a new repo for you that looks like this one, and sets that repo up immediately for deployment on Netlify. You will be prompted for a repo name and to provide the values for the following environment variables:

- Postgres Connection String (`DATABASE_URL`), **required** You can find this in the Connect model in the Cockroach Labs Cloud Console
- Session Secret (`SESSION_SECRET`), **required** A random string is used to hash tokens, sign/encrypt cookies and generate cryptographic keys. Can be generated using the `openssl` command:

  ```shell
  openssl rand -base64 32
  ```

**Option two:** Manual clone

You will need to [install the Netlify CLI](https://docs.netlify.com/cli/get-started/) and connect it to your Netlify site to run locally.

1. Clone this repo: `git clone https://github.com/cockroachlabs/remix-cockroachdb-starter.git`
2. Navigate to the directory and run `ntl init` to connect to Netlify
3. Add the above environment variables using `ntl env:set [env var] [value]`
4. Run the app locally using `ntl dev`
5. Make any changes and push to your repo to deploy.

- [Remix Docs](https://remix.run/docs)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
$ npm run build
# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
