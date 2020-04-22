const Order = require('../schemas/order.schema')
const PickupController = {

  test: (req, res) => {
    req.io.emit('chat', {name: 'taasgsdghdsfghdsfh'})
    res.status(200).send('success')
  },

  sendToRoom: (req, res) => {
    let data = req.body
    console.log(data.order)
    req.io.to(data.room).emit('chat', data);
    res.status(200).send('success')
  },

  sendDirect: (req, res) => {
    req.io.sockets.in('stadium').to('chuck').emit('chat', {name: req.params.msg});
    res.status(200).send('success')
  }
}

module.exports.Controller = PickupController;
module.exports.controller = (app) => {
  app.get('/pu/test', PickupController.test)
  app.post('/v2/pu/sendTo', PickupController.sendToRoom)
  app.post('/v2/pu/dir', PickupController.sendDirect)
}