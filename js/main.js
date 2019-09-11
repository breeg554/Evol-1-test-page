const mobileBtn = document.querySelector(".main-nav__mobile-btn");
const toggleMenu = document.querySelector(".main-nav__container");

mobileBtn.addEventListener("click", () => {
  mobileBtn.classList.toggle("main-nav__mobile-btn--active");
  toggleMenu.classList.toggle("main-nav__container--show");
});
