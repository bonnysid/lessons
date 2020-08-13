'use strict';

console.log('Выполняется запрос...');

const req = new Promise((resolve, reject) => { //resolve - success; reject - fail; finally - всегда
    setTimeout(() => {
        const product = {
            name: 'TV',
            price: 2000
        };
        console.log('Товар получен!');
        resolve(product);
    }, 2000);
});

req.then(product => {

    console.log(product);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Товар обрабатывается');
            product.status = true;
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.order = 'OK';
    console.log('Товар обработан');
    return data;
}).then(data => {
    console.log(data);
});


const time = timer => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), timer);
    });
};

// time(1000).then(() => {
//     console.log(1000);
// });

// time(2000).then(() => {
//     console.log(2000);
// });

Promise.all([time(1000), time(2000)]).then(() => { //дожидается выполнения всех операций
    console.log('All');
});

Promise.race([time(1000), time(2000)]).then(() => { //дожидается толлько самой быстрой операции
    console.log('First');
});