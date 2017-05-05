const io        = require("../io");
const observerIo = io.of("/observer");

observerIo.on("connection", (socket)=>{
  console.log("observer connected");
});