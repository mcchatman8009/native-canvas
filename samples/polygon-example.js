const nativeCanvas = require('../dist');

const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext("2d");
// canvas.width = 1000;

ctx.fillStyle = '#ff0000';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 50);
ctx.lineTo(50, 100);
ctx.lineTo(0, 90);
ctx.closePath();
ctx.fill();
