const r           = require(process.cwd() + "/utils/r");
const logger      = require(process.cwd() + "/utils/logger");
const config      = require(process.cwd() + "/config/config");


function create(){
  return new Promise((resolve, reject)=>{
    r.dbCreate(config.rethinkdb.db)
      .then((result)=>{
        if(result.dbs_created === 1){
          return resolve(true);
        }
        return resolve(false);
      })
      .error((err)=>{
        return reject(err);
      })
  });
}

module.exports = ()=>{
  logger.silly("attempthing to create database '" + config.rethinkdb.db + "'");
  return new Promise(async (resolve, reject) =>{
    try{
      let result = await create();
      if(result){
        logger.info("database '" + config.rethinkdb.db + "' created succesfully");
      }else{
        logger.error("failed to create database '" + config.rethinkdb.db + "'");
      }
      resolve(result);
    }catch(err){
      reject(err);
    }
  });
};