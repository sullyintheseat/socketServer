require('dotenv').config()
require("dotenv-safe").config({
  allowEmptyValues: true
});
const mongoose = require('mongoose')
const fs = require('fs')

const dbPath = process.env.MONGODB_URI
const db = mongoose.connection

var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.set('socketio', io);

let socketController = require('./controllers/index.js')

db.on('error', console.error)
db.once('connected', function() { console.log(`${dbPath}`)})
db.once('open', function() {
	
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/web/index.html')
})


const server = http.listen(process.env.PORT, function(io){
  console.log(`listening on *: ${process.env.PORT}`)
})

io.on('connection', function(socket) {
  console.log(socket.id)
  socket.on('disconnect', () => {
    console.log(socket.id + '<----')

    socketController.users = socketController.users.filter((item) => {
      return item.socketId !== socket.id
    })

    socketController.userDisconnected(this)
  })

  socket.on('chat', (msg) => {
    socketController.userChat,
    this.emit('chat', msg)
  })

  socket.on('sendToAll', (msg) => {
    if(msg.length < 1 ){
      msg = null;
    }
    socketController.sendAll(this, msg)
  })

  socket.on('pushDestination', (msg) =>{
    
  })

  socket.on('target', (user, msg) => {
    console.log(socketController.users)
    for(let i =0; i < socketController.users.length; i++) {
      if(socketController.users[i].username === user){
        console.log('hit')
        this.to(socketController.users[i].socketId).emit('testCall', user);
      }
    }
    
  })

  socket.on('addUser', (msg) => {
    socketController.addUser(this, msg, socket.id)
    socket.broadcast.emit('userJoined',  {data: 'true'})
  })

  socket.on('removeUser', (name) => {
    socketController.removeUser(name)
  })

});