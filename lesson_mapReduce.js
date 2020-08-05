'use strict';

const newArr = Object.entries(object); // !делает из объекта массив

const people = [{
        name: 'Никита',
        age: 19,
        budget: 40000
    },
    {
        name: 'Макс',
        age: 19,
        budget: 20000
    },
    {
        name: 'Даня',
        age: 23,
        budget: 10000
    },
    {
        name: 'Дима',
        age: 35,
        budget: 5000
    },
    {
        name: 'Аня',
        age: 17,
        budget: 45000
    },
    {
        name: 'Ира',
        age: 15,
        budget: 9000
    },
];

// for

for (let person of people) {
    console.log(person);
}

//forEach

people.forEach((person, i, arr) => {
    console.log(person);
    console.log(i);
});

//map

const newPeople = people.map((person) => { // новый массив состоящий из возроста
    return person.age;
});

console.log(newPeople);
console.log(people);

//filter

const oldPeople = people.filter(person => person.age > 18); //тело должно вернуть true or false
console.log(oldPeople);

//reduce

const sum = people.reduce((total, person) => total + person.budget, 0); //возвращает total после заяптой указывается значение total
console.log(sum);

//find

console.log(people.find(person => person.name === 'Никита')); //ищет человека с именем Никита

//findIndex 

console.log(people.findIndex(person => person.name === 'Никита')); //ищет человека с именем Никита и возвращает его индекс

//some

console.log(people.some(person => person.name === 'Никита')); // если хоть один элеме удовлетворяет условию то возвращает true

// every

console.log(people.every(person => person.name === 'Никита')); // если все элементы удовлетворяют условию то возвращает true

//===================================

console.log(people.filter(person => person.age > 19).reduce((total, person) => total + person.budget, 0));