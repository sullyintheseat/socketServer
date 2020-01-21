const helpers = require('../utils/helpers')
const request = require('request')
const apiroot = process.env.SP_API_ROOT
const StatsPerformController = {

  teams: async (req, res) => {
    if(req.params.league) {
      try {
        let sport = helpers.getSport(req.params.league)
        request(`${apiroot}stats/${sport}/teams/${helpers.getSPAuth()}`,
          (err, response, body) => {
            let parsedBody = JSON.parse(body)
            res.status(200).send(parsedBody)
          }
        )
      } catch (err) {
        console.log(err)
        res.status(500).send(err)
      }
    } else {
      res.status(401).send('Required field missing')
    }
  },

  team: async (req, res) => {
    if(req.params.teamId && req.params.league) {
      try {
        let sport = helpers.getSport(req.params.league)
        let team = req.params.teamId
        request(`${apiroot}stats/${sport}/participants/teams/${team}${helpers.getSPAuth()}`,
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
    let season = req.params.season
    let team = req.params.teamId
    let sport = req.params.league

    if(season && team && sport) {
      try {
      
        season = `season=${req.params.season}`
        
        sport = helpers.getSport(sport)
        console.log(`${apiroot}stats/${sport}/scores/teams/${team}${helpers.getSPAuth()}&${season}`)

        request(`${apiroot}stats/${sport}/scores/teams/${team}${helpers.getSPAuth()}&${season}`,
          (err, response, body) => {
            var parsedBody = JSON.parse(body)
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

  venues: async (req, res) => {
    if(req.params.league) {
      try {
        let sport = helpers.getSport(req.params.league)
        request(`http://api.stats.com/v1/decode/${sport}/venues${helpers.getSPAuth()}`,
          (err, response, body) => {
            var parsedBody = JSON.parse(body)
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

  venue: async (req, res) => {
    if(req.params.venueId) {
      try {
        let sport = helpers.getSport(req.params.league)
        request(`http://api.stats.com/v1/decode/${sport}/venues/${req.params.venueId}${helpers.getSPAuth()}`,
          (err, response, body) => {
            var parsedBody = JSON.parse(body)
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

  gmaeStats: async (req, res) => {
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

  app.get('/v1/sp/team/:league/:teamId', StatsPerformController.team)
  
  //leagues
  app.get('/v1/sp/events/:league/:teamId/:season', StatsPerformController.events)
  // app.get('/v1/sp/events', StatsPerformController.events)
}