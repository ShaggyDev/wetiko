const IO        = require( 'socket.io' );
const io = new IO({
  namespace: '/observer'
});
io.serveClient(false);

io.on("connection", (socket)=>{
  console.log("observer connected");

});
module.exports = io;