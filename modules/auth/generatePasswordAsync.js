const logger              = require(process.cwd() + "/utils/logger");
const sha                         = require("sha256");
let bcrypt                        = require("bcrypt");

//this file should actually be called something else, like hashPassword or what ever
// very bad choise. Was tired. Sorry world

// might be best stored in a config. Too lazy, maybe some day
const saltRounds        = 13;


// not good, there's a limit to how many letters you get from sha.x2
function generateRandomPassword(length = 32){
  let generatedPassword = sha.x2(" " +
    Math.random() * 9567.43815 * Date.now() +
    Math.random() * 9567.43815 * Date.now() +
    Math.random() * 9567.43815 * Date.now() +
    Math.random() * 9567.43815 * Date.now() +
    Math.random() * 9567.43815 * Date.now());

  logger.silly(generatedPassword);
  return generatedPassword.substring(0, length);

}

/**
 *
 * @param password  defaults to false, and then random one will be generated
 * @param saltRounds
 * @returns {Promise}
 */
module.exports = (password = false, saltRounds = 13)=>{
  logger.silly("generating a password");
  return new Promise((resolve, reject)=>{
    if(password === false){
      password = generateRandomPassword();
    }
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if(err){
        return reject(err);
      }
      return resolve({hashedPassword: hash, password: password});
    });
  });
};