// from Socket.io
let app = require('express')()
let http = require('http').createServer(app)
let io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html')
})

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    socket.broadcast.emit('chat message', msg)
  })
})

http.listen(4000, function () {
  console.log('listening on *:4000')
})