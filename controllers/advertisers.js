const Advertiser = require('../schemas/advertiser.schema')

const AdvertiserController = {
  test: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = AdvertiserController;
module.exports.controller = (app) => {
  app.get('/v1/adv', AdvertiserController.test)
}