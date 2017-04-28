const fs                = require("fs");

const r                 = require(process.cwd() + "/utils/r");
const logger            = require(process.cwd() + "/utils/logger");
const config            = require(process.cwd() + "/config/config");
const tableDefinitions  = require("./tableDefinitions");

function validateTable(table){
  return new Promise(async (resolve, reject)=>{
    if (fs.existsSync("./" + table + ".validate.js")) {
      let validator = require("./" + table + ".validate.js");
      try{
        resolve(await validator(tableDefinitions[table]));
      }catch(err){
        reject(err);
      }
    }else{
      reject(new Error("validator not found for table '" + table + "'"));
    }
  });
}

function validateAll(tables){
  return new Promise(async(resolve, reject)=>{
    let tableList = Object.keys(tableDefinitions);
    let invalidTables = [];
    tableList.forEach(async (table)=>{
      let tableIsValid = await validateTable(table);
      if(!tableIsValid){
        invalidTables.push(table);
      }
    });
    resolve(invalidTables);
  });
}

module.exports = ()=>{
  logger.silly("validating database");
  return new Promise(async (resolve, reject)=>{
    try{
      let invalidTables   = await validateAll(tables);
      logger.info("found " + invalidTables.length + " invalid tables");
      resolve(invalidTables);
    }catch(err){
      reject(err);
    }
  });
};

