const tabs = document.querySelector(".tab");
const btns = document.querySelector(".button");
const art = document.querySelectorAll("text");

tabs.addEventListener("click", (event)=>{
    const id = event.target.dataset.id;

    if(id){
        btns.forEach(element => {
            element.classList.remove("live")
        });

        event.target.classList.add("live");
        art.forEach((ele)=>{
            ele.classList.remove("live");

        });
        const value = document.getElementById(id);
        value.classList.add("live";)
    }
});