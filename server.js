'use strict'

require('dotenv').config()

const fastify = require('fastify')
const ff = require('./services/fireferret')
const plantRoutes = require('./routes/plants')

const PORT = process.env.PORT || 3371

const app = fastify({
  logger: true
})

app.register(ff, {})

plantRoutes.forEach(route => {
  app.route(route)
})

app.get('/', async () => {
  return "Welcome home Data... we've been expecting you"
})

const start = async () => {
  try {
    await app.listen(PORT)
    app.log.info(`Server listening on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
