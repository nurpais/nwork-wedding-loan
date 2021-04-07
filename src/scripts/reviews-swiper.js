import Swiper from "swiper";

// core version + navigation, pagination modules:
import SwiperCore, { Pagination } from "swiper/core";

// configure Swiper to use modules
SwiperCore.use([Pagination]);

if (document.querySelector(".reviews-swiper")) {
  const swiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".reviews-swiper .swiper-pagination",
      clickable: true,
    },
  });
}
