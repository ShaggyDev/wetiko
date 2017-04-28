const r           = require(process.cwd() + "/utils/r");

module.exports = {
  users: {
    name        : "users",
    primaryKey  : "username",
    indexes: ["fag"]
  },
  workers: {
    name        : "workers",
    primaryKey  : "id",
    indexes: [

    ]
  },
  benchmarks: {
    name        : "benchmarks",
    primaryKey  : "id",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")}
    ]
  },

};