const preloader = document.querySelector(".preloader");
preloader.classList.add("preloader--show");
window.addEventListener("load",()=>{
    preloader.classList.remove("preloader--show");
})