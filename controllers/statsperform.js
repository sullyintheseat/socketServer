const moment = require('moment')
const crypto = require('crypto')
const request = require('request')

const apiKey = process.env.SP_API_KEY;
const secret = process.env.SP_API_SECRET;

const StatsPerformController = {
  teams: async (req, res) => {
    if(req.params.league) {
      try {
        let query
        switch (req.params.league) {
          case 'cbk':
            query = 'basketball/cbk'
            break
          case 'cfb':
            query = 'football/cfb'
            break
          default:
            query = 'basketball/cbk'
            break
        }
        let timeFromEpoch = moment.utc().unix()
        let sig = crypto.createHash('sha256').update(apiKey + secret +timeFromEpoch).digest('hex')
        request(`http://api.stats.com/v1/stats/${query}/teams/?accept=json&api_key=${apiKey}&sig=${sig}`,
          (err, response, body) => {
            let parsedBody = JSON.parse(body)
            res.status(200).send(parsedBody)
          }
        )
      } catch (err) {
        res.status(500).send(err)
      }
    } else {
      res.status(401).send('Required field missing')
    }
  },

  events: async (req, res) => {
    if(req.params.league) {
      try {
        let query
        switch (req.params.league) {
          case 'cbk':
            query = 'basketball/cbk'
            break
          case 'cfb':
            query = 'football/cfb'
            break
          default:
            query = 'basketball/cbk'
            break
        }
        let timeFromEpoch = moment.utc().unix()
        let sig = crypto.createHash('sha256').update(apiKey + secret +timeFromEpoch).digest('hex')
        request(`http://api.stats.com/v1/stats/${query}/events/?accept=json&api_key=${apiKey}&sig=${sig}`,
          (err, response, body) => {
            var parsedBody = JSON.parse(body)
            res.json(parsedBody)
          }
        )
      } catch (err) {
        res.status(500).send(err)
      }
    } else {
      res.status(401).send('Required field missing')
    }
  },
}

module.exports.Controller = StatsPerformController;
module.exports.controller = (app) => {
  app.get('/v1/sp/teams/:league', StatsPerformController.teams)
  app.get('/v1/sp/teams/', StatsPerformController.teams)
  app.get('/v1/sp/events/:league', StatsPerformController.events)
  app.get('/v1/sp/events', StatsPerformController.events)
}