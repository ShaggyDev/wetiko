const config      = require(process.cwd() + "/config/config");
let isAdmin       = false;


/*
 * might end up being un-needed. I think we could be just fine trying to create the database
 * tables and indexes and just flat out fail at it if we don't have a valid user to use
 */

if(config.rethinkdb.username){
  if(config.rethinkdb.username === "admin"){
    isAdmin = true;
  }
}else{
  isAdmin = true;
}
module.exports = isAdmin;
