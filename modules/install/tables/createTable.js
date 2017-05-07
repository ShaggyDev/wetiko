const fs                    = require("fs");

const r                     = require(process.cwd() + "/utils/r");
const logger                = require(process.cwd() + "/utils/logger");
const config                = require(process.cwd() + "/config/config");
const checkTableExistence   = require("./checkTableExistance");

function dropTable(tableName){
  return new Promise((resolve, reject)=>{
    r.db(config.rethinkdb.db)
      .tableDrop(tableName)
      .run()
      .then(()=>{
        logger.silly(`table '${tableName}' dropepd`);
        resolve(true)
      })
      .error((error)=>{
        logger.error(`failed to drop table '${tableName}'`);
        reject(error);
      });
  });
}

function createTable(tableDefinition) {
  return new Promise((resolve, reject) => {
    r.db(config.rethinkdb.db)
      .tableCreate(tableDefinition.name,
        {primaryKey: tableDefinition.primaryKey})
      .run()
      .then(() => {
        logger.info(`table ${tableDefinition.name} created`);
        return resolve(true);
      })
      .error((error) => {
        logger.error(error);
        return reject(error);
      });
  });
}

function createIndex(table, index){
  return new Promise((resolve, reject)=>{
    r.db(config.rethinkdb.db)
      .table(table)
      .indexCreate(index.name, index.func)
      .run()
      .then((result)=>{
        logger.info(`index '${index.name}' created for table '${table}'`);
        resolve(true);
      })
      .error((error)=>{
        logger.error(error);
        reject(error);
      })
  });
}

function createIndexes(tableDefinition){
  return new Promise(async(resolve, reject)=>{
    let indexesCreated = true;
    for(let i = 0; i < tableDefinition.indexes.length; i++){

      try{
        let indexCreated = await createIndex(tableDefinition.name, tableDefinition.indexes[i]);
        if(!indexCreated){
          indexesCreated = false;
        }
      }catch(error){
        reject(error);
      }
    }
    resolve(indexesCreated);
  });
}

module.exports = (tableDefinition) =>{
  logger.silly(`creating table '${tableDefinition.name}'`);
  return new Promise(async (resolve, reject)=>{
    try {
      if (await checkTableExistence(tableDefinition.name)) {
        await dropTable(tableDefinition.name);
      }
      if (!await createTable(tableDefinition)) {
        return reject();
      }
      let indexesCreated = false;
      if (tableDefinition.indexes.length > 0) {
        indexesCreated = await createIndexes(tableDefinition);
      }
      if(indexesCreated){
        return resolve(true);
      }
      return resolve(false);
    }catch(error){
      reject(error);
    }
    //if (fs.existsSync(`${process.cwd()}/modules/install/tables/${tableDefinition.name}.create.js`))
  });
};
