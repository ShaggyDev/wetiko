const r                 = require(process.cwd() + "/utils/r");
const config            = require(process.cwd() + "/config/config");
const logger            = require(process.cwd() + "/utils/logger");

//todo: actually implement

module.exports = ((user)=>{
  return new Promise((resolve, reject)=>{
    resolve("admin");
  })
});