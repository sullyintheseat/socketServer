const TargetItem = require('../schemas/targetcfg.schema')

const ContentController = {
  test: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  },
  createTargetConfig: async (req, res) => {
    let target = req.body
    if(target) {
      try {
        let result = await TargetItem.createItem(target)
        res.status(200).send(result)
      } catch (err) {
        res.status(500).send(err)
      } 
    } else {
      res.status(404).send('Required Parameter Missing')
    }
  },
  getTargetConfig: async (req, res) => {
    let configId = req.params.configId
    if(configId) {
      try {
        let data = await TargetItem.getItemsBy({targetId: configId})
        res.status(200).send(data[0])
      } catch (err) {
        res.status(500).send(err)
      }
    } else {
      try {
        let data = await TargetItem.getItemsBy({})
        res.status(200).send(data)
      } catch (err) {
        res.status(500).send(err)
      }
    }
  },
  updateTargetConfig: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  },
  invalidateTargetConfig: async (req, res) => {
    try {
      res.status(200).send('all files')
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports.Controller = ContentController;
module.exports.controller = (app) => {
  app.get('/v2/test', ContentController.test)
  app.get('/v2/config', ContentController.getTargetConfig)
  app.get('/v2/config/:configId', ContentController.getTargetConfig)
  app.post('/v2/config', ContentController.createTargetConfig)
}