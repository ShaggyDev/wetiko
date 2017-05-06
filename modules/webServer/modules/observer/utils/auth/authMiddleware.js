const logger      = require(process.cwd() + "/utils/logger");
const validApiKeys = require("./validApiKeys");

module.exports = async(ctx, next)=>{

  console.log(ctx.header.api_key);
  console.log(Array.from(validApiKeys.keys()));
  if(!ctx.header.api_key){
    ctx.body = {success: false, error: "auth", errorMsg: "api_key header not found"};
    logger.error("authentication failed, api_key header not found");
    return;
  }
  if(!validApiKeys.has(ctx.header.api_key)){
    ctx.body = {success: false, error: "auth", errorMsg: "invalid api_key"};
    logger.error("authentication failed, invalid api_key");
    return;
  }
  ctx.cluster = validApiKeys.get(ctx.header.api_key);
  return next();
};