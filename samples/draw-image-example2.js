require('../dist');

window.title = 'Basic Example';

const ctx = canvas.getContext('2d');

loadImage(__dirname + '/mooninites.png').then((img) => {
    ctx.drawImage(img, 0, 0);
});

