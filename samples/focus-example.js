const nativeCanvas = require('../dist');

const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext("2d");

canvas.addEventListener('focus', (evt) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('blur', (evt) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});
