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


var xPolicy			    = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Credentials" ,"true");
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, X-CSRF-TOKEN, api-key, authorization, content-type");
  	next();
};
app.use(xPolicy);

let socketController = require('./controllers/index.js')

db.on('error', console.error)
db.once('connected', function() { console.log(`${dbPath}`)})
db.once('open', function() {
	
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/web/index.html')
})

io.on('connection', function(socket){
  this.emit('chat', 'connected')
  socket.on('disconnect', socketController.userDisconnected)

  socket.on('chat', (msg) => {
    socketController.userChat,
    this.emit('chat', msg)
  })

  socket.on('sendToAll', (msg) => {

    console.log(msg)
    socketController.sendAll(this, msg)
  })

  socket.on('pushDestination', (msg) =>{
    
  })
})


http.listen(process.env.PORT, function(io){
  console.log(`listening on *: ${process.env.PORT}`)
})