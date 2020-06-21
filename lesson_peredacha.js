'use strict'

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //идет передача по ссылке copy = ссылка на объект

// copy.a = 10;

// console.log(copy);
console.log(obj);

function copy(obj) {
    let objCopy = {};
    for(let key in obj) {
        objCopy[key] = obj[key];
    }
    return objCopy;
}

const num = {
    a: 2,
    b: 5,
    c: {
        v: 4,
        i: 6
    }
}

// const newObj = copy(num); //поверхностная копия
// newObj.a = 10;
// newObj.c.v = 10; //поменяет в обоих массива так как мы передали ссылку

// console.log(num);
// console.log(newObj);

const add = {
    d: 17,
    e: 20
}

const clone = Object.assign({}, add); // совмещает обекты и возвращает поверхностную копию объекта

clone.d = 10;

// console.log(add);
// console.log(clone);

const arr = [1, 2, 4, 5];
const newArr = arr.slice();

newArr[3] = 'dsad';

console.log(newArr);
console.log(arr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'blogger'],
      internet = [...video, ...blogs, 'vk']; //совмещает массивы

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nums = [2, 5, 7];

log(nums); //передает массив
log(...nums); //передает элементы массива

const array = ['a', 'b'];

const newArray = [...array];

console.log(newArray);

const q = {
    one: 1,
    two: 2
};

const newQ = {...q}; // ES9 стандрат создает оверхностную копию

console.log(newQ);
