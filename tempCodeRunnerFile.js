const uniqueInOrder = function (iterable) {
    let dump = '';
    return iterable.split('').filter((symbol, i, arr) => {
        if (symbol != dump) {
            dump = symbol;
            return symbol;
        }
    });
};

console.log(uniqueInOrder(''));