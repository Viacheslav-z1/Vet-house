/**
  Menu logik
 */

const menuBtn = document.querySelector('.menu__btn__open-js');
const menu = document.querySelector('.header__menu-js');
const menuBtn2 = document.querySelector('#menu__btn2');
const menuBtnImgClose = document.querySelector('.menu__btn__open-img');
const menuBtnImgOpen = document.querySelector('.menu__btn__open-2');
const menuBtnImgCloseSmall = document.querySelector('.menu__btn__open-img-small');
const menuBtnImgOpenSmall = document.querySelector('.menu__btn__open-2-small');


toggleMenu(menuBtn);
toggleMenu(menuBtn2);

function toggleMenu(openButton) {
  openButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggleImgClose(menuBtnImgClose, menuBtnImgOpen)
      toggleImgClose(menuBtnImgCloseSmall, menuBtnImgOpenSmall)
    } else {
      menu.classList.add('open');
      toggleImgOpen(menuBtnImgClose, menuBtnImgOpen)
      toggleImgClose(menuBtnImgOpenSmall, menuBtnImgCloseSmall)
    }
  });
}


function toggleImgOpen(img1, img2) {
  img1.classList.add('none')
  img2.classList.add('block')
  img2.classList.remove('none')
}
function toggleImgClose(img1, img2) {
  img1.classList.add('block')
  img2.classList.add('none')
  img1.classList.remove('none')
}





























