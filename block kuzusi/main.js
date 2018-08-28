const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = canvas.width;
const WINDOW_HEIGHT = canvas.height;
const SPF = 1000 / 60;
const PADDLE_SPEED = 5;
const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 20;

const input = new Input();
const ball = new Ball(400, 300, 10, 'red');
const paddle = new Paddle(400, 550, 80, 10, 'deepskyblue');
let blocks = [];

blocks.push(new Block(400, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(300, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(200, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(100, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(500, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(600, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(700, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(400, 100, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(300, 100, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(200, 100, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(100, 100, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(500, 100, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(600, 100, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(700, 100, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));

window.setInterval(game_tick, SPF);

function game_tick() {
    // 入力状況に応じた呼び出し
    if (input.space) {
        ball.start(5);
    }
    if (input.left) {
        paddle.move(-PADDLE_SPEED);
    }
    if (input.right) {
        paddle.move(PADDLE_SPEED);
    }


    // ボールの移動
    ball.move();

    // ボールとブロックの当たり判定
    paddle.collide(ball);
    // ボールとブロックの当たり判定
    blocks_collide();



    // 各種オブジェクトの描画
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    paddle.draw(ctx);
    ball.draw(ctx);
    blocks.forEach((block) => block.draw(ctx));
}

function blocks_collide() {
    // 動作確認用のサンプルコード
    if (blocks[0] && blocks[0].collide(ball)) {
        blocks.splice(0, 1);
    }
}