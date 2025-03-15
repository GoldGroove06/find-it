const express = require("express")

const app = express()

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("homepage")
})

app.get("/game", (req,res) => {
    res.render("game")
})
const PORT = 8000

app.listen(PORT, () => {
    console.log("Running on Port:", PORT)
} )
