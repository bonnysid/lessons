class Human {
    //fields
    #
    lastName = 'Bortsov'; // # set field in private

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(name) {
        this.#lastName = name;
    }

    getInf() {
        console.log(`Name is ${name} ${this.#lastName}, age is ${this.age}`);
    }
}