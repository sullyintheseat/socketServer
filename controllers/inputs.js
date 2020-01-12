const Input = require('../schemas/survey.schema')

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
    if(req.params.value === 'show') {
      res.status(200).send({isActive: true})
    } else {
      res.status(200).send({isActive: false})
    }
  },

  metrics: async (req, res) => {
    try {
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
}