const Input = require('../schemas/survey.schema')

const InputController = {
  addEntry: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = InputController;
module.exports.controller = (app) => {
  app.post('/v1/survey', InputController.addEntry)
}