const Input = require('../schemas/survey.schema')
const Analytic = require('../schemas/analytic.schema')
const Signup = require ('../schemas/signup.schema')
const Votes = require('../schemas/votes.schema')
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
              if( val <= 3) {
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
      let val = await Analytic.addAnalytic(data);
      res.status(200).send(val._id)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getMetrics: async (req, res) => {
    try {
      let data = await Analytic.getAllData()
      
      let response = ''

      for(let i = 0; i < data.length; i++) {
        var t = data[i]
        response += `${t.appId}, ${t.navigation.itemClicked},${t.metricId},${t.createdAt}<br/>`
      }
  
      res.status(200).send(response)

  
    } catch (err) {
      res.status(500).send(err)
    }
  },

  signUp: async (req, res) => {
    try{
      let data = req.body
      let answer
      if(data) {
        answer = await Signup.createItem(data)
        if(!answer.error){
          res.status(200).send({status: 'success', message: 'Successfully signed up'})
        } else {
          res.status(404).send({status: 'error', message: 'user exists'})
        }
      } else {
        res.status(401).send('No data sent')
      }
      
      
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getSignup: async (req, res) => {
    try{
      let data = await Signup.getItems({eventId: '1605'})
      
      let ans = ''
      for(let i = 0; i < data.length; i++) {
        ans += `${data[i].email}, burger-giveaway, ${data[i].createdAt}, ${data[i].tagId}<br/>`
      }
    
      res.status(200).send(data)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getMetricsBy: async (req, res) => {
    if(req.params.appId) {
      try {
        //{appId:'fbLNcQcG', createdAt: {$gte: ISODate('2020-02-07 00:00:000Z')}}
        let criteria = new Date('2020-02-07 00:00:000Z')
        console.log({appId: req.params.appId, createdAt: { $gte: `ISODate(${criteria.toISOString()})`}})
        let data = await Analytic.getMetricsBy({appId: req.params.appId })
        let response = ''
        for(let i = 0; i < data.length; i++) {
          var t = data[i]
          response += `${t.appId}, ${t.navigation.itemClicked},${t.metricId},${t.createdAt}<br/>`
        }
        res.status(200).send(response)
      } catch (err) {
        res.status(500).send(err)
      }
    } else {
      res.status(401).send('Required Parameter Missing')
    }
  },

  //createdAt: {$gte: ISODate('2020-02-22` 00:00:000Z') ,$lte: ISODate('2020-02-25 00:00:000Z')}

  getSignups: async (req, res) => {
    try{
      let data = await Signup.getItems({formName:'UCONN_MOES'})
      
      let ans = ''
      for(let i = 0; i < data.length; i++) {
        ans += `${data[i].firstName},${data[i].lastName},${data[i].email}, ${data[i].formName}, ${data[i].createdAt}, ${data[i].tagId}<br/>`
      }
    
      res.status(200).send(ans)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  
  castVote: async (req, res) => {
    try {
      let data = req.body
      let val = await Votes.createItem(data)
      res.status(200).send(val)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getVotes: async (req, res) => {
    try {
      let val = await Votes.getAggregatedVotes()
      res.status(200).send(val)
    } catch (err) {
      res.status(500).send(err)
    }
  }

}

module.exports.Controller = InputController;
module.exports.controller = (app) => {
  app.post('/v1/survey', InputController.addEntry)
  app.post('/v1/metrics', InputController.metrics)

  app.get('/v1/metrics/:appId', InputController.getMetricsBy)
  app.get('/v1/metrics', InputController.getMetrics)
  app.get('/v1/survey/status/:value', InputController.surveyActive)
  app.get('/v1/survey/status/', InputController.surveyActive)

  app.post('/v1/signup', InputController.signUp)
  app.get('/v1/signup', InputController.getSignup)
  app.get('/v1/contest', InputController.getSignups)

  app.post('/v1/vote', InputController.castVote)
  app.get('/v1/votes', InputController.getVotes)
}