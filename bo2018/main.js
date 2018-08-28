const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = canvas.width;
const WINDOW_HEIGHT = canvas.height;
const SPF = 1000 / 60;
const PADDLE_SPEED = 5;
const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 20;

const input = new Input();
const ball = new Ball(400, 300, 10, 'yellow');
const paddle = new Paddle(400, 550, 80, 10, '#EA0032');
const blocks = [];


blocks.push(new Block(94, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(145, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(196, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(247, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(298, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(349, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(400, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(451, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(502, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(553, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(604, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(655, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(706, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(94, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(145, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(196, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(247, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(298, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(349, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(400, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(451, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(502, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(553, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(604, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(655, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(706, 71, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(94, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(145, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(196, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(247, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(298, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(349, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(400, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(451, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(502, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(553, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(604, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(655, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(706, 92, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));



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