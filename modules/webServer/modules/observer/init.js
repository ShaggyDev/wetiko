const logger      = require(process.cwd() + "/utils/logger");
const config      = require(process.cwd() + "/config/config");
const r           = require(process.cwd() + "/utils/r");

function fetchCredentials(apiKey){
  logger.silly(`fetching credentials, apiKey: ${apiKey}`);
  return new Promise((resolve, reject)=>{
    r.db(config.rethinkdb.db)
      .table("clusters")
      .getAll(apiKey, {index: "apiKey"})
      .run()
      .then((result)=>{
        if(result.length != 1){
          return reject(new Error("cluster not found"));
        }
        return resolve(result[0]);
      })
      .error((error)=>{
      logger.error(error);
        return reject(error);
      })
  });

}

module.exports = async(ctx, next)=>{
  logger.silly(`init, apiKey: '${ctx.request.body.api_key}'`);
  if(!ctx.request.body.api_key){
    logger.error("api key not found");
    return ctx.body = {success: false, error: "invalid api key"};
  }
  try{
    let clusterData = await fetchCredentials(ctx.request.body.api_key);

    ctx.body = {success: true, clusterData};
  }catch(err){
    logger.error(err);
    ctx.body = {success: false, error: err};
  }
};
