const IO        = require( 'koa-socket' );
const io        = new IO();


io.on("connection", (socket)=>{
  console.log("connected");
})
module.exports = io;