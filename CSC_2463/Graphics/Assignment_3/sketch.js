let characters = [];

function preload() {
  let xCoord;
  let yCoord;
  let sheets = ['assets/SpelunkyGuy.png', 'assets/Blue.png', 'assets/Ninja.png'];

  let animations = {
    stand: { row: 0, frames: 1},
    walk: {row: 0, col: 1, frames: 8},
  };

  for(let i = 0; i < 3; i++) {
    xCoord = Math.floor(Math.random() * 361) + 20;
    yCoord = Math.floor(Math.random() * 361) + 20;
    characters.push(new Character(xCoord, yCoord, 80, 80, sheets[i], animations));
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if(keyIsDown(RIGHT_ARROW)) {
    for(let i = 0; i < characters.length; i++) {
      characters[i].walkRight();
    }
  } else if(keyIsDown(LEFT_ARROW)) {
    for(let i = 0; i < characters.length; i++) {
      characters[i].walkLeft();
    }
  } else {
    for(let i = 0; i < characters.length; i++) {
      characters[i].stop();
    }
  }
}

class Character{
  constructor(x, y, width, height, spriteSheet, animations) {
    this.sprite = new Sprite(x, y, width, height);
    this.sprite.spriteSheet = spriteSheet;
    this.sprite.addAnis(animations);
    this.sprite.anis.frameDelay = 6;
    this.sprite.changeAni('stand');
  }

  walkRight() {
    if(this.sprite.x + this.sprite.width/4 > width) {
      this.stop();
    } else {
      this.sprite.changeAni('walk');
      this.sprite.vel.x = 1;
      this.sprite.vel.y = 0;
      this.sprite.scale.x = 1;
    }
  }

  walkLeft() {
    if(this.sprite.x - this.sprite.width/4 < 0) {
      this.stop();
    } else {
      this.sprite.changeAni('walk');
      this.sprite.vel.x = -1;
      this.sprite.vel.y = 0;
      this.sprite.scale.x = -1;
    }
  }

  stop() {
    this.sprite.changeAni('stand');
    this.sprite.vel.x = 0;
    this.sprite.vel.y = 0;
  }
}