let pos = 0;

function animation() {
    pos++;

    if (pos < 300) {
        requestAnimationFrame(animation);
    } else {
        cancelAnimationFrame(animation);
    }
}