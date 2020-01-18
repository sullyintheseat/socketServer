const helpers = require('../utils/helpers')
const request = require('request')

const StatsPerformController = {
  teams: async (req, res) => {
    if(req.params.league) {
      try {
        let query = helpers.getQuery(req.params.league)
        request(`http://api.stats.com/v1/stats/${query}/teams/${helpers.getSPAuth()}`,
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
        let query = helpers.getQuery(req.params.league)
        request(`http://api.stats.com/v1/stats/${query}/events/${helpers.getSPAuth()}`,
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

  venues: async (req, res) => {
    if(req.params.league) {
      try {
        let query = helpers.getQuery(req.params.league)
        request(`http://api.stats.com/v1/decode/${query}/venues${helpers.getSPAuth()}`,
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

  venue: async (req, res) => {
    if(req.params.venueId) {
      try {
        let query = helpers.getQuery(req.params.league)
        request(`http://api.stats.com/v1/decode/${query}/venues/${req.params.venueId}${helpers.getSPAuth()}`,
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

  teamRoster: async (req, res) => {
    try {

    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = StatsPerformController;
module.exports.controller = (app) => {
  // venues
  app.get('/v1/sp/venue/:league/:venueId', StatsPerformController.venue)
  app.get('/v1/sp/venues/:league', StatsPerformController.venues)
  app.get('/v1/sp/venues', StatsPerformController.venues)
  // teams
  app.get('/v1/sp/teams/:league', StatsPerformController.teams)
  app.get('/v1/sp/teams/', StatsPerformController.teams)
  
  //leagues
  app.get('/v1/sp/events/:league', StatsPerformController.events)
  app.get('/v1/sp/events', StatsPerformController.events)
}