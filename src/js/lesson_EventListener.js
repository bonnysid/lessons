'use strict'

const bg = document.body;

bg.addEventListener('click', (event) => {
    console.log(event.target); //выводит блок на который нажали
});

console.log(bg.childNodes); //выведет все node переносы строки тоже
for ( let node of bg.childNodes) {
    if (node.nodeName == "#text") continue;
    console.log(node);
}

console.log(`1) ${bg.firstChild}`); //выведет первую node 
console.log(bg.firstElementChild); //выведет первый элемент

console.log(`2) ${bg.parentNode}`); //выведер родитель node
console.log(bg.parentElement); //выведет родитель элемент

console.log(`3) ${bg.nextSibling}`); // следующий  node 
console.log(bg.nextElementSibling); //след элмент

console.log(`4) ${bg.previousSibling}`); // предыдущий node
console.log(bg.previousElementSibling); // ппредыдущий элмент
