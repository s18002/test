const canbas = document.getElementById("display")
const ctx = canvas.getContext("2d");
const FPS = 1000 / 60;

const drawFunctions = [];

function draw() {





}
window.setInterval(draw, FPS);

document.getElementById("start").addEventListener("click",
    event => {
        drawFunctions.push(
            function () {
                let x1 = 100;
                let y1 = 100;
                let vx1 = 8;
                let vy1 = 6;
                const angle360 = Math.PI * 2;

                return () => {
                    ctx.save();

                    ctx.beginPath();
                    ctx.arc(x1, y1, 5, 0, angle360)

                    ctx.fillStyle = 'green';
                    ctx.fill();

                    ctx.restore();


                    x1 += vx1;
                    y1 += vy1;

                    if (y1 + 5 > 600) {
                        y1 -= (y1 + 5) - 600;
                        vy1 = 0vy1;
                    }
                }
            }()
        )
    });