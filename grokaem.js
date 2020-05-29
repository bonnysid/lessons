'use strict'

let arr = [1, 2, 6, 8, 9];
let num = +prompt('Введите число:', '');

if(binarySearch(arr, num) == -1) {
    alert('Заданного числа нет в массиве!');
}else {
    alert(`Позиция числа = ${binarySearch(arr, num)}`);
}

let chest = {
    box: [[]]
};

for(let i = 0; i < 5; i++) {
    chest.box[i] = 0;
    for(let j = 0; j < 5; j++) {
        if(j == 4 && i == 3) {chest.box[i][j] = 1;}
        else {chest.box[i][j] = 2;}
    }
}

console.log(chest.box.length);
console.log(keySearch(chest.box, 0, -1));

function keySearch(arr, i, j) {

    if(arr[i] == 1 && i < arr.length && j == -1) {return i;}
    else {return arr, ++i, -1;}
    
    j++;
    if(arr[i][j] == 1 && j < arr[i].length) {return i, j;}
    else {return arr, i, j;}
    if(i >= arr.length) {return -1;}
    if(j < arr[i].length) {return arr, ++i, 0;}

}


function binarySearch(arr, num) {
    let mid, low, high;

    low = 0;
    high = arr.length - 1;
    

    do {
        mid = (low + high) / 2;
        if(arr[mid] == num) {
            return mid;
        }
        if(arr[mid] > num) {
            high = mid - 1;
        }else {
            low = low + 1;
        }
    } while(low <= high);
        
    return -1;
}

