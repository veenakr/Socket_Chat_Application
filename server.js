const express = require('express');

const app = express();

const connections = [];
const users = [];

app.use(express.static('./public'));

const server = app.listen(3000);

io = require('socket.io').listen(server);

io.sockets.on('connection', socket => {
  socket.once('disconnect', () => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == socket.id) {
        users.splice(i, 1);
      }
    }
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    io.emit('disconnect', users);
  });

  socket.on('messageAdded', payload => {
    const newMessage = {
      timeStamp: payload.timeStamp,
      text: payload.text,
      user: payload.user
    };

    io.emit('messageAdded', newMessage);
  });

  socket.on('userJoined', payload => {
    const newUser = {
      id: socket.id,
      name: payload.name
    };

    users.push(newUser);

    io.emit('userJoined', users);
  });

  connections.push(socket);
});

console.log('Server is running on port 3000');
