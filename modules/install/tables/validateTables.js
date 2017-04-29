const r                 = require(process.cwd() + "/utils/r");
const logger            = require(process.cwd() + "/utils/logger");
const config            = require(process.cwd() + "/config/config");
const validateTable     = require("./validateTable");
const tableDefinitions  = require("./tableDefinitions");

function validateSingleTable(table){
  logger.silly(`validating table '${table}'`);
  return new Promise(async (resolve, reject)=>{
    try{
      resolve(await validateTable(tableDefinitions[table]));
    }catch(err){
      reject(err);
    }

  });
}

function validateAll(){
  return new Promise(async(resolve, reject)=>{
    let tableList = Object.keys(tableDefinitions);
    let invalidTables = [];

    for(let i = 0; i < tableList.length; i++){
      try{
        let tableIsValid = await validateSingleTable(tableList[i]);

        if(!tableIsValid){
          invalidTables.push(tableList[i]);
        }
      }catch(err){
        reject(err);
      }
    }
    resolve(invalidTables);
  });
}

module.exports = ()=>{
  logger.silly(`validating tables in '${config.rethinkdb.db}'`);
  return new Promise(async (resolve, reject)=>{
    try{
      let invalidTables   = await validateAll();
      logger.info("found " + invalidTables.length + " invalid tables");
      resolve(invalidTables);
    }catch(err){
      reject(err);
    }
  });
};

