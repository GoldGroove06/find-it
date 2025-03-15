document.addEventListener('DOMContentLoaded', function() {
    mouse_listener();
})

function mouse_listener() {
    document.querySelector("#game-image").addEventListener("click", function(e) {
        document.querySelector("#image-popup").className = "inactive"
        console.log(e.pageX, e.pageY)
        document.querySelector("#image-popup").className = "active"
        document.querySelector("#image-popup").style.top = `${e.offsetY +20  }px`
        document.querySelector("#image-popup").style.left = `${e.offsetX + 40 }px`


        document.querySelector("#t-div").className = "active"
        document.querySelector("#t-div").style.top = `${e.offsetY +20}px`
        document.querySelector("#t-div").style.left = `${e.offsetX - 20 }px`

    })
}
