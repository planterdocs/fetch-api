'use strict'

const fastify = require('fastify')

function build (options = {}) {
  const app = fastify(options)

  const services = require('./services')
  services.forEach(service => app.register(service))

  const routes = require('./routes')
  routes.forEach(route => app.route(route))

  app.get('/', async () => 'Welcome home, Data.')

  return app
}

module.exports = build
