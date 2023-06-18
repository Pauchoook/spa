import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

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
}
