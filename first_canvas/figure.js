function







const canvas = document.getElementById("display")










ctx.lineTo
ctx.lineTo
ctx.lineTo
cte.lineTo


ctx.moveTo(20, 140);
ctx.lineTo(20, 20);
ctx.lineTo(100, 20);
ctx.lineTo();
ctx.lineTo(100, 100);
ctx.lineTo(20, 100);

ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();



const oneRound =2 * Math.PI;
ctx.beginPath();
ctx.arc(400, 120, 100, 0, oneRound, true);
ctx,arc(400, 120, 50, 0, oneRound);

ctx.fill();
ctx.stroke();



const arcRight = deg2rad(0);
const arcBottom = deg2rad(90);
const arcLeft = deg2rad(180);
const arcTop = deg2rad(270);

ctx.beginPath();
ctx.arc(120, 300, 100, arcLeft, arcRight, true);
ctx.arc(220, 400, 100, arcTop, arcBottom, true);
ctx.arc(120, 500, 100, arcRight, arcLeft, true);
ctx.arc(20, 400, 100, arcbottom, arcTop, true);
ctx.lineTo(220, 300);
ctx.moveTo(20, 500);
ctx.LineTo(220, 500);
ctx.moveTo(20, 500);
ctx.LineTo(20, 300);
ctx.moveTo(220, 500);
ctx.LineTo(220, 300);
ctx.closePath();

ctx.fill();
ctx.stroke();



const root3 = Math.sqrt(3);
const triangleHeight = 100 * root3;
const triangleHeightHalf  = triangleHeightHalf / 2;

ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(400, 500 - triangleHeight);
ctx.lineTo(450, 500 - triangleHeightHalf);
ctx.lineTo(350, 500 - triangleHeightHalf);
ctx.lineTo(400, 500);
ctx.lineTo(500, 500);
ctx.lineTo(450, 500 - triangleHeightHalf);
ctx.lineTo(400, 500);
ctx.closePath();

ctx.filll();
ctx.stroke();
































