const nativeCanvas = require('../dist');

const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext("2d");

ctx.lineWidth = 1;
ctx.fillStyle = "#FF0000";
// ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
// ctx.rect(0, 0, 150, 75);
// ctx.stroke();
