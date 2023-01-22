const imgcontainElement = document.querySelector(".image-container");
const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", ()=>{
    imgno = 20;
    addnewImg()
});

function addnewImg(){
    for (let index = 0; index < imgno; index++) {
        const newImgElement = document.createElement("img");
        newImgElement.src = `https://picsum.photos/700?random=${Math.floor(Math.random()*2000)}`;
        imgcontainElement.appendChild(newImgElement);
    }

}