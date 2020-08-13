'use strict'

const schemas = require('../schemas/plants')
const httpError = require('http-errors')

module.exports = async function (fastify, opts) {
  fastify.addHook('onRequest', async (req, reply) => {

  })

  fastify.setNotFoundHandler(function (req, reply) {
    reply.code(404).type('application/json').send({ message: 'Requested plants do not exist' })
  })

  fastify.get(
    '/',
    { schema: schemas.findAll },
    async function (req) {
      return this.fireFerret.fetch({})
    }
  )

  fastify.get(
    '/:region',
    { schema: schemas.findByRegion },
    async function (req) {
      const plants = await this.fireFerret.fetch({ region: req.params.region })

      if (!plants || plants.length === 0) throw httpError(404, 'Request regional plants do not exist')
      return plants
    }
  )
}

module.exports.autoPrefix = '/plants'
