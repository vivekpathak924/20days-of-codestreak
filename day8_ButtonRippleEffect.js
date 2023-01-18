const buttonEl = document.querySelector(".button");

buttonEl.addEventListener("mouseover", (event) => {
    console.log(event.pageX - buttonEl.offsetLeft);
    
});