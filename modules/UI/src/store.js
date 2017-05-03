import reducers             from './reducers.js';
import io                   from 'socket.io-client';
import createSocketIoMiddleware   from 'redux-socket.io';

const socket = io();

const socketIoMiddleware = createSocketIoMiddleware(socket, "socket/");

import { createStore,
  applyMiddleware}   from 'redux';

export default createStore(reducers, applyMiddleware(socketIoMiddleware));