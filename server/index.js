const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000','http://localhost:4000'],
        methods: ['GET', 'POST'],
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');

});

io.on('connection', function (socket) {
    console.log('server user connected');
    socket.emit('join', 'Hello from server');

    socket.on('userJoin', (d)=>{
        console.log(d)
    })

    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    })

    socket.on('chat', (msg)=>{
        console.log(msg);
        socket.broadcast.emit('msg', msg);
    })
    
})



io.on('disconnect', function () {
    console.log('A user disconnected');
});







server.listen(4000, () => {
    console.log('server started');
})
