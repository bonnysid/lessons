'use strict'

let str = "test";
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);
str[2] = 'd'; //ничего не поменяется
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); //показывает позиию искомого

const logg = 'Hello world';

console.log(logg.slice(6, 11)); //вырезает начало и конец строки либо можно только начало
console.log(logg.slice(-5, -1)); //вырезает с конца

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5)); // начало вырезки и кол-во символов

const num = 12.2;
console.log(Math.round(num)); //округление

const test = "12.2px";
console.log(parseInt(test)); //переводит в числовой тип
console.log(parseFloat(test)); //возвращает значение float