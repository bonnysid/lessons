'use strict';

const person = {
    name: 'alex',
    tel: '21412412',
    parent: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(person)); //stringify - в строку; parse - в объект

const person2 = JSON.parse(JSON.stringify(person)); //полная копия не поверхностная

person2.name = 'John';
person2.parent.dad = 'CLone';

console.log(person2);
console.log(person);