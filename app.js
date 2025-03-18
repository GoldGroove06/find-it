const express = require("express")
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require("node:path");
const { gameGet, gamePost } = require("./controllers/gameController");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));



app.get("/finish:id", (req, res) => {
    const id = req.params
    console.log(id)
    res.render("finish");
});

app.get("/", (req, res) => {
    
    res.render("homepage");
});

app.post("/api/q", gamePost);

app.get("/game", gameGet);


const PORT = 8000

app.listen(PORT, () => {
    console.log("Running on Port:", PORT)
} )
