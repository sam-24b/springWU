
let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",sh)

let button = document.querySelector(".m-b");
button.addEventListener("click",sh)

function sh(){
    let menu = document.querySelector("nav.m");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}