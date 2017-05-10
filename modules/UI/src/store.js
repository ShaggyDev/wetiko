import io                           from "socket.io-client";
import createSocketIoMiddleware     from "redux-socket.io";
import thunkMiddleware              from "redux-thunk";
import {createLogger}               from "redux-logger";
import { createStore,
  applyMiddleware}                  from "redux";

import reducers                     from "./reducers.js";

const socket = io("/client");

const socketIoMiddleware  = createSocketIoMiddleware(socket, "socket/");
const loggerMiddleware    = createLogger();

socket.on("connect", function(){

});

// todo: create a way to only enable loggerMiddleware on dev builds
export default createStore(reducers,
  applyMiddleware(thunkMiddleware, socketIoMiddleware, loggerMiddleware));

//export default createStore(reducers, applyMiddleware(thunkMiddleware, socketIoMiddleware));
