'use strict'

const arr = [1, 2, 3, 7, 2];

// arr[99] = 10; //не занятые значения заменит на empty(undefined)

// console.log(arr.length); // длии на это индекс последнего элемента + 1
// console.log(arr);

//Способы добавления и удаления из массива----------------------------

// arr.push(1); // добавляет в конец 1
// console.log(arr);
// arr.pop(); //удаляет последний элем
// console.log(arr);
// arr.unshift(10); //добавляем в начало но затратный
// console.log(arr);
// arr.shift(); //удаляет в начале
// console.log(arr);

//Способы перебора массива----------------------------------------------

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i+1}) ${arr[i]}`);
// }

// for (let value of arr) { //с объектом нужно использовать вместо of - in
//     console.log(value);
// }

arr.forEach(function (item, i, arr) { //item = значение элемента, i = индекс, arr = принимаемый массив; названия переменных могут быть любыми
    item *= 3;
    console.log(`${i+1}) ${item}`);
});

console.log(arr); //функция не заменит сами элементы массива

const str = prompt(", ");
const products = str.split(", "); //делит сроку на элементы массива
products.sort(); //сортирует строки
products.sort(function (a, b) { //сортирует числа
    return a - b;
});
console.log(products.join(' ')); //объединяет элементы массива в строку

function friend(friends) {
    let res = [];
    friends.forEach(item => {
        if (item.length >= 4) res.push(item);
    });
    return res;
}