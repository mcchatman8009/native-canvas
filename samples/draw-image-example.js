const nativeCanvas = require('../dist');

global.window.close(); // close the default window

const window = nativeCanvas.createWindow({title: 'Yamcha', fitCanvasInWindow: true});
// window.fullScreen = true;
const canvas = window.canvas;
canvas.width = 520;
const ctx = canvas.getContext('2d');

ctx.scale(2, 2);

window.loadImage(__dirname + '/yamcha.jpg').then((img) => {
    ctx.drawImage(img, 0, 0);
});

window.canvasX = 100;
window.canvasY = 100;
console.log(canvas.width);

