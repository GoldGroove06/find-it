 document.addEventListener('DOMContentLoaded', function() {
    mouse_listener();
    
})



let x;
let y;

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
    document.querySelector("#image-popup").style.left = `${e.offsetX + 40 }px`
    

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
        if (!req.ok) {
            throw new Error(`HTTP error! Status: ${req.status}`);
        }
    
        const data = await req.json();  // Correctly call .json()
        console.log(data);
        crossSetter(data.x,data.y,data.id)
    
    } catch (err) {
        console.error("Fetch error:", err);
    }

    
    
}

function crossSetter(ax,ay,id) {
    console.log(id)
    const cross = document.querySelector(`#c-${id}`)
    console.log(cross)
    cross.classList.remove("inactive")
    cross.classList.add("active")
    cross.style.top = `${ay + 20}px`
    cross.style.left = `${ax - 20 }px`
}