'use strict'

const {
  getPlants,
  getPlantById,
  getPlantsByRegion
} = require('../handlers/plants')

const routes = [
  {
    method: 'GET',
    path: '/api/plants',
    handler: getPlants
  },
  {
    method: 'GET',
    path: '/api/plant/:plantId',
    handler: getPlantById
  },
  {
    method: 'GET',
    path: '/api/plants/:region',
    handler: getPlantsByRegion
  }
]

module.exports = routes
