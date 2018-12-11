require('../dist');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext("2d");
canvas.height = 150;

canvas.requestFullscreen();

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = 'black';
ctx.fillText("Click to Exit FullScreen", 10, 50);

document.title = 'Fullscreen';


document.onclick = (evt) => {
    document.exitFullscreen();
};

