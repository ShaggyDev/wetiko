const config    = require("./config/config");
const logger    = require("./utils/logger");

const install   = require("./modules/install");

logger.info("starting...");
console.log(config.webServer)

async function init(){
  try{
    console.log(await install());
  }catch(err){
    logger.error(err);
  }
  return;
}

init();