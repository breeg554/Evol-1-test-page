const mobileBtn = document.querySelector(".main-nav__mobile-btn");
const toggleMenu = document.querySelector(".main-nav__container");

mobileBtn.addEventListener("click", () => {
  mobileBtn.classList.toggle("main-nav__mobile-btn--active"); //mobile menu
  toggleMenu.classList.toggle("main-nav__container--show");
});
toggleMenu.addEventListener("click", () => {
  mobileBtn.classList.remove("main-nav__mobile-btn--active"); //mobile menu
  toggleMenu.classList.remove("main-nav__container--show");
})
const mainNav = document.querySelector(".main-nav");
window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992 && window.scrollY <= 60) {
    //change fixed menu
    mainNav.classList.add("main-nav--highest");
  } else mainNav.classList.remove("main-nav--highest");
});

const modalOpenBtn = document.querySelectorAll(".lightbox-btn");
const backgroundModal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__content__btn");
const modalRowContent = document.querySelector(".modal-row");
const modalContainerContent = document.querySelector(".modal-container");

modalOpenBtn.forEach(btn =>
  btn.addEventListener("click", () => {
    modalRowContent.classList.add("modal-row--active");
    modalContainerContent.classList.add("modal-container--active");
    modalContainerContent.style.top = `${window.scrollY}px`;
    backgroundModal.classList.add("modal--active");
  })
);
modalCloseBtn.addEventListener("click", () => {
  modalRowContent.classList.remove("modal-row--active");
  backgroundModal.classList.remove("modal--active");
  modalContainerContent.classList.remove("modal-container--active");
});

$(document).ready(function () {
  $(".customers-slider__content__swiper").slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});