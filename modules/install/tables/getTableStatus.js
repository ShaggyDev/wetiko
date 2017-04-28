const r                     = require(process.cwd() + "/utils/r");
const config                = require(process.cwd() + "/config/config");

module.exports = (tableName)=>{
  return new Promise(async (resolve, reject)=>{
    r.db(config.rethinkdb.db)
      .table(tableName)
      .config()
      .run()
      .then((result)=>{
        resolve(result);
      })
      .error((error)=>{
        reject(error);
      });
  });
};