const db = require("../db/queries");

async function finishGet( req, res) {
    const time = req.session.time
    res.render("finish", {time});
}



async function finishPost(req, res) {
    const time = req.session.time
    const {name} = req.body
    const rows = await db.finishGame( name, time)
    if (rows) {
         res.redirect("leaderboard")
    }
    res.status(500)
}

module.exports = {
    finishGet,
    finishPost
}