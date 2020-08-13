'use strict';

// 1) Обычная функция: this = window, но если use strict то this = undefined

function showThis() {
    console.log(this);
}

showThis();

//2) В объектах this = объекту

const obj = {
    a: 20,
    show: function () {
        console.log(this);
    }
};

obj.show();

// 3) В стелочных функциях this наследует контекст у родителя 

const obj2 = {
    a: 30,
    show: function () {
        const say = () => {
            console.log(this);
        };
        say();
    },
    show2: () => {
        console.log(this);
    }
};

obj2.show(); //obj2
obj2.show2(); //window

// 4) this в конструкторах и классах - это новый экземпляр объекта

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }
}

const Nikita = new Human("Nikita", 19);
console.log(Nikita);
Nikita.hello();

//5) Ручная привязка call, apply, bind 

function user(age) {
    console.log(this);
    console.log(this.name);
    console.log(age);
}

const lol = {
    name: "lol"
};

user.apply(lol, [19]); // выведет обекто и свойство name
user.call(lol, 19); // выведет обекто и свойство name

function count(num) {
    return this * num;
}

const double = count.bind(2); //this = 2

console.log(double(4));

//6) this при навешивание событий = объекту по которому нажали

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this);
});

//с стрелочными используется event.target

const btn2 = document.querySelector('#current');

btn2.addEventListener('click', (e) => {
    console.log(e.target);
});