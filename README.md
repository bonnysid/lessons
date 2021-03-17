# [BACK](https://github.com/bonnysid/lessons/tree/main)

# Typescript

## Types:
- string
- number
- boolean
- Object
- any
- Function
- Array = []

```typescript
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
```

## Interfaces
 ```typescript
interface IHuman {
    readonly id: string | number,
    age?: number,
    name?: string,
    walk(): string;
}

interface IReadable {
    read(): void
}

interface IRect {
    color?: string
    size: {
        width: number,
        height: number
    }

    getArea: () => number
}

class SimpleHuman implements IHuman, IReadable {
    age: number;
    readonly id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name
    }

    walk() {
        return 'Simple human is walking'
    }

    read(): void {
        console.log(`${this.name} is reading`)
    }

}

const human: SimpleHuman = new SimpleHuman(5, 'Sid');

const rect1: IRect = {
    size: {height: 10, width: 14},
    getArea: () : number => {
        return this.size.height * this.size.width;
    }
}

rect1.color = '#333'

const rect3 = {} as IRect
const rect4 = <IRect>{}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}

```

## Generics
```typescript
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

const reverse2 = <T>(array: T[]): T[] => {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
```

## Enums 
```typescript
enum AlertTypes {
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}

enum Components {
    First,
    Second
}
```