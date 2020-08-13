'use strict';

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        console.log(this.width * this.height);
        return this.width * this.height;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(width, height, color, text) {
        super(width, height);
        this.color = color;
        this.text = text;
    }

    showColorAndText() {
        console.log(`Цвет: ${this.color}; Текст: ${this.text}`);
    }
}

const rectangle = new Rectangle(100, 50);
rectangle.calcArea();

const redRenctangle = new ColoredRectangleWithText(20, 10, "red", "Hello");
console.log(redRenctangle.height);
redRenctangle.calcArea();
redRenctangle.showColorAndText();