'use strict'

let options = {
    id: 11111,
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest : function () {
        return options.id;
    }
};

const {id} = options; //ищет значение id в объекте
console.log(id);

let a = options.makeTest();
console.log(a);
console.log(Object.keys(options).length);

console.log(Object.keys(options)[0]);
// console.log(options.name);

// delete options.name; //удаление из объекта

// console.log(options.name);

for (let key in options) { //перебор свойств в объекте
    if(typeof(options[key]) == "object") {
        for( let i in options[key]) {
            console.log(` ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имееет значение ${options[key]}`);
    }
    
}