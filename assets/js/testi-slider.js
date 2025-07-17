/*--------------- Testimonial Slider ---------------*/
var swiper = new Swiper(".testimonial-slider", {
  spaceBetween: 20,
  loop: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination-testi",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
