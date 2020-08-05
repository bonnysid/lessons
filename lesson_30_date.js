'use strict'

const now = new Date(); //сегодняшняя дата
const time = Date.parse("2020-05-22"); //!

console.log(time); // !ответ в мили секундах (сколько прошло с момента 1970 года)

console.log(now.getDate()); //день месяца
console.log(now.getFullYear()); // год
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getDay()); //день недели


console.log(now.setDate(24));


console.log(now);