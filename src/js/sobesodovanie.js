// Какое будет выведено значение: let x = 5; alert( x++ ); 

    let x = 5;
    alert(x++);

//Ответ: 5;

// Чему равно такое выражение: [ ] + false - null + true 

console.log([] + false - null + true);

// Ответ: NaN, тк от строки вычитаем null

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); 

let y = 1,
    b = y = 2;

console.log(b);

// Ответ: 2

// Чему равна сумма [ ] + 1 + 2

console.log([] + 1 + 2);

// Ответ: "12"

// Что выведет этот код: alert( "1"[0] )

console.log("1"[0]);

// Ответ: 1

// Чему равно 2 && 1 && null && 0 && undefined 

console.log(2 && 1 && null && 0 && undefined );

// Ответ: null

// Есть ли разница между выражениями? !!( a && b ) и (a && b)

console.log(!!(1 && 2) === (1 && 2));

// Ответ: есть,  false

// Что выведет этот код: alert( null || 2 && 3 || 4 ); 

console.log(null || 2 && 3 || 4);

// Ответ: 3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b 

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b);

// Ответ: не равны

// Что выведет этот код: alert( +"Infinity" ); 

console.log(+'Infinity');

// Infinity

// Верно ли сравнение: "Ёжик" > "яблоко"?

console.log('Ёжик' > 'яблоко');

//Ответ: зависти от кода (true)

// Чему равно 0 || "" || 2 || undefined || true || falsе ?

console.log(0 || "" || 2 || undefined || true || falsе);

//  Ответ: 2
