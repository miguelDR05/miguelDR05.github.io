const skillsSwiper = new Swiper(".skills-swiper", {
  loop: false,
  navigation: {
    nextEl: ".skills-next",
    prevEl: ".skills-prev",
  },
  spaceBetween: 24,
  slidesPerView: 1, // 1 por defecto (móvil)
  breakpoints: {
    // se actualiza automáticamente al cambiar de tamaño
    640: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
});
