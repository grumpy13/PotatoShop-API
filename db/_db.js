const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "Postgres_13",
  database: "my_db",
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
