'use strict'

// const header = document.getElementById('header-wrapper'); // передает 1 элемент
const header = document.querySelector('header');
const elem = document.getElementsByClassName('content_elem'); //передает псевдомассив с элементами которык имеют класс .box
const divs = document.getElementsByTagName('div'); // передает псевдомассив с тегами div 

// более универсальные способы получения элементов

const content = document.querySelector('#content-wrapper'); // передает первый встрчающийся элемент с id = #id
const logo = document.querySelectorAll('.logo'); //передает псевдомассивмассив (с методом forEach) с элементами которык имеют класс .box
const nav = document.querySelectorAll('nav'); // передает псевдомассивмассив (с методом forEach) с тегами div 

// elem[0].style.display = 'none'; //изменяет стили
elem[1].style.backgroundColor = '#333';
elem[1].style.color = '#f7f7f7';
elem[2].classList.add('active'); //добавляет новый класс
// elem[2].classList.remove() //удаляет класс
elem[0].style.cssText = 'color: red';
elem[0].style.display = 'flex';

// elem[0].replaceWith(elem[2]); // замена elem[0] на elem[2] НО НЕ ПЕРЕСТАНОВКА!


const div = document.createElement('div');

div.classList.add('nav_elem'); //добавляет class nav__elem к div
div.innerHTML = 'Hello'; //содержимое div

nav[0].append(div); // в конец
// header.innerHTML = '<div class="nav__elem">Hello</div>'; // заеняет содержимое header

// elem[0].remove(); // удаляет элемент

const contentDiv = document.createElement('div');
const container = document.querySelector('.container');

contentDiv.classList.add('content_elem');
contentDiv.innerHTML = 'wtf';
contentDiv.insertAdjacentHTML('afterbegin', '<p>LOl</p>'); //вставляет текст html в начале
                            // beforebegin -до начала 
                            // beforend -в конце  
                            // afterend - после конца 
contentDiv.style.textTransform = 'uppercase';

container.prepend(contentDiv); //вставляет в начало контейнра contentdiv
// container.append(contentDiv); //в конец
container.after(contentDiv); //вставляет после элемента container
// container.before(contentDiv); // втсавлет до элмента container

