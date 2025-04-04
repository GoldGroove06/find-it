const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR ( 255 ),
  time INTEGER
);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.HOST, 
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASS,
    port: process.env.POSTGRES_PORT 
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
