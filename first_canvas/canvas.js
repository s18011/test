const canvas = document.getElementById("display");
const ctx = canvas.getContext("2d");
const FPS = 1000 / 60;
const ANGLE360 =Math.PI * 2;

function game_tick() {
    //canvasの消去
    ctx.clearRect(0, 0, 800, 600);
    sprites.forEach()
}
window.setInterval(game_tick, FPS);


class Block {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

    }

    draw(ctx) {
        ctx.save();

        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

        ctx.restore();
    }
}

sprites.push(new Block(210, 210, 50, 20, "red"));
sprites.push(new Block(270, 210, 50, 20, "red"));
sprites.push(new Block(270, 240, 50, 20, "red"));
sprites.push(new Block(330, 240, 50, 20, "red"));

sprites.push(new Ball(400, 300, 0, 0, "blue"));