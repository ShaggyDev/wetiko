const IO        = require( 'socket.io' );
const io = new IO({
  namespace: '/'
});
io.serveClient(false);

io.on("connection", (socket)=>{
  console.log("connected");

});
module.exports = io;