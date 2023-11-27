

const swiper = new Swiper('#swiper1', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',


    grid: {
      rows: 2,
    },
    // navigation: {
    //   nextEl: null, // Отключение кнопки "Следующий слайд"
    //   prevEl: null, // Отключение кнопки "Предыдущий слайд"
    // },
    spaceBetween: 30,
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        grid: {
          rows: 1,
        },
        spaceBetween: 10,
      },
  
      1250: {
        grid: {
          rows: 2,
        },
      },
    }
  });
  
  
  
  const swiper2 = new Swiper('#swiper2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 10,
    nextEl: '.swiper-button-next', // Селектор для кнопки "Следующий слайд"
    prevEl: '.swiper-button-prev', // Селектор для кнопки "Предыдущий слайд"
  
  });
  
  const swiperPrev = document.getElementById('swiperPrev')
  const swiperNext = document.getElementById('swiperNext')
  
  swiperPrev.addEventListener('click', () => {
    swiper2.slidePrev();
  })
  swiperNext.addEventListener('click', () => {
    swiper2.slideNext();
  })
  
  
  
  
  
import validator from "./formValidation.js";


let inputs1 = document.querySelectorAll('.inputs-validation-js');
let form1 = document.querySelector('.contact__form')


validator(form1, inputs1);



/**phone mask */

IMask(document.querySelector('#phone-input'), {
  mask: '+{380}(00)000-00-00',
  lazy: false,
  placeholderChar: '_'
});
