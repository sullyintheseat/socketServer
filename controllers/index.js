const SocketController = {

  userDisconnected: (val) => {
    console.log(val)
  },

  userChat: (msg) => {
    console.log(msg)
  },

  sendAll: (io, msg) => {
    io.emit('updateApp', msg)
  }
}

module.exports = SocketController;