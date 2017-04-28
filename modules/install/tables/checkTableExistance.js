const r                 = require(process.cwd() + "/utils/r");
const config            = require(process.cwd() + "/config/config");

module.exports = (tableName)=>{
  return new Promise((resolve, reject)=>{
    r.db(config.rethinkdb.db)
      .tableList()
      .filter(r.row.eq(tableName))
      .count().eq(1)
      .run()
      .then((result)=>{
        resolve(result);
      })
      .error((err)=>{
        reject(err);
      });
  });
};