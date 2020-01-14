const Input = require('../schemas/survey.schema')
const Analytic = require('../schemas/analytic.schema')
const moment = require('moment')
const crypto = require('crypto')
const request = require('request')

const InputController = {
  addEntry: async (req, res) => {
    try {
      let data = req.body
      let result
      if(data) {
        result = await Input.createItem(data)
      } else {
        res.status(401).send('No data sent')
      }
      res.status(200).send(result)

    } catch (err) {
      res.status(500).send(err)
    }
  },

  surveyActive: async (req, res) => {
    if(req.params.value === undefined) {
      try {
        let timeFromEpoch = moment.utc().unix();
        let apiKey = process.env.SP_API_KEY;
        let secret = process.env.SP_API_SECRET;    
        // generate signature
        let sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
        request('http://api.stats.com/v1/stats/football/cfb/events/2162374?box=true&accept=json&api_key=' + apiKey + '&sig=' + sig,
            function (err, response, body) {
              // parse the body as JSON
              let parsedBody = JSON.parse(body);
              let val = parseFloat(parsedBody.apiResults[0].league.season.eventType[0].events[0].eventStatus.period)
              console.log(val)
              if( val <= 2) {
                res.status(200).send({isActive: false})
              } else {
                res.status(200).send({isActive: true})
              }
            });
      } catch (err) {
        res.status(500).send(err)
      }
    } else {
      if(req.params.value === 'show') {
        res.status(200).send({isActive: true})
      } else {
        res.status(200).send({isActive: false})
      }
    }
  },

  metrics: async (req, res) => {
    try {
      let data = req.body;
      await Analytic.addAnalytic(data);
      res.status(200).send('ok')
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = InputController;
module.exports.controller = (app) => {
  app.post('/v1/survey', InputController.addEntry)
  app.post('/v1/metrics', InputController.metrics)
  app.get('/v1/survey/status/:value', InputController.surveyActive)
  app.get('/v1/survey/status/', InputController.surveyActive)
}