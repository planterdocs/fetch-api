'use strict'

const findAll = {
  response: {
    200: {
      type: 'array'
    }
  },
  queryString: {
    page: { type: 'number' },
    size: { type: 'number' }
  }
}

const findByRegion = {
  response: {
    200: {
      type: 'array'
    }
  },
  queryString: {
    page: { type: 'number' },
    size: { type: 'number' }
  }
}

module.exports = { findAll, findByRegion }
