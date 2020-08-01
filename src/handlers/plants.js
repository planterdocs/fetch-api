'use strict'

module.exports.getPlantsByRegion = async function (request, reply) {
  const region = request.params.region || ''

  const plants = await this.fireFerret.fetch({ regions: region })

  reply.type('application/json')
  reply.send(plants)
}

module.exports.getPlants = async function (request, reply) {
  let query
  let pagination

  if (request.query && request.query.q) {
    query = JSON.parse(request.query.q)
  }

  if (request.query && request.query.pagination) {
    pagination = JSON.parse(request.query.pagination)
  }

  reply.type('application/json')

  if (!query) {
    const plants = await this.fireFerret.fetch({}, { pagination })
    reply.send(plants)
  }

  if (query) {
    const plants = await this.fireFerret.fetch(query, { pagination })
    reply.send(plants)
  }
}

module.exports.getPlantById = async function (request, reply) {
  const plantId = request.params.plantId || ''

  const plant = await this.fireFerret.fetchById(plantId)

  reply.type('application/json')
  reply.send(plant)
}
