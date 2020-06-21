'use strict'

let str = 'Hello';

console.log(showMessage(str)); 

function showMessage(text) {     //может использоваться в любом месте кода
    return text += ' ' + 'user';
}

functionExpession(); // не будет работать

let functionExpession = function() { //может использоваться только после вывода 
    console.log('object');
};

functionExpession();

const calc = (a, b) => { 
    return a + b; 
}; //стрелочная функция не имеет контекста вызова this

const calc2 = (a, b) => a + b ; //укороченная запись если один элемент