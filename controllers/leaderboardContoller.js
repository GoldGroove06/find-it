const db = require("../db/queries");

async function getLeaderboard(req, res) {
    const rows = await db.leaderboard()
    console.log(rows)
    res.render("leaderboard", {rows})
}

module.exports= {
    getLeaderboard
}