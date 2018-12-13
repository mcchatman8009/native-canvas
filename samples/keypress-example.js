require('../dist');

const ctx = canvas.getContext("2d");

canvas.addEventListener('keypress', (evt) => {
    console.log(evt);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(40, 40, 40, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = 'black';
    ctx.fillText(`"${evt.key}"`, 10, 50);
});

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(40, 40, 40, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();

