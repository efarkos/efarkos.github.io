let bugs = [];
let score, speed, timeRemaining;
let animations;
let gameOver;

function preload() {
  animations = {
    stand: { row: 0, frames: 1},
    walk: {row: 0, col: 1, frames: 4},
    crushed: {row: 1, col: 0, frames: 4},
    dead: {row: 1, col: 4, frames: 1},
  };

  score = 0;
  speed = 1;
  timeRemaining = 30;
  gameOver = false;

  for(let i = 0; i < 10; i++) {
    makeBug();
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if(!gameOver) {
    playing();
  } else {
    gameDone();
  }
}

function playing() {

  for(let i = 0; i < bugs.length; i++) {
    if(!bugs[i].dead) {
      if(bugs[i].sprite.mouse.pressing()) {
        bugs[i].die();
      } else {
        bugs[i].walk();
      }
    }
  }

  textSize (16);
  text("Bugs Squished: " + score, 20, 20);
  text("Time: " + ceil(timeRemaining), width-100, 20);

  timeRemaining -= deltaTime / 1000;
  if (timeRemaining < 0) {
    gameOver = true;
  }
}

function gameDone() {
  text("Time's Up!", 100, 100);
  text("Bugs Squished: " + score, 100, 150);
  if(!bugs[i].dead) {
    bugs[i].stop();
  }
}

function makeBug() {
  xCoord = Math.floor(Math.random() * 361) + 20;
  yCoord = Math.floor(Math.random() * 361) + 20;
  rotation = Math.floor(Math.random() * 360);
  rotation %= 360;
  bugs.push(new Bug(xCoord, yCoord, 32, 32, 'assets/roach.png', animations, rotation));
}

class Bug {
  constructor(x, y, width, height, spriteSheet, animations, rotation) {
    this.sprite = new Sprite(x, y, width, height);
    this.sprite.collider = 'kinematic';
    this.sprite.spriteSheet = spriteSheet;
    this.sprite.addAnis(animations);
    this.sprite.anis.frameDelay = 4;
    this.sprite.changeAni('walk');
    this.sprite.rotation = rotation;
    this.sprite.direction = rotation + 270;
    this.sprite.direction = this.sprite.direction % 360;
    this.dead = false;
  }

  walk() {
    if(this.sprite.x - this.sprite.width/4 < 0 || this.sprite.x + this.sprite.width/4 > width) {
      this.hitLeftOrRightWall();
    }

    if(this.sprite.y - this.sprite.height/4 < 0 || this.sprite.y + this.sprite.height/4 > height) {
      this.hitTopOrBottomWall();
    }

    this.sprite.speed = speed;
  }

  stop() {
    this.sprite.speed = 0;
    this.sprite.changeAni('stand');
  }

  hitLeftOrRightWall() {
    this.sprite.rotation = this.sprite.rotation * -1 + 360;
    this.sprite.direction = this.sprite.rotation + 270;
    this.sprite.direction %= 360;
  }

  hitTopOrBottomWall() {
    this.sprite.direction = this.sprite.direction * -1 + 360;
    this.sprite.rotation = this.sprite.direction + 90;
    this.sprite.rotation %= 360;
  }

  die() {
    this.sprite.changeAni(['crushed', 'dead']);
    this.sprite.speed = 0;
    this.dead = true;
    makeBug();
    score++;
    speed = speed + 0.1;
  }
}