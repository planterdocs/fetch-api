'use strict'

const schemas = require('../schemas/plant')
const httpError = require('http-errors')

module.exports = async function (fastify, opts) {
  fastify.addHook('onRequest', async (req, reply) => {})

  fastify.setNotFoundHandler(function (req, reply) {
    reply
      .code(404)
      .type('application/json')
      .send({ message: 'Requested plant does not exist' })
  })

  fastify.get('/name/:name', { schema: schemas.findByName }, async function (
    req
  ) {
    const plant = await this.fireFerret.fetchOne({ name: req.params.name })

    if (!plant) {
      throw httpError(
        404,
        `Request plant with name '${req.params.name}' does not exist`
      )
    }
    return plant
  })

  fastify.get('/id/:id', { schema: schemas.findByID }, async function (req) {
    const plant = await this.fireFerret.fetchById(req.params.id)

    if (!plant) {
      throw httpError(
        404,
        `Request plant with id '${req.params.id}' does not exist`
      )
    }
    return plant
  })
}

module.exports.autoPrefix = '/plant'
