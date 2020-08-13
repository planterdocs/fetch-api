'use strict'

const fastifyPlugin = require('fastify-plugin')
const FireFerret = require('../../../node/fireferret')

async function fireFerret (fastify, options) {
  try {
    const ffopts = {
      REDIS_OPTS: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        auth_pass: process.env.REDIS_AUTH_PASS
      },
      MONGO_OPTS: {
        uri: process.env.MONGO_URI,
        db: process.env.MONGO_DB,
        collection: process.env.MONGO_COLLECTION
      }
    }
    const fireFerret = new FireFerret(ffopts)
    await fireFerret.connect()

    fastify.decorate('fireFerret', fireFerret)
  } catch (err) {
    console.error(err)
  }
}

module.exports = fastifyPlugin(fireFerret)
