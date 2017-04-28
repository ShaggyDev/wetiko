const r           = require(process.cwd() + "/utils/r");

module.exports = {
  users: {
    primaryKey: "username",
    indexes: []
  },
  workers: {
    primaryKey: "id",
    indexes: []
  },
  benchmarks: {
    primaryKey: "id",
    indexes: [
      {name: "createdAt", func: r.row("createdAt")}
    ]
  },

};