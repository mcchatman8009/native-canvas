const nativeCanvas = require('../dist');

const canvas = nativeCanvas.createCanvas('Basic Example');
// internalCanvas.width = 400;
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();

let imageData = ctx.getImageData(60, 60, 200, 100);
ctx.putImageData(imageData, 150, 10);
