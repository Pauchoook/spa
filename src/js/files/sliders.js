import Swiper, { Navigation, Scrollbar } from "swiper";

Swiper.use([Navigation, Scrollbar]);

export default function sliders() {
  const aboutSlider = document.querySelector(".about__slider");

  if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      speed: 700,
      simulateTouch: false,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 10,
      initialSlide: 1,
      navigation: {
        nextEl: " .about__slider-btn--next",
        prevEl: " .about__slider-btn--prev",
      },
      breakpoints: {
        993: {
          spaceBetween: 16,
        },
      },
    });
  }

  const specialistsSlider = document.querySelector(".specialists__slider");

  if (specialistsSlider) {
    const swiper = new Swiper(specialistsSlider, {
      speed: 700,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      initialSlide: 1,
      scrollbar: {
        el: ".specialists__slider-scrollbar",
        draggable: true 
      },
      breakpoints: {
        993: {
          spaceBetween: 16,
        },
      },
    });
  }
}
