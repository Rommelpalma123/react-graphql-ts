import { io } from 'socket.io-client';

const socket = io('/');

socket.on('connect', () => {
  console.log('Conectado al servidor de sockets');
});

socket.on('disconnect', () => {
  console.log('Desconectado del servidor de sockets');
});

export const getAllProcedures = (callback) => {
  socket.on('server:loadtramites', callback);
};

export const createProcedure = (data) => {
  socket.emit('client:realizar-tramite', data);
};

export const onProcedureCreated = () => {
  socket.on('server:realizar-tramite', (tramite) => {
    console.log(tramite);
  });
};
