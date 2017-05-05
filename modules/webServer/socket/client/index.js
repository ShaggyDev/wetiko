const io        = require("../io");
const clientIo = io.of("/client");
clientIo.on("connection", (socket)=>{
  console.log("client connected");
});

