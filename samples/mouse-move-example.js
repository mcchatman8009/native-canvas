const nativeCanvas = require('../dist');

const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext("2d");
// canvas.height = 150;

ctx.lineWidth = 1;
canvas.addEventListener('mousemove', (evt) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(evt.clientX, evt.clientY, 40, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    if (evt.ctrlKey) {
        console.log(evt);
    }

});

