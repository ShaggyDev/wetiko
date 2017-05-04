import reducers                     from "./reducers.js";
import io                           from "socket.io-client";
import createSocketIoMiddleware     from "redux-socket.io";

const socket = io();

socket.on("connect", function(){
  console.log(socket.id); // "G5p5..."
});
const socketIoMiddleware = createSocketIoMiddleware(socket, "socket/");

import { createStore,
  applyMiddleware}   from "redux";

export default createStore(reducers, applyMiddleware(socketIoMiddleware));