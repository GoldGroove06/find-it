const pool = require("./pool");


async function leaderboard() {
  const { rows }  = await pool.query("select * from users")
  return rows;
}

async function finishGame( name, time){
  const { rows } = await pool.query("INSERT INTO users (name, time ) Values ( $1, $2)", [name, time]);
  return rows;
}


module.exports = {
   leaderboard,
   finishGame
}

