console.log('server is running');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);




io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('draw', (data) => {
        socket.broadcast.emit('draw', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
// app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 4200;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
