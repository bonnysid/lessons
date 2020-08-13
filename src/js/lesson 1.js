'use strict'

/*
Вопросы на собеседование
1) Унарный плюс? Отв: +'6'
2)Чем отличается префиксная форма от постфиксной формы? (45)
*/



let a = 4.5; // числовой тип данных
let str = 'dasfag' // string

let b;
console.log(b); // выведет undefined так как переменная пустая

console.log(lol);  // выведет NaN так как переменной не существует

let obj = { //объект может содержать в себе все типы данных и действия
    name: 'Vasya', //переменые перечисляются через запятую
    age: 18,
    isMarried: false
};

console.log(obj.isMarried);

let arr = ['plump.png', 'god.jpeg', 6, {}, []]; //массив может включать любые типы данных (int string obj) // массив часть объекта

alert(obj.age); // вывод на сайте

const result = confirm("Are you here?"); // модальное окно ОК или Отмена
console.log(result); //при ОК - выведет true, иначе false

const answer = prompt('Сколько вам лет?', ''); // модальное окно с полем ввода;
console.log(answer); // при отмене выведет null(если написать +prompt то выведет 0), иначе строку(если написать +prompt, то число) которую ввели

document.write('U are cool!'); // заменит все содержимое сайта на эту строку

console.log('object - ' + 'lol'); // выведет строку
console.log(4 + +'- obj'); //NaN
console.log(4 + +'5');// Выведет 9

let inrc = 10, 
    decr = 10;

    console.log(inrc++);//постфиксная запись сначала выведе 10 потом прибавит 1
    console.log(--decr);//префиксная запись отнимет 1 и выведет 9

    console.log(5%2); // остаток 1
    console.log(2*4 == 8); // сравнение выведет true
    console.log(2*4 == '8'); // сравнение по значению выведет true
    console.log(2*4 === '8'); // сравнение по значению и по типу данных выведет false

    const isChecked = true,
          isClosed = false;

    console.log(isChecked && isClosed); // && операция И
    console.log(isChecked || isClosed); // || операция ИЛИ
    console.log(!isChecked); // ! отрицание

    /*
    Git 
    Terminal
    -git init
    -git config --local user.name "Name"
    -git config --local user.email sobaka@mail.ru
    -git add -A
    -git add 'название файла'
    -git commit -a -m"first commit" 
    -git push
    -git clone
    -git pull
     */

