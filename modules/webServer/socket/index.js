const io        = require("./io");

// attach namespaces to the io
require("./client/index");
require("./observer/index");

module.exports  = io;