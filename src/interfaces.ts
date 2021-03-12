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

console.log(human.age)
human.read()