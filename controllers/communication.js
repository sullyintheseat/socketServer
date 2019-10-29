const CommunicationsController = {

  test: (req, res) => {
    req.io.emit('chat', {name: 'taasgsdghdsfghdsfh'})
    res.status(200).send('success')
  },

  sendToRoom: (req, res) => {
    req.io.to(req.params.id).emit('chat', {name: req.params.msg});
    res.status(200).send('success')
  },

  direct: (req, res) => {
    //console.log(req.params.id)
    // console.log(req.io.sockets.adapter.rooms)
    req.io.sockets.in('stadium').to('chuck').emit('chat', {name: req.params.msg});
    res.status(200).send('success')
  }
}

module.exports.Controller = CommunicationsController;
module.exports.controller = (app) => {
  app.get('/test', CommunicationsController.test)
  app.get('/room/:id/:msg', CommunicationsController.sendToRoom)
  app.get('/user/:id/:msg', CommunicationsController.direct)
}