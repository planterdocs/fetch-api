'use strict'

/* load env vars from dot file */
require('dotenv').config()

const build = require('./src/build')

/* build server app */
const app = build({ logger: true })
const PORT = process.env.PORT || 3371

/* start up */
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
