'use strict'

const box = document.querySelector('.box');

console.log(box.clientHeight); // высота бокс без учета скролла
console.log(box.clientWidth);

console.log(box.scrollHeight); // с учетом всего того что скрыто за скроллом
console.log(box.scrollWidth);

console.log(box.offsetHeiht); //с учетом скролла и отступов
console.log(box.offsetWidth); //с учетом скролла и отступов

console.log(box.scrollTop); // сколько скрыто высоты за clientHeight

console.log(document.documentElement.clientHeight); // высота всего сайта
window.scrollBy(0, 200); // скроллит от начала до 200 пикселе
window.scrollTo(300); // скролит с любой области до опрееленных пкс

console.log(box.getBoundingClientRect()); // положение элемента координаты

const style = window.getComputedStyle(); // получается стили 