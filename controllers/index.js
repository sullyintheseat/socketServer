const SocketController = {
  users : [],

  userDisconnected: (val) => {
    
  },

  userChat: (msg) => {
    console.log(msg)
  },

  sendAll: (io, msg) => {
    io.emit('updateApp', msg)
  },

  addUser: (io, msg, socketId) => {
    io.username = msg;
    
    io.emit('userSigned', {
      socketId: socketId,
      username: msg
    })
    SocketController.users.push({socketId,
      username: msg})

    console.log(SocketController.users)
  },

  removeUser: (user) => {
    console.log(user)
    
    SocketController.users = SocketController.users.filter((item) => {
      return item.username !== item.username
    })
    console.log(SocketController.users)
  }
}

module.exports = SocketController;