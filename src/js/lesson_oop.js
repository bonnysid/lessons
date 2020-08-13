'use strict'

const car = {
    name: 'Toyota',
    weight: 1000,
    bip: () => console.log('biip!')
};

const ren = Object.create(car); //прототипом ren является car
const lada = {
    name: 'Lada'
};

Object.setPrototypeOf(lada, car); //lada наследует методы у car

lada.bip();
ren.bip();