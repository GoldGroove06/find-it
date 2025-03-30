 document.addEventListener('DOMContentLoaded', function() {
    mouse_listener();
    timer = true;
    startTimer(); 
})



let x;
let y;

let count = 0;
let timer = false;
let stopWatch; 

function startTimer() {
    if (!stopWatch) { 
        stopWatch = setInterval(function () {
            if (timer) {
                count++;
                document.querySelector("#timer").innerHTML = count
            }
        }, 1000);
    }
}

function mouse_listener() { 
        document.querySelector("#game-image").addEventListener("click", divPlacer)
}

function divPlacer(e) {
    
    document.querySelector("#image-popup").className = "inactive"
    console.log("click",e.offsetX, e.offsetY)
    x = e.offsetX
    y = e.offsetY
    document.querySelector("#image-popup").className = "active"
    document.querySelector("#image-popup").style.top = `${e.offsetY + 20  }px`
    document.querySelector("#image-popup").style.left = `${e.offsetX + 25 }px`
    

    document.querySelector("#t-div").className = "active"
    document.querySelector("#t-div").style.top = `${e.offsetY + 20}px`
    document.querySelector("#t-div").style.left = `${e.offsetX - 20 }px`

    

}

async function optionHandler(id) {
    try {
        const req = await fetch("/api/q", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                x,
                y,
                id
            })
        });
    
        // Check if request was successful
        if (req.ok) {
            const data = await req.json();  // Correctly call .json()
            console.log(data);
            if (data.cross === true) {
                document.querySelector(`#i-${id}`).onclick = null
                crossSetter(data.x,data.y,data.id)
                if (data.redirect === true){
                    setTimeout(() =>
                        window.location.href = `/finish`
                    , 1000)
                    
                }
            }
            
            
        }
        else{
            console.log("wrong");
            markWrongAnswer()
        }
       
    
        
    
    } catch (err) {
        console.error("Fetch error:", err);
    }

    
    
}

function crossSetter(ax,ay,id) {
    console.log(id)
    const cross = document.querySelectorAll(`.c-${id}`)
    console.log(cross)
    cross.forEach(el => {
        el.classList.remove("inactive")
        el.classList.add("active")
    })
    

}

function markWrongAnswer() {
    document.body.classList.add("wrong-answer");

    setTimeout(() => {
        document.body.classList.remove("wrong-answer"); // Remove effect after animation
    }, 500);
}