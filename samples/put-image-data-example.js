require('../dist');

const ctx = canvas.getContext("2d");

function putImageData(ctx, imageData, dx, dy,
                      dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
    const data = imageData.data;
    const height = imageData.height;
    const width = imageData.width;
    dirtyX = dirtyX || 0;
    dirtyY = dirtyY || 0;
    dirtyWidth = dirtyWidth !== undefined ? dirtyWidth : width;
    dirtyHeight = dirtyHeight !== undefined ? dirtyHeight : height;
    const limitBottom = dirtyY + dirtyHeight;
    const limitRight = dirtyX + dirtyWidth;

    for (let y = dirtyY; y < limitBottom; y++) {
        for (let x = dirtyX; x < limitRight; x++) {
            let pos = y * width + x;
            ctx.fillStyle = 'rgba(' + data[pos * 4 + 0]
                + ',' + data[pos * 4 + 1]
                + ',' + data[pos * 4 + 2]
                + ',' + (data[pos * 4 + 3] / 255) + ')';
            ctx.fillRect(x + dx, y + dy, 1, 1);
        }
    }
}

// Draw content onto the internalCanvas
ctx.fillRect(0, 0, 100, 100);
// Create an ImageData object from it
const imagedata = ctx.getImageData(0, 0, 100, 100);
// use the putImageData function that illustrates how putImageData works
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);
