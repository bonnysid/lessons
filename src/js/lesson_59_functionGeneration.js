'use strict';

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(5);

console.log(counter.next()); // return obj
console.log(counter.next().value); // return value

for (let k of count(8)) { //return value
    console.log(k);
}