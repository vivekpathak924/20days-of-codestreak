const bgimagElement = document.getElementById("back-image")

window.addEventListener("scroll", ()=>{
    updateimage()
})

function updateimage(){
    bgimagElement.style.opacity = 1 - window.pageYOffset / 900;
    bgimagElement.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}