const moment = require('moment')
const crypto = require('crypto')
const request = require('request')

const StatsController = {
  test: async (req, res) => {
    try {
      let eventId = req.params.eventId;
      let timeFromEpoch = moment.utc().unix();
      let apiKey = 's42bnthm7z8c9qh8bp4ng7g2';
    
      eventId = '2188785';
      // set the shared secret key
      let secret = 'KHytfCxCQK';
    
      // generate signature
      let sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
    
      request('http://api.stats.com/v1/stats/basketball/cbk/box/' + eventId+ '?accept=json&api_key=' + apiKey + '&sig=' + sig + '&box=true',
          function (err, response, body) {
            // parse the body as JSON
            var parsedBody = JSON.parse(body);
            res.json(parsedBody);
          });
    } catch (err) {
      res.status(500).send(err)
    }
  },
  events: async (req, res) => {
    //http://api.stats.com/v1/stats/basketball/cbk/events/
    try {
      let timeFromEpoch = moment.utc().unix();
      let apiKey = 's42bnthm7z8c9qh8bp4ng7g2';
    
      // set the shared secret key
      let secret = 'KHytfCxCQK';
    
      // generate signature
      let sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
    
      request('http://api.stats.com/v1/stats/basketball/cbk/events/?accept=json&api_key=' + apiKey + '&sig=' + sig,
          function (err, response, body) {
            // parse the body as JSON
            var parsedBody = JSON.parse(body);
            res.json(parsedBody);
          });
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = StatsController;
module.exports.controller = (app) => {
  app.get('/v1/stats/:eventId', StatsController.test)
  app.get('/v1/events', StatsController.events)
}