////menu desplegable 
let toggleMenu = document.querySelector("#toggleMenu");
let menu = document.querySelector("#navResponsive");
let items = document.querySelectorAll("#items");

function verMenu(){
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}
toggleMenu.addEventListener("click",verMenu);

items.forEach(function(link){
    link.addEventListener("click",verMenu);
})
