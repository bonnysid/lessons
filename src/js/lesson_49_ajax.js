'use strict'

const inputRUB = document.querySelector('#first'),
    inputUSD = document.querySelector('#second');

//!старый способ

inputRUB.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json'); //method, url, async, login, passwoed
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // тип передаваемого файла
    request.send();

    request.addEventListener('load', () => { //readystatechange будет происходить каждый раз когда меняется readyState
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2); //toFized сколько знаков после точки
        } else {
            inputUSD.value = "Что-то пошло не так";
        }
    });

    const data = {
        name: "nikita",
        age: 19
    };

    fetch('/server.php', { // куда отправляются
            method: "POST", // метод
            headers: {
                'Content-type': 'application/json' // тип файла
            },
            body: data //что будем отпавлять 
        })
        .then((data) => {

        });

    //status - 404 error и тд
    //statusText - ответ
    //response
    //readyState - текущие состояние запроса (0 - 4(done) )

    //load
    //start
    //loadend
});