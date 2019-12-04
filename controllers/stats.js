const moment = require('moment')
const crypto = require('crypto')
const request = require('request')

const StatsController = {
  test: async (req, res) => {
    try {
      let eventId = req.params.eventId;
      var timeFromEpoch = moment.utc().unix();
      var apiKey = 's42bnthm7z8c9qh8bp4ng7g2';
    
      // set the shared secret key
      var secret = 'KHytfCxCQK';
    
      // generate signature
      var sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
    
      request('http://api.stats.com/v1/stats/basketball/cbk/box/?accept=json&api_key=' + apiKey + '&sig=' + sig,
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
}