const log = function (a, b, ...rest) { // ...rest собирает элементы в массив
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');