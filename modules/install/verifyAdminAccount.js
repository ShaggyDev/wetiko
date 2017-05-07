const r         = require(process.cwd() + "/utils/r");
const config    = require(process.cwd() + "/config/config");
const logger    = require(process.cwd() + "/utils/logger");

module.exports = ()=>{
  return new Promise((resolve, reject)=>{
    r.db(config.rethinkdb.db)
      .table("users")
      .get("admin")
      .run()
      .then((result)=>{
        resolve(result);
      })
      .error((error)=>{
        logger.error(error);
        reject(error);
      });
  });
};