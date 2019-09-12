const mobileBtn = document.querySelector(".main-nav__mobile-btn");
const toggleMenu = document.querySelector(".main-nav__container");

mobileBtn.addEventListener("click", () => {
  mobileBtn.classList.toggle("main-nav__mobile-btn--active");
  toggleMenu.classList.toggle("main-nav__container--show");
});

$(document).ready(function() {
  $(".customers-slider__content__swiper").slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
