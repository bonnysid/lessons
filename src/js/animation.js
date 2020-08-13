const objects = [];
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

const pressedKeys = {
    'move': 0,
};

canvas.style.border = '1px solid #333';

// function draw(objects) {
//     objects.forEach((object) => {
//         object.draw();
//     });
// }

// function update(objects) {
//     objects.forEach((object) => {
//         object.update();
//     });
// }

function anim() {
    animation.draw();
    animation.update();
    requestAnimationFrame(anim);
}

class AnimationGame {
    constructor(objects, canvas, ctx) {
        this.objects = objects;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.objects.forEach((obj) => {
            obj.draw();
        });

    }

    update() {
        this.objects.forEach((obj) => {
            obj.update();
        });
    }
}

class test {
    constructor(img, ctx, canvas, width, height, pressedKeys, scale = 1, posX = 0, speed = 10, direction = 1) {
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.speed = speed;
        this.img = img;
        this.ctx = ctx;
        this.canvas = canvas;
        this.scale = scale;
        this.direction = direction;
        this.pressedKeys = pressedKeys;
    }

    update() {
        for (let key in this.pressedKeys) {
            // console.log(key);
            if (this.pressedKeys[key] != 1 && this.pressedKeys[key] != -1) this.direction = 0;
            else this.direction = this.pressedKeys[key];
        }
        this.posX += this.speed * this.direction;
        // console.log(`speed = ${this.speed}, posX = ${this.posX}`);
        if (this.posX + this.width * this.scale >= this.canvas.width) this.posX = this.canvas.width - this.width * this.scale;
        if (this.posX < 0) this.posX = 0;
    }

    draw() {
        this.ctx.drawImage(this.img, 0, 0, this.width, this.height, this.posX, 100, this.width * this.scale, this.height * this.scale);
        this.ctx.strokeRect(this.posX, 0, this.width * this.scale, this.height * this.scale);
    }
}

const man = new Image();
const heroIMG = new Image();
const animation = new AnimationGame(objects, canvas, ctx);
let hero;

// man.onload = () => {
//     objects.push(new test(man, ctx, canvas, 400, 400, 1));
//     animation.objects = objects;
//     anim();
// };

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

heroIMG.onload = () => {
    hero = new test(heroIMG, ctx, canvas, 48, 48, pressedKeys, 2, 0, 2);
    objects.push(hero);
    animation.objects = objects;
    anim();
};

window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 68:
            pressedKeys.move = 1;
            break;
        case 65:
            pressedKeys.move = -1;
            break;
        default:
            pressedKeys.move = 0;
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
        case 68:
            if (pressedKeys.move != 0) pressedKeys.move = 0;
            break;
        case 65:
            if (pressedKeys.move != 0) pressedKeys.move = 0;
            break;
        default:
            if (pressedKeys.move != 0) pressedKeys.move = 0;
            break;
    }
});

man.src = 'man.jpg';
heroIMG.src = 'hero_run.gif';