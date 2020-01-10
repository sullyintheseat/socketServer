const Input = require('../schemas/survey.schema')

const InputController = {
  addEntry: async (req, res) => {
    try {
      let data = req.body;
      return await Input.createItem(data)
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = InputController;
module.exports.controller = (app) => {
  app.post('/v1/survey', InputController.addEntry)
}