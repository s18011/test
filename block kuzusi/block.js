class Block {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.half_width = width / 2;
        this.half_height = height / 2;
        this.color = color;
    }

    draw(ctx) {
        ctx.save();

        ctx.translate(this.x, this.y);

        ctx.beginPath();
        ctx.moveTo(this.half_width, 0);
        ctx.lineTo(this.half_width, this.half_height);
        ctx.lineTo(-this.half_width, this.half_height);
        ctx.lineTo(-this.half_width, -this.half_height);
        ctx.lineTo(this.half_width, -this.half_height);
        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }

    collide(ball) {
        let result = true;
        const top = this.y - this.half_height;
        const bottom = this.y + this.half_height;
        // ボールがパドルより上か下にある場合、何もしない
        if (top > ball.bottom || bottom < ball.top) {
            return;
        }

        const left = this.x - this.half_width;
        const right = this.x + this.half_width;

        if (left < ball.right && right > ball.left) {
            if (ball.rightBottom.x < left && ball.rightBottom.y > top
                && ball.rightBottom.y < bottom) {
                // ブロックの左上角より下側であたったら上に戻さない
                ball.reboundHorizontal(left - ball.right);
            } else if (ball.leftBottom.x > right && ball.leftBottom.y > top
                && ball.leftBottom.y < bottom) {
                // ブロックの右上角より下側であたったら上に戻さない
                ball.reboundHorizontal(ball.left - right);
            } else if (ball.rightTop.x > left && ball.rightTop.y > bottom
                && ball.rightTop.y < top) {
                //　ブロックの左上角より上側であったら下に戻さない　
                ball.reboundHorizontal(left - ball.right);
            } else if (ball.leftTop.x > right && ball.leftTop.y < bottom
                && ball.leftTop.y > top) {
                // ブロックの右下角より上側で当たったら下に戻さない
                ball.reboundHorizontal(ball.left - right);
            } else if (ball.bottom > top && ball.top < top) {
                // ブロックの上に当たった
                ball.reboundVertical(ball.bottom - top);

            } else {
                // ブロックの下に当たった
                ball.reboundVertical(ball.top - bottom);
            }
        } else {
            result = false;
        }

        return result;
    }
}