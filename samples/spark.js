const nativeCanvas = require('../dist');
const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext('2d');

function spark(ctx, data) {
    let len = data.length;
    let pad = 1;
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let barWidth = width / len;
    let max = Math.max.apply(null, data);

    ctx.fillStyle = 'rgba(0,0,255,0.5)';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;

    data.forEach(function (n, i) {
        let x = i * barWidth + pad;
        let y = height * (n / max);

        ctx.lineTo(x, height - y);
        ctx.fillRect(x, height, barWidth - pad, -y);
    });

    ctx.stroke();
}

spark(ctx, [1, 2, 4, 5, 10, 4, 2, 5, 4, 3, 3, 2]);
