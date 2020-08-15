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
      const { page, size } = req.query

      let plants
      if (!isNaN(page) && !isNaN(size)) {
        plants = await this.fireFerret.fetch({}, { pagination: { page, size } })
      } else if (!page && !size) {
        plants = await this.fireFerret.fetch({})
      } else {
        throw httpError(404, 'Pagination requires page and size query params as coercible integers')
      }

      if (!plants || plants.length === 0) throw httpError(404, 'Requested plants do not exist')
      return plants
    }
  )

  fastify.get(
    '/region/:region',
    { schema: schemas.findByRegion },
    async function (req) {
      const { page, size } = req.query

      let plants
      if (!isNaN(page) && !isNaN(size)) {
        plants = await this.fireFerret.fetch({ region: req.params.region }, { pagination: { page, size } })
      } else if (!page && !size) {
        plants = await this.fireFerret.fetch({ region: req.params.region })
      } else {
        throw httpError(404, 'Pagination requires page and size query params as coercible integers')
      }

      if (!plants || plants.length === 0) throw httpError(404, 'Requested regional plants do not exist')
      return plants
    }
  )
}

module.exports.autoPrefix = '/plants'
