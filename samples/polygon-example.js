require('../dist');

const ctx = canvas.getContext("2d");

ctx.fillStyle = '#ff0000';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 50);
ctx.lineTo(50, 100);
ctx.lineTo(0, 90);
ctx.closePath();
ctx.fill();
