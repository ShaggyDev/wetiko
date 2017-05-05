const IO        = require( "socket.io" );
const io = new IO({
  namespace: "/"
});
io.serveClient(false);

io.on("connection", (socket)=>{
  // not really used for anything we use socket.io namespaces for actual socket logic
  console.log("something connected");
});

module.exports = io;