'use strict';

try {
    console.log('Normal');
    console.log(num);
    console.log('wrong?');
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

console.log('Still normal');