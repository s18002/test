



const canvas  = document.getElementById("display");

const context = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// context.fillStyle = "rgb(255, 0, 0)";
// context.fillRect(0, 0, WIDTH, HEIGHT);

//strokeの色を指定
context.strokeStyle = "rgb(0,255,0)";

//先の太さ（幅）
context.strokeStyle = "rgb(0,255,0)";


//パスの開始
context.beginPath();

//最初の地点へ
context.moveTo(20, 20);

//2点目まで直線的に
context.lineTo(120, 20);

//3点目まで直線的に
context.lineTo(120, 120);

//
context.lineTo(20, 120);

//パスを閉じるように
context.closePath();

//パスの通り線を書く
context.stroke();

//長方形2個目
context.beginPath();
context.moveTo(350, 20);
context.lineTo(650, 20);
context.lineTo(650, 320);
context.lineTo(350, 320);
context.lineTo(350, 20);

context.moveTo(370, 40); //左上
context.lineTo(370, 340);//左下
context.lineTo(670, 340);//右下
context.lineTo(670, 40); //右上
context.lineTo(370, 40); //

//context.closePath();

context.lineWidth = 1;
context.strokeStyle = "rgb(0, 0, 0)";
context.stroke();

context.fillStyle = "rgb(0, 64, 255)";
context.fill();
context.stroke();

context.beginPath();
context.arc(70, 300, 50, 0, deg2rad(90));

context.fillStyle = "rgb(128, 255, 0)";
context.fill();
context.stroke();

context.beginPath();
context.moveTo(70, 420);
context.arc(70, 420, 50, 0, deg2rad(90), true);
context.closePath();

context.fillStyle = "rgb(128, 255, 0)";
context.fill();
context.stroke();

