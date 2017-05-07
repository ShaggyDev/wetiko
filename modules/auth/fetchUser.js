const r         = require(process.cwd() + "/utils/r");
const config    = require(process.cwd() + "/config/config");
const logger    = require(process.cwd() + "/utils/logger");

module.exports = (username)=>{
  return new Promise((resolve, reject)=>{
    r.db(config.rethinkdb.db)
      .table("users")
      .get(username)
      .run()
      .then((result)=>{
        if(result){
          return resolve(result);
        }
        return resolve(false);
      })
      .error((error)=>{
        logger.error(error);
        return reject(error);
      });
  });
};