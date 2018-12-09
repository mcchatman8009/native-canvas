const {loadImage, Image} = require('canvas');
const nativeCanvas = require('../dist');
const fs = require('fs');
const window = nativeCanvas.createWindow({title: 'Yamcha', fitCanvasInWindow: true});
// window.fullScreen = true;
const canvas = nativeCanvas.createCanvas(window);
canvas.width = 520;
const ctx = canvas.getContext('2d');

ctx.scale(2, 2);
loadImage('yamcha.jpg').then((img) => {
    ctx.drawImage(img, 0, 0);

});

window.canvasX = 100;
window.canvasY = 100;
console.log(canvas.width);

