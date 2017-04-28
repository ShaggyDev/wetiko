const fs        = require("fs");
const defaults  = require("./defaults");

let config = {};
if (fs.existsSync("../config.js")) {
  config = require("../config");
}

module.exports = Object.assign({},defaults, config );