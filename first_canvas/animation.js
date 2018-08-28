const canvas = document.getElementById("display");
const ctx = canvas.getContext("2d");
const FPS = 1000 / 60;

let pos = {x: 10, y: 10};
let dx = 2;

function  draw () {
    ctx.save();
if (leftkey) {
    pos.x -= 2;
}
if (rightkey) {
    pos.x += 2;
}

    if (pos.x < 10 || pos.x > 790) {
        dx *= -dx;
    }

    ctx.clearRect(0, 0, 800, 600); // canvasの消去
    ctx.fillStyle = 'blue';

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
}

window.setInterval(draw, FPS);

function keyDownListener(event) {
    if (event.key === "ArrowLeft") {
        leftkey = 2;
}
    if (event.key === "ArrowRight") {
        pos.x += 2;
    }
    if (event.key === "ArrowLeft")
}

window.addEventListener('keydown', keyDownListener);
window.addEventListener('keyup', keyUpListener);