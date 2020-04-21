const moment = require('moment')
const Germ = require('../schemas/germaphobe.schema')
const GermaPhobeManagerController = {
  test: async (req, res) => {
    try {
      let answer = moment()
      res.status(200).send({date: answer})
    } catch (err) {
      res.status(500).send(err)
    }
  },

  submitCleaned: async (req, res) => {
    try {
      let gupdate = await Germ.createItem(req.body)
      res.status(200).send(gupdate)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getCleaned: async (req, res) => {
    try {
      let gupdate = await Germ.getItem()
      let obj = { lastCleaned: gupdate[0].lastCleaned, _id: gupdate[0]._id, timeDiff: moment(gupdate[0].lastCleaned).fromNow()}
      res.status(200).send(obj)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  validateToken: (req, res, next) => {
    if(req.headers['token'] && req.headers['token'] === 'somevalue') {
      next()
    } else {
      res.status(403).send('Unauthorized')
    }
  }

}

module.exports.Controller = GermaPhobeManagerController
module.exports.controller = (app) => {
  app.post('/v2/gp/test', GermaPhobeManagerController.submitCleaned)
  app.get('/v2/gp/test', GermaPhobeManagerController.getCleaned)
}