// ドーナツ型
const oneRound = 2 * Math.PI;
ctx.beginPath();
ctx.arc(400, 120, 100, 0, oneRound, true);
ctx.arc(400, 120, 50, 0, oneRound);

ctx.fill();
ctx.stroke();


//
const arcRight = deg2rad(0);
const arcBottom = deg2rad(90);
const arcLeft = deg2rad(180);
const arcTop = deg2rad(270);

ctx.beginPath();
ctx.arc(120, 300, 100, arcLeft, arcRight, true);
ctx.arc(220, 400, 100, arcTop, arcBottom, true);
ctx.arc(120, 500, 100, arcRight, arcLeft, true);
ctx.arc(20, 400, 100, arcBottom, arcTop, true);
ctx.lineTo(220, 300);
ctx.moveTo(20, 500);
ctx.lineTo(220, 500);
ctx.moveTo(20, 500);
ctx.lineTo(20, 300);
ctx.moveTo(220, 500);
ctx.lineTo(220, 300);
ctx.closePath();

ctx.fill();
ctx.stroke();


// triangle
const root3 = Math.sqrt(3);
const triangleHeight = 100 * root3;
const triangleHeightHalf = triangleHeight / 2;

ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(400, 500 - triangleHeight);
ctx.lineTo(450, 500 - triangleHeightHalf);
ctx.lineTo(350, 500 - triangleHeightHalf);
ctx.

