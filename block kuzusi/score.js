class Score {
    constructor() {
        this.score = 0;
    }

    draw(ctx) {
        ctx.save();

        ctx.translate(this.score);

        ctx.beginPath();
        ctx.
        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }
}