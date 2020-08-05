'use strict'

function User(name, id) { //конструктор
    this.name = name;
    this.id = id;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

const nikita = new User("Nikita", 12526);
const sasha = new User('Sasha', 12527);

nikita.hello();
sasha.hello();

console.log(nikita);
console.log(sasha);

class Films {
    constructor(film, year) {
        this.film = film;
        this.year = year;
    }

    goodFilm() {
        console.log(`${this.film} is good!`);
    }

    badFilm() {
        console.log(`${this.film} is bad!`);
    }
}

Films.prototype.date = function () { //!писать именно функция!!
    console.log(`${this.film} begin in ${this.year}`);
};

const marvel = new Films('War of Tanos', 1979);
marvel.goodFilm();
console.log(marvel);
marvel.date();

const dc = new Films('Spider-man', 1990);
dc.badFilm();
console.log(dc);