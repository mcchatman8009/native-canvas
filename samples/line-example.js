const nativeCanvas = require('../dist');
const fs = require('fs');

const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext('2d');
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
