const PickupManagerController = {

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