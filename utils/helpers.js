const moment = require('moment')
const crypto = require('crypto')
const apiKey = process.env.SP_API_KEY;
const secret = process.env.SP_API_SECRET;

const helpers = {

  getSPAuth () {
    let timeFromEpoch = moment.utc().unix()
    let sig = crypto.createHash('sha256').update(apiKey + secret +timeFromEpoch).digest('hex')
    return `?accept=json&api_key=${apiKey}&sig=${sig}`
  },

  getSport (val) {
    let query
    switch (val) {
      case 'cbk':
        query = 'basketball/cbk'
        break
      case 'cwbk':
        query = 'basketball/wcbk'
        break
      case 'cfb':
        query = 'football/cfb'
        break
      default:
        query = 'basketball/cbk'
        break
    }
    return query
  }
}

module.exports = helpers