
const swiper = new Swiper('#services__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: '1',

    navigation: {
        nextEl: null, // Отключение кнопки "Следующий слайд"
        prevEl: null, // Отключение кнопки "Предыдущий слайд"
    },
    spaceBetween: 30,

    breakpoints: {
        // when window width is >= 320px
        1250: {
            slidesPerView: '4',
        },
        900: {
            slidesPerView: '3',
        },
        450: {
            slidesPerView: '2',
        },
        300: {
            slidesPerView: '1',
         
        },
    }
});