const pool = require("./pool");


async function startGameID() {
  const { rows }  = await pool.query("INSERT INTO users (name, time ) Values(NULL, NULL) RETURNING id")
  return rows;
}

async function finishGame(id, name, time){
  const { rows } = await pool.query("UPDATE users SET name = $2, time = $3 where id = $1", [id, name, time]);
  return rows;
}


module.exports = {
   startGameID,
   finishGame
}

