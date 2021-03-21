'use strict';

/*  Відкриття меню  */

const menu = document.getElementById('menu');
const close = document.getElementById('close');
const menuBlock = document.querySelector('.menu');
const headerCatalog = document.querySelector('.header__catalog');
const hedearNav = document.querySelector('.header__nav');

menu.addEventListener('click', () => {
  menuBlock.classList.toggle('menu-active');
  headerCatalog.style.display = 'none';
  hedearNav.style.display = 'none';
  close.style.display = 'block';
  menu.style.display = 'none';
});

close.addEventListener('click', () => {
  menuBlock.classList.toggle('menu-active');
  headerCatalog.style.display = 'flex';
  hedearNav.style.display = 'flex';
  close.style.display = 'none';
  menu.style.display = 'flex';
});

/*  Відключення hover при відкритому підблоку   */

const list = document.querySelectorAll('.menu__link-goods');
const subcategories = document.querySelector('.subcategories');

function toggleHover() {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle('menu__link-goods');
  }
}

list[1].addEventListener('click', () => {
  subcategories.classList.toggle('subcategories-active');
  list[1].classList.toggle('menu__link-active');
  toggleHover();
});

/* Колесо фортуни */

const back = document.querySelector('.fortune__back');
const button = document.getElementById('button');
let deg = 0;
let sumDeg = 0;

button.addEventListener('click', () => {
  deg = Math.floor(Math.random() * 1000 + 1000);
  sumDeg += deg;

  back.style.transition = 'all 3s ease-out';
  back.style.transform = `rotate(${sumDeg}deg)`;

  button.disabled = true;
  button.style.background = 'silver';

  setTimeout(() => {
    button.disabled = false;
    button.style.background = '#59AEE4';
  }, 3000);
});
