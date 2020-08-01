[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide: Standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/ 'JavaScript Standard Style')
[![Build Status](https://travis-ci.com/planterdocs/fetch-api.svg?branch=master)](https://travis-ci.com/planterdocs/fetch-api)

# @planterdocs/fetch-api

A query-only API for front-end applications

## Configuration

Requires MongoDB and Redis server information set as environmental variables, or via `.env` dotfile.

`.env`

```sh
# REQUIRED

REDIS_HOST=
REDIS_PORT=
REDIS_AUTH_PASS=

MONGO_URI=
MONGO_DB=
MONGO_COLLECTION=
```

The FireFerret client manages datastore connections, queries, and errors. Read more about fine-tuning FireFerret [here](https://github.com/mster/fireferret#fireferret).

## API

## Proxying

Image deploys with `80:80` open. Please use a reverse-proxy in production.
