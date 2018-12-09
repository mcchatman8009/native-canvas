const {loadImage, Image} = require('canvas');
const nativeCanvas = require('../dist');
const fs = require('fs');
const canvas = nativeCanvas.createCanvas('Basic Example');
const ctx = canvas.getContext('2d');

loadImage('mooninites.png').then((img) => {
    ctx.drawImage(img, 0, 0);
});

