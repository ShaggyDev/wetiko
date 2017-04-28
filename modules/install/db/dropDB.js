const r           = require(process.cwd() + "/utils/r");
const logger      = require(process.cwd() + "/utils/logger");
const config      = require(process.cwd() + "/config/config");

function drop(){
  return new Promise((resolve, reject)=>{
    r.dbDrop(config.rethinkdb.db)
      .then((result)=>{
        if(result.dbs_dropped === 1){
          logger.info("Succesfully removed existing database '" + config.rethinkdb.db + "'");
          return resolve(true);
        }
        logger.error("Failed to remove existing database '" + config.rethinkdb.db + "'");
        return reject(new Error("Failed to remove existing database '" + config.rethinkdb.db + "'"));
      })
      .error((err)=>{
        return reject(err);
      })
  });
}

module.exports = ()=>{
  logger.silly("attempthing to drop database '" + config.rethinkdb.db + "'");
  return new Promise(async (resolve, reject) =>{
    try{
      resolve(await drop());
    }catch(err){
      reject(err);
    }
  });
};