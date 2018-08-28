const canvas =document.getElementById("display");
const ctx = canvas.getContext("2d");
const FPS = 1000 / 60;

const drawFunctions = [];

function draw() {
    drawFunctions.forEach(func => func())
}
window.seInterval(draw, FPS);

document.getElementById("speed").addEventListener('click',
    event => {
        drawFunctions.push(() => {

            let x1 = 0;
            let y1 = 0;

            return () => {

                ctx.save();

                ctx.translate(10, 10);


                ctx.save();


                ctx.fillStyle = 'red';
                ctx.fillRect(x1, y1, 10, 10);


                ctx.restore();


                ctx.save();

                ctx.fillStyle = 'blue';
                ctx.fillrect(x1, y1, 10, 10);

                ctx.restore();
                if (x1 >810 || y1 > 610) {
                    drawFunctions.shift();
                }

                ctx.save();

                ctx.fillStyle = 'blue';
                ctx.fillRect(x2, y2, 10, 10);

                ctx.restore();

                if (x2 > 810 || y2 > 610) {
                    drawFunctions.shift();
                }

                ctx.save();

                ctx.fillStyle = 'green';
                ctx.rotate(60 * Math.PI / 180);

                ctx.fillRect(x1, y1, 10, 10);

                ctx.restore();

                x1 += 2;
                // y1 += 5;
                x2 += Math.cos(30 * Math.PI / 180) * 2;
                y2 += Math.sin(30 * Math.PI / 180) * 2;
            }  {
                let x1 = 0;
                let y1 = 0;

                return () => {

                    ctx.save();

                    ctx.translate(10, 10);


                    ctx.save();


                    ctx.fillStyle = 'red';
                    ctx.fillRect(x1, y1, 10, 10);


                    ctx.restore();


                    ctx.save();

                    ctx.fillStyle = 'blue';
                    ctx.fillrect(x1, y1, 10, 10);

                    ctx.restore();

                    ctx.save();


                    ctx.rotate(deg60);

                    ctx.fillStyle = 'green';
                    ctx.rotate(60 * Math.PI / 10);
            }
        }) 

    });
}