class Slider {
    constructor() {
        this.timeout;
        this.slides = [...document.querySelectorAll(".slider__body__slide")];
        this.next = document.querySelector(".slider__body__next");
        this.next.addEventListener("click", this.nextSlide);
        this.prev = document.querySelector(".slider__body__prev");
        this.prev.addEventListener("click", this.prevSlide);
        this.runSlider();
        this.time = 4000;
    }
    changeSlideNext = () => {
        this.slides.forEach(slide => {
            if (slide.classList.contains("slide1")) {
                slide.classList.remove('slide1');
                slide.classList.add("slide3");
            } else if (slide.classList.contains("slide2")) {
                slide.classList.remove('slide2');
                slide.classList.add("slide1");
            } else if (slide.classList.contains("slide3")) {
                slide.classList.remove('slide3');
                slide.classList.add("slide2");
            }
        })
    }
    changeSlidePrev = () => {
        this.slides.forEach(slide => {
            if (slide.classList.contains("slide1")) {
                slide.classList.remove('slide1');
                slide.classList.add("slide2");
            } else if (slide.classList.contains("slide2")) {
                slide.classList.remove('slide2');
                slide.classList.add("slide3");
            } else if (slide.classList.contains("slide3")) {
                slide.classList.remove('slide3');
                slide.classList.add("slide1");
            }
        })
    }
    runSlider = () => {
        this.changeSlideNext();
        this.timeout = setTimeout(this.runSlider, this.time);
    }
    nextSlide = () => {
        clearTimeout(this.timeout);
        this.runSlider();
    }
    prevSlide = () => {
        clearTimeout(this.timeout);
        this.changeSlidePrev();
        this.timeout = setTimeout(this.runSlider, this.time);

    }

}

const slider = new Slider();