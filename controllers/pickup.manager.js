const Order = require('../schemas/order.schema')

const PickupManagerController = {
  pickupOrder: async (req, res) => {
    try {
      let result = await Order.createItem(req.body)
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send('Unknown Error')
    }
  },

  validateToken: (req, res, next) => {
    console.log('test')
    if(req.headers['token'] && req.headers['token'] === 'somevalue') {
      next()
    } else {
      res.status(403).send('Unauthorized')
    }
  }

}

module.exports.Controller = PickupManagerController
module.exports.controller = (app) => {
  
}