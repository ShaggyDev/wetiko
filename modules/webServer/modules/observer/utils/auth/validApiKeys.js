const logger      = require(process.cwd() + "/utils/logger");
const config      = require(process.cwd() + "/config/config");
const r           = require(process.cwd() + "/utils/r");

const apiKeys = new Map();

function startApiKeyFeed(){
  logger.silly("attempting to start apikey feed");
  r.db(config.rethinkdb.db)
    .table("clusters")
    .changes({includeInitial: true})
    .run()
    .then((cursor)=>{
      logger.silly("apiKey feed started");
      cursor.each((error, doc)=>{
        if(error){
          logger.error("apiKey feed errored");
          logger.error(error);
          setTimeout(()=>{
            logger.error("attempting to restart apiKey feed");
            startApiKeyFeed();
          }, 5000);
          return;
        }
        console.log(doc.new_val)
        if(!doc.new_val){
          return apiKeys.delete(doc.old_val.server.apiKey);
        }
        apiKeys.set(doc.new_val.server.apiKey, doc.new_val);
      });
    })
    .error((error)=>{
      logger.error("Error starting apiKey feed");
      logger.error(error);
      setTimeout(()=>{
        logger.error("attempting to restart apiKey feed");
        startApiKeyFeed();
      }, 5000);
      return;
    });

}

startApiKeyFeed();

module.exports = apiKeys;