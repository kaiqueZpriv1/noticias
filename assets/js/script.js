const burgerElement = document.querySelector("#burger i");
const menuElement = document.querySelector("#menu-mobile");
burgerElement.addEventListener("click", function() {
    menuElement.style.width = "65%";
})

const closeElement = document.querySelector("#close")
closeElement.addEventListener("click", function(){
    menuElement.style.width = "0"
})