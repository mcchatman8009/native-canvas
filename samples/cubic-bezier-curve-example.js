const nativeCanvas = require('../dist');

const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext("2d");

// ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(20,20);
ctx.bezierCurveTo(20,100,200,100,200,20);
ctx.stroke();
