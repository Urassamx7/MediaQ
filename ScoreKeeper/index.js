import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
//import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation.min.css';
import 'swiper/modules/pagination.min.css';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });