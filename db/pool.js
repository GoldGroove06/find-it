const { Pool } = require("pg");


module.exports = new Pool({
  host: "localhost", 
  user: "postgres",
  database: "findit",
  password: "arsh",
  port: 5432 
});