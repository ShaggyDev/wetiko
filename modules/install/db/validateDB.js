const r           = require(process.cwd() + "/utils/r");
const logger      = require(process.cwd() + "/utils/logger");
const config      = require(process.cwd() + "/config/config");

let isAdmin = false;

function validate(){
  return new Promise((resolve, reject)=>{
    r.dbList().filter(r.row.eq(config.rethinkdb.db)).count().eq(1)
      .then((result)=>{
        return resolve(result)
      })
      .error((err)=>{
        return reject(err);
      })
  });
}

module.exports = ()=>{
  logger.silly("validating database");
  return new Promise(async (resolve, reject)=>{
    try{
      resolve(await validate());
    }catch(err){
      reject(err);
    }
  });
};