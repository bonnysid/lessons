const someNum: number = 54;
const someStr: string = 'Hello world';
const someBool: boolean = true;

const arrayNum: Array<number> = [1,2,52,52,5];
const arrayNum2: number[] = [1,2,52,52,5];

const arrayString: Array<string> = ['sdfsd', 'dfadf'];
const arrayString2: string[] = ['sdfsd', 'dfadf'];

const obj: object = [];
const obj1: object = {};

type Login = string;
type ID = number | string;

const login: Login = 'sdfsdf';
const id: ID = '214';
const id2: ID = 1124;

const double = (num: number): number => {
    return num * 2;
}

console.log(double(2));