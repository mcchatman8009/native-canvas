require('../dist');
const Phaser = require('phaser');

var config = {
    type: Phaser.CANVAS,
    canvas: createCanvas(''),
    width: 800,
    height: 600,
    physics: {},
    scene: {
    }
};

var game = new Phaser.Game(config);
var sprite;

this.load.setBaseURL('http://labs.phaser.io');
this.load.image('sky', 'assets/skies/space3.png');
this.load.image('logo', 'assets/sprites/phaser3-logo.png');
this.load.image('red', 'assets/particles/red.png');

game.load.spritesheet('ms', '//examples.phaser.io/assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

sprite = game.add.sprite(40, 100, 'ms');

sprite.animations.add('walk');

sprite.animations.play('walk', 50, true);


