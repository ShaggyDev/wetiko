const sha                         = require("sha256");
let bcrypt                        = require("bcrypt");

/*
 * this should be just a default password, created when you run the application first time.
 * Ideally it should be stored in the database and user configurable. I think this shouldn't even be here,
 * shouldn't be overwriteable by the user
 */

const saltRounds        = 13;
const password          = sha.x2(" " + Math.random() * 10000 * Date.now() +
  Math.random() * 10000 * Date.now())
  .substring(0, 32);

const hashedPassword    = bcrypt.hashSync(password, saltRounds);

module.exports = {
  rethinkdb: {
    /*
    * this is just for the wetico application, target cluster for tests should be configurable
    * using the UI. Tho not sure how cool it is to store potentially abusable connection data in the
    * database. Then again I assume people would need to secure their rethinkdb installs anyways.
    */
    host            : "localhost",
    port            : 28015,
    db              : "wetiko",
    timeoutError    : 5000,
    buffer          : 100,
    max             : 1000
  },
  winston: {
    levels: {
      error             : 0,
      debug             : 1,
      warn              : 2,
      data              : 3,
      info              : 4,
      verbose           : 5,
      silly             : 6
    },
    colors: {
      error             : "red",
      debug             : "blue",
      warn              : "yellow",
      data              : "grey",
      info              : "green",
      verbose           : "cyan",
      silly             : "magenta"
    },
    logLevel          : "silly"
  },
  webServer: {
    port              : 8666,
    host              : "localhost",
    password          : hashedPassword,
    plainTextPassword : password // we only need this so we can display it on the console when the server starts, should be removed after that
  }
};