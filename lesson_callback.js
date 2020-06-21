'use strict'

function first() {
    // do smth
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learn(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я проше урок!');
}

learn("JS", function () {
    console.log('Я прошел этот урок!');
});

learn(first, second);

let a = [1, 2, 'Hello', 3, 4];
console.log(a.length);
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}