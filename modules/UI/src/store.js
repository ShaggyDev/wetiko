import reducers             from './reducers.js';
import socketIO             from 'socket.io-client';
import socketIoMiddleware   from 'redux-socket.io-middleware';

const io = socketIO.connect(`http://localhost:3000`);


import { createStore,
  applyMiddleware}   from 'redux';

export default createStore(reducers, applyMiddleware(socketIoMiddleware(io)));