import { Swiper } from "swiper";

import { Pagination } from "swiper/modules";

Swiper.use([Pagination])

const prodSliders = document.querySelectorAll('.prod__slider')

if(prodSliders.length > 0){
  prodSliders.forEach(el => {
    new Swiper(el, {
      slidesPerView: 3,
      spaceBetween: 45
    })
  })
}
