let show = true;
const menu =document.querySelector(".menu")
const menuCerto =document.querySelector(".menu-certo")

menu.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    
    menu.classList.toggle("on", show)
    show = !show;
})