const db = require("../db/queries");

let count = 0;
let timer = false;
let correct = 0
let stopWatch; 

function startTimer() {
    if (!stopWatch) { 
        stopWatch = setInterval(function () {
            if (timer) {
                count++;
                if (correct == 3 ){
                    endGame()
                }
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(stopWatch)
    stopWatch = null; 
}

async function endGame() {
    stopTimer()
    timer = false;
    correct = 0
}
async function gameGet(req,res) {
    timer = true;
    count = 0 
    correct = 0
    startTimer(); 
    res.render("game");
}


async function gamePost(req, res) {
    const { x, y, id } = req.body; 
    let redirect = false
    if (id == 1 && Math.abs(x - 573) < 10 && Math.abs(y - 3875) < 10) {
        correct ++  
        if (correct == 3 ){
            req.session.time = count
            redirect = true
        }
        return res.status(200).json({ x, y, id, cross:true, redirect  });
    } 
    
    if (id == 2 && Math.abs(x - 997) < 10 && Math.abs(y - 2396) < 10) {
        correct ++
        if (correct == 3 ){
            req.session.time = count
            redirect = true
        }
        return res.status(200).json({ x, y, id, cross:true, redirect  });
    }

    if (id == 3 && Math.abs(x - 1136) < 10 && Math.abs(y - 4907) < 10) {
        correct ++
        if (correct == 3 ){
            req.session.time = count
            redirect = true
        }
        return res.status(200).json({ x, y, id, cross:true, redirect });
    }
 
    return res.status(422).json({ error: "wrong" });
}


module.exports = {gameGet, gamePost}

