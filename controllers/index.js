const SocketController = {

  userDisconnected: (val) => {
    console.log(val)
  },

  userChat: (msg) => {
    console.log(msg)
  },

  sendAll: (io, msg) => {
    io.emit('updateApp', msg)
  },

  addUser: (io, msg) => {
    io.username = msg;
    
    io.emit('userSigned', {
      username: msg
    })
    console.log(msg)
  }
}

module.exports = SocketController;