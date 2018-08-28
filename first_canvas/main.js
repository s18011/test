//canvasを取得
const canvas = document.getElementById("display");

// contextを取得
const context = canvas.getContext("2d");

//canvasのサイズを取得しておく
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

//動いているか確認のために色を塗る
//context.fillstyle = "rgb(255, 0, 0)";
//context.fillRect(0, 0, WIDTH, HEIGHT);

//strokeの色を指定
context.strokeStyle = "rgb(0, 255, 0)";

//先の太さ(幅)
context.linewidth =

//パスの開始
context.beginPath();

//最初の地点へ
context.moveTo(30, 20);

//2点目まで直線的に
context.lineTo(120, 20);

//3点目まで直線的に
context.lineTo(120, 120);

//4点目まで直接的に
context.lineTo(20, 320);

context.lineTo(70, 70);

//パスを閉じるように
context.closePath();

//パスの通り線を引く
context.stroke();

//長方形2個目
context.beginPath();
context.moveTo(300, 30);
context.lineTo(650, 20);
context.lineTo(650, 320);
context.lineTo(350, 320);
context.closePath();

//長方形3個目
context.moveTo(370, 40);
context.lineTo(670, 40);
context.lineTo(670, 340);
context.lineTo(370, 340);
context.lineTo(370, 40);

// context.closePath();

context.lineWidth = 1;
context.strokeStyle = "rgb(0, 0, 0)";

context.stroke();

//rectを使って短形
context.beginPath();
context.moveTo(500, 20);
context.rect(500, 20, 200, 150);
context.rect(580, 20, 200,150);

context.fillStyle = "rgb(0, 128, 255";
context.fill();
context.stroke();

// arcを使って円弧
context.beginPath();
context.arc(70, 300, 50);

context.fillStyle = "rgb(128, 255, 0)";
context.fill();
context.arc(70, 300, 50, 0, deg2rad(90));
context.closePath()
