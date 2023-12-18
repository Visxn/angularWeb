const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  socket.on('mensaje', (mensaje) => {
    console.log('Mensaje recibido:', mensaje);
    // Emitir el mensaje a todos los clientes conectados, incluido el emisor
    io.emit('mensaje', mensaje);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});


const path = __dirname + '/dist/my-app';
app.use(express.static(path));

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
