'use strict'

const path = require('path')
const fastify = require('fastify')
const autoload = require('fastify-autoload')

function build (opts = {}) {
  const app = fastify(opts)

  app.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  app.register(autoload, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({ prefix: '/api' }, opts)
  })

  return app
}

module.exports = build
