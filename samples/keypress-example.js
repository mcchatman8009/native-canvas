const nativeCanvas = require('../dist');

const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext("2d");
// internalCanvas.height = 150;

ctx.lineWidth = 1;
canvas.addEventListener('keypress', (evt) => {
    console.log(evt);
});
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(40, 40, 40, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();

