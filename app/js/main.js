


const swiper = new Swiper('#swiper1', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: null, // Отключение кнопки "Следующий слайд"
    prevEl: null, // Отключение кнопки "Предыдущий слайд"
  },
  spaceBetween: 30,
});



const swiper2 = new Swiper('#swiper2', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
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



