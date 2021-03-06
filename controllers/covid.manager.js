const Restaurant = require('../schemas/restaurant.schema')
const Center = require('../schemas/center.schema')
const Signups = require('../schemas/signup.schema')
const CovidManagerController = {
  createRestaurant: async (req, res) => {
    try {
      let result = await Restaurant.createItem(req.body)
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getRestaurants: async (req, res) => {
    try {
      let result = await Restaurant.getItems()
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getList: async (req, res) => {
    try {
      let result = await Restaurant.getItems()
      let response = {
        vendors: result
      }
      res.status(200).send(response)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  updateRestaurant: async (req, res) => {
    let restaurant = req.body
    try {
      let result = await Restaurant.updateItem(restaurant)
      console.log(result)
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  deleteRestaurant: async (req, res) => {
    try {
      console.log(req.params.id + ' <-----')
      let result = await Restaurant.deleteItem(req.params.id)
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  createCenter: async (req, res) => {
    try {
      let result = await Center.createItem(req.body)
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getCenters: async (req, res) => {
    try {
      let result = await Center.getItems()
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  updateCenter: async (req, res) => {
    let center = req.body
    try {
      let result = await Center.updateItem(center)
      console.log(result)
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getCentersAll: async (req, res) => {
    try {
      let result = await Center.getItems()
      let response = {
        vendors: result
      }
      res.status(200).send(response)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  
  deleteCenter: async (req, res) => {
    try {
      console.log(req.params.id + ' <-----')
      let result = await Center.deleteItem(req.params.id)
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  getSubmissions: async (req, res) => {
    let appId = req.params.appId
    if(appId) {
      try {
        let result = await Signups.getItems({appId: appId })
        console.log(result)
        res.status(200).send(result)
      } catch (err) {
        res.status(500).send(err)
      }
    } else {
      res.status(401).send('Not Found')
    }
  },

  test: (req, res, next) => {
    console.log('test')
    if(req.headers['token'] && req.headers['token'] === 'somevalue') {
      next()
    } else {
      res.status(403).send('Unauthorized')
    }
  }

}

module.exports.Controller = CovidManagerController;
module.exports.controller = (app) => {
  app.post('/v1/cov/rest', CovidManagerController.test, CovidManagerController.createRestaurant)
  app.get('/v1/cov/rest', CovidManagerController.getList)
  app.get('/v1/cov/rests', CovidManagerController.getRestaurants)
  app.put('/v1/cov/rest', CovidManagerController.test, CovidManagerController.updateRestaurant)
  app.delete('/v1/cov/rest/:id', CovidManagerController.test, CovidManagerController.deleteRestaurant)

  app.post('/v1/cov/center', CovidManagerController.test, CovidManagerController.createCenter)
  app.get('/v1/cov/center', CovidManagerController.getCenters)
  app.put('/v1/cov/center', CovidManagerController.test, CovidManagerController.updateCenter)
  app.get('/v1/cov/centers', CovidManagerController.getCentersAll)
  app.delete('/v1/cov/center/:id', CovidManagerController.test, CovidManagerController.deleteCenter)

  app.get('/v1/cov/submissions/:appId', CovidManagerController.test, CovidManagerController.getSubmissions)
}