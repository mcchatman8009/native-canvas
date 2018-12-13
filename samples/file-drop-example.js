require('../dist');

window.title = 'Basic Example';

const ctx = canvas.getContext("2d");

window.addEventListener('drop', (evt) => {
    createImage(evt.file).then((img) => {
        ctx.drawImage(img, 0, 0);
    });
});

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = 'black';
ctx.fillText("Please Drag and Drop a Image", 10, 50);
