window.addEventListener('DOMContentLoaded', () => {
    const game = document.querySelector('#game');
    const ctx = game.getContext('2d');

    ctx.fillRect(0, 0, game.width, game.height); // x y width height - закрашенный прямоугольник
    ctx.strokeRect(0, 0, game.width - 5, game.height - 5); // x y width height - контур прямоугольника
    ctx.clearRect(5, 5, game.width - 10, game.height - 10); // x y width height - отчистка в виде прямоугольника

    ctx.beginPath();
    ctx.moveTo(10, 10); //передвигает начальное положение в указанные координаты
    ctx.lineTo(30, 10); //проводит линию в указанные координаты
    ctx.lineTo(30, 30);
    ctx.lineTo(30, 30);
    ctx.lineTo(10, 30);
    ctx.lineTo(10, 10);
    // ctx.fill(); //закрашивает внутри
    ctx.stroke(); //закрашивает контур
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#333333'; // цвет заливки
    ctx.strokeStyle = '#e2e2e2'; // цвет контура
    ctx.arc(150, 150, 30, 0, Math.PI, true); // окуржность x y radius startangle endangle  направление
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(10, 50);
    ctx.bezierCurveTo(200, 55, 175, 20, 250, 15); // кривая bezierCurveTo(P1x, P1y, P2x, P2y, x, y) quadraticCurveTo(Px, Py, x, y) 
    ctx.moveTo(10, 50);
    ctx.quadraticCurveTo(100, 100, 250, 15);
    ctx.stroke();

    const img = new Image();
    const gif = new Image();
    img.src = 'man.jpg';
    gif.src = 'hero_run.gif';

    gif.onload = () => {
        ctx.drawImage(gif, 200, 200);
    }
    img.onload = () => {
        ctx.drawImage(img, 200, 200, 200, 200, 100, 100, 100, 100); // img ; положение на рисунке по x; положение на рисунке по y; размер показываемого фрагмента изображения width; height; x; y; w; h на холсте
    };
    console.log(ctx);

});