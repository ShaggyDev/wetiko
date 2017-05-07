const bcrypt    = require("bcrypt");
const logger    = require(process.cwd() + "/utils/logger");



module.exports = (password, passwordHash)=>{

  return new Promise((resolve, reject)=>{
    bcrypt.compare(password, passwordHash)
      .then((result)=>{
        return resolve(result);
      })
      .catch((err)=>{
        logger.error(err);
        return reject(err);
      });
  });
};