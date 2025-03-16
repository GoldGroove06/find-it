const express = require("express")
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post("/api/q", (req, res) => {
    const { x, y, id } = req.body;

    if (id == 1 && Math.abs(x - 573) < 10 && Math.abs(y - 3875) < 10) {
        return res.status(200).json({ x, y, id });
    } 
    
    if (id == 2 && Math.abs(x - 997) < 10 && Math.abs(y - 2396) < 10) {
        return res.status(200).json({ x, y, id });
    }

    if (id == 3 && Math.abs(x - 1136) < 10 && Math.abs(y - 4907) < 10) {
        return res.status(200).json({ x, y, id });
    }

    return res.status(422).json({ error: "wrong" });
});
const PORT = 8000

app.listen(PORT, () => {
    console.log("Running on Port:", PORT)
} )
