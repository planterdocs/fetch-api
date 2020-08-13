'use strict'

const findByName = {
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        num: { type: 'number' },
        _id: { type: 'string' },
        region: { type: 'array' }
      }
    }
  },
  queryString: {

  }
}

module.exports = { findByName }
