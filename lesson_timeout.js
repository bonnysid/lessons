const id = setTimeout(function() { //выполняет через
    console.log(1);
}, 2000);

let i = 0;

const interval = setInterval(function(){ //повторяет с переодичность (не будет ждать завершения функции)
    console.log(i);
    i++;
    if ( i == 10) {
        clearInterval(interval);
    }
}, 1000);



let idRecursive = setTimeout(function log(){
    if (i == 10) {
        clearInterval(idRecursive);
        return;
    }
    console.log(i);
    i++;
    idRecursive = setTimeout(log, 1000);
}, 1000);
