const pool = require("./pool");

async function getUser(email) {
    const { rows } = await pool.query("SELECT * FROM users where email=$1", [email]);
    return rows;
  }

async function CreateNewUser(data) {
  const { rows }  = await pool.query("INSERT INTO users Values($1, $2, $3)", data)
  return rows;
}



module.exports = {
   getUser,
   CreateNewUser
}

