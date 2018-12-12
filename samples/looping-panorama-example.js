require('../dist');

let img = new Image();


// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';

let CanvasXSize = 800;
let CanvasYSize = 200;
let speed = 30; // lower is faster
let scale = 1.05;
let y = -4.5; // vertical offset

// Main program

let dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = function () {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        // image larger than internalCanvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // image width larger than internalCanvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        // image height larger than internalCanvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // get internalCanvas context
    ctx = document.getElementById('internalCanvas').getContext('2d');

    // set refresh rate
    return setInterval(draw, speed);
};

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the internalCanvas

    // if image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        // reset, start from beginning
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        // draw additional image1
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        // draw additional image2
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    // image is > Canvas Size
    else {
        // reset, start from beginning
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // draw aditional image
        if (x > (CanvasXSize - imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    // draw image
    ctx.drawImage(img, x, y, imgW, imgH);
    // amount to move
    x += dx;
}
