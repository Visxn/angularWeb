const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:4200", 
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.on('message', (message) => {
    console.log(message);
    socket.broadcast.emit('message', message);
  });


  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 10); // Genera un número aleatorio entre 0 y 9
  io.emit('number', randomNumber);
  console.log('Enviando número aleatorio: ', randomNumber);
},1000);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
