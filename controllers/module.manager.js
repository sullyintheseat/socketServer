const MoudleType = require('../schemas/moduletype.schema')

const ModuleManagerController = {
  createModuleType: async (req, res) => {
    try {
      let result = await MoudleType.createItem(req.body)
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getModuleType: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = ModuleManagerController;
module.exports.controller = (app) => {
  app.post('/v1/mod', ModuleManagerController.createModuleType)
  app.get('/v1/mod', ModuleManagerController.getModuleType)
}