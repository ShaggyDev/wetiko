const logger      = require(process.cwd() + "/utils/logger");
const config      = require(process.cwd() + "/config/config");
const r           = require(process.cwd() + "/utils/r");


module.exports = async(ctx, next)=>{
  logger.silly(`upsert cluster, apiKey: '${ctx.cluster.server.apiKey}'`);
  if(!ctx.request.body.api_key){
    logger.error("api key not found");
    return ctx.body = {success: false, error: "invalid api key"};
  }
  try{

  }catch(err){
    logger.error(err);
    ctx.body = {success: false, error: err};
  }
};
