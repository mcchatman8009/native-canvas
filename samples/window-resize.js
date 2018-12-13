require('../dist');

const ctx = canvas.getContext("2d");

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black';
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
};

window.addEventListener('resize', draw);

draw();

