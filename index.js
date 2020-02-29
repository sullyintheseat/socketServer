require('dotenv').config()
require("dotenv-safe").config({
  allowEmptyValues: true
});

const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const fs = require('fs')
const dbPath = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(dbPath, { useNewUrlParser: true, useFindAndModify: false } );

let path = require('path')
let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

app.use(cors());
app.options('*', cors());

db.on('error', console.error)
db.once('connected', function() { console.log(`${dbPath}`)})
db.once('open', function() {
	console.log('here')
})

var xPolicy			    = function (req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Credentials", "true");
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, XSRF-TOKEN, X-CSRF-TOKEN, api-key, authorization, content-type, Content-Length");
  	next();
};
app.use(xPolicy);

app.enable('trust proxy');
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])


app.all('*', function(req, res, next){ req.io	= io; next();});



app.set('port', process.env.PORT || aport);

app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.text({ type: 'text/html' }))

app.use((req, res, next) => {
  if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
    return res.sendStatus(204)
  } 
  return next()
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/web/index.html')
})

app.use('/', express.static(path.join(__dirname, 'web')))
app.use('/cdn', express.static(path.join(__dirname, 'web')))

let socketController = require('./controllers/index.js')

require('./controllers/communication').controller(app);
require('./controllers/metrics').controller(app);
require('./controllers/content').controller(app);
require('./controllers/s3manager').controller(app);
require('./controllers/application').controller(app);
require('./controllers/stats').controller(app);
require('./controllers/inputs').controller(app);
require('./controllers/statsperform').controller(app);
require('./controllers/content.manager').controller(app);

http.listen(process.env.PORT, function(io){
  console.log(`listening on *: ${process.env.PORT}`)
})

io.on('connection', function(socket) {
  //console.log(socket.id + ' connected')

  socket.on('disconnect', () => {
    console.log('disco')
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

  socket.on('throwGame', (msg) => {
    socketController.throwGame(this, msg, socket.id)
  })

  socket.on('pushDestination', (msg) =>{
  })

  socket.on('throwPromo', (msg) => {
    if(msg.length < 1 ){
      msg = null;
    }
    socketController.sendAll(this, msg)
  })

  socket.on('target', (user, msg) => {
    //console.log(socketController.users) 
    for(let i =0; i < socketController.users.length; i++) {
      if(socketController.users[i].username === user){
        console.log(i)
        this.to(socketController.users[i].socketId).emit('testCall', msg)
      }
    }
  })

  socket.on('addUser', (msg) => {
    console.log(msg)
    socket.join('stadium')
    socketController.addUser(this, msg, socket.id)
    this.to(socket.id).emit('userJoined',  {data: 'true'})
  })

  socket.on('addUserTo', (msg) => {
    console.log(msg.name + ' ' + msg.state)
  })

  socket.on('removeUser', (name) => {
    socketController.removeUser(name)
  })

  socket.on('create', (room) => {
    // console.log(room)
    socket.join(room);
  });

});