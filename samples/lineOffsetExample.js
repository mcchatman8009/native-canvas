require('../dist');

const ctx = canvas.getContext('2d');

let offset = 0;
let x = 10;
let y = 10;

let color = 'white';

canvas.addEventListener('mouseleave', (evt) => {
    color = "white";
});

canvas.addEventListener('mouseover', (evt) => {
    color = "cyan";
});

canvas.addEventListener('mousemove', (evt) => {
    x = evt.clientX;
    y = evt.clientY;
});

// let offset = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(x, y, 100, 100);
}

function march() {
    offset++;
    if (offset > 16) {
        offset = 0;
    }
    draw();
    setTimeout(march, 20);
}

march();
