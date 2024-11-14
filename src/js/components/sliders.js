import { Swiper } from "swiper";

import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Pagination, Navigation])

const prodSliders = document.querySelectorAll('.prod__slider')

if(prodSliders.length > 0){
  prodSliders.forEach(el => {
    new Swiper(el, {
      slidesPerView: 3,
      spaceBetween: 45,
      navigation: {
        prevEl: el.closest('.prod__wrapper')?.querySelector('.prod__arr--prev'),
        nextEl: el.closest('.prod__wrapper')?.querySelector('.prod__arr--next'),
      },
      pagination: {
        el: el.closest('.prod__wrapper')?.querySelector('.prod-pagi'),
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 45
        }
      }
    })
  })
}

new Swiper('.single-prod__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    prevEl: '.single-prod-prev',
    nextEl: '.single-prod-next'
  },
  pagination: {
    el: '.sp-pagi',
    clickable: true
  }
})
