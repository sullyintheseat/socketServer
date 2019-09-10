const Application = require('../schemas/application.schema')

const ApplicationController = {
  test: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = ApplicationController;
module.exports.controller = (app) => {
  app.get('/v1/app', ApplicationController.test)
}