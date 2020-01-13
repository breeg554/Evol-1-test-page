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
const returnBtn = document.querySelector(".return-btn"); //fixed btn
const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

  if (window.innerWidth >= 992 && window.scrollY <= 60) {
    mainNav.classList.add("main-nav--highest");
  } else mainNav.classList.remove("main-nav--highest");

});
// -----------------------





//page modal
const modalOpenBtn = document.querySelectorAll(".lightbox-btn");
const backgroundModal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__content__btn");
const modalRowContent = document.querySelector(".modal-row");
const modalContainerContent = document.querySelector(".modal-container");
const moveToRequest = document.querySelector('.moveToRequestBtn');
const backBtn = document.querySelector('.backBtn');

const closeModal = () => {
  modalRowContent.classList.remove("modal-row--active");
  backgroundModal.classList.remove("modal--active");
  modalContainerContent.classList.remove("modal-container--active");
}


modalOpenBtn.forEach(btn =>
  btn.addEventListener("click", () => {
    modalRowContent.classList.add("modal-row--active");
    modalContainerContent.classList.add("modal-container--active");
    modalContainerContent.style.top = `${window.pageYOffset}px`;
    backgroundModal.classList.add("modal--active");
  })
);
modalCloseBtn.addEventListener("click", closeModal);
moveToRequest.addEventListener('click', closeModal);
backBtn.addEventListener('click', closeModal);

// video popUp
const videoLink = document.querySelector(".video-frame__content__reference")
const openVideo = document.querySelector(".video-frame__content .video-container");
const closeVideo = document.querySelector(".video-frame__popUp__close");
const popUpVideo = document.querySelector(".video-frame__popUp");



videoLink.addEventListener("click", (e) => {
  if (window.innerWidth >= 730) {
    e.preventDefault();
    popUpVideo.style.display = "flex";
  }
})
closeVideo.addEventListener("click", () => {
  popUpVideo.style.display = "none";
  pauseVideo();
})

let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'M7lc1UVf-VE',

  });
}

function pauseVideo() {
  player.pauseVideo();
}

// --------------------------







// ---------------slick swiper------------------
$(document).ready(function () {
  $(".customers-slider__content__swiper").slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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