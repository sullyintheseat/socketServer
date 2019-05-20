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

let socketController = require('./controllers/index.js')

db.on('error', console.error)
db.once('connected', function() { console.log(`${dbPath}`)})
db.once('open', function() {
	
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/web/index.html')
})

io.on('connection', function(socket){
  socket.on('disconnect', socketController.userDisconnected)

  socket.on('chat', (msg) => {
    socketController.userChat,
    this.emit('chat', msg)
  })

  socket.on('sendToAll', (msg) => {
    socketController.sendAll(this, msg)
  })

  socket.on('pushDestination', (msg) =>{
    
  })

  socket.on('addUser', (msg) => {
    socketController.addUser(this, msg)
    socket.broadcast.emit('userJoined',  {data: 'true'})
  })
})


http.listen(process.env.PORT, function(io){
  console.log(`listening on *: ${process.env.PORT}`)
})