const canvas = document.getElementById("display");
const ctx = canvas.getContext("2d");
const FPS = 1000 / 60;

let pos = {x: 10, y: 10};






let leftkey = false;
let rightkey = false;

function draw() {
    ctx.save();

    if (leftkey) {
        pos.x -= 2;
    }
    if (rightkey) {
        pos.x += 2;
    }
    if (pos.x < 10) {
        pos.x = 10;
    } else if (pos.x > 790){
        pos.x = 790;
    }


    pos2.x += dx2;
    pos.y += dy2;
    if (pos.x)
}

window.setInterval(draw, 1000);

















{


    ctx.fillStyle = 'red';

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 10, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
}

window.setIntervel(draw, FPS);

function keyDownListener(event) {
    if (event.key === "ArrowLeft") {
        leftkey = true;
    }
    if (event.key === "ArrowRight") {
        rightkey = true;
    }
    if (event.key === "ArrowUp") {
        pos.y -= 2;
    }
    if (event.key === "ArrowDown") {
        pos.y += 2;
    }
}

function keyUpLestener(event) {
    if (event.key === "ArrowLeft") {
        leftkey = false;
    }
    if (event.key === "ArrowRight") {
        rightkey = false;
    }
}