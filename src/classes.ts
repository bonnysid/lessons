abstract class Human {
    abstract age: number

    abstract walk(): void;
}

class SmartHuman extends Human {
    protected salary: number = 5000;
    age: number;

    constructor(age: number) {
        super();
        this.age = age
    }

    walk(): void {
        console.log('Walking')
    }

}

new SmartHuman(1)