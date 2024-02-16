let characters = [];

function preload() {
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  };

  characters.push(new Character(100, 100, 80, 80, 'assets/cyclops.png', animations));
  characters.push(new Character(200, 200, 80, 80, 'assets/cyclops.png', animations));
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let i = 0; i < characters.length; i++) {
    if (characters[i].sprite.x + characters[i].sprite.width/4> width) {
      characters[i].sprite.vel.x = -1;
      characters[i].sprite.scale.x = -1;
    } else if(characters[i].sprite.x - characters[i].sprite.width/4< 0) {
      characters[i].sprite.vel.x = 1;
      characters[i].sprite.scale.x = 1;
    } else if(characters[i].sprite.y - characters[i].sprite.height/4 < 0) {
      characters[i].sprite.vel.y = 1;
      characters[i].sprite.changeAni('walkDown');
    } else if(characters[i].sprite.y + characters[i].sprite.height/4 > height) {
      characters[i].sprite.vel.y = -1;
      characters[i].sprite.changeAni('walkUp');
    }
  }
}

class Character {
  constructor(x, y, width, height, spriteSheet, animations) {
    this.sprite = new Sprite(x, y, width, height);
    this.sprite.spriteSheet = spriteSheet;

    this.sprite.anis.frameDelay = 6;
    this.sprite.addAnis(animations);
    this.sprite.changeAni('stand');
  }
}

function keyTyped() {
  switch(key) {
    case 'd':
      for(let i = 0; i < characters.length; i++) {
        characters[i].sprite.changeAni('walkRight');
        characters[i].sprite.vel.x = 1;
        characters[i].sprite.vel.y = 0;
        characters[i].sprite.scale.x = 1;
      }
      break;
    case 'a':
      for(let i = 0; i < characters.length; i++) {
        characters[i].sprite.changeAni('walkRight');
        characters[i].sprite.vel.x = -1;
        characters[i].sprite.vel.y = 0;
        characters[i].sprite.scale.x = -1;
      }
      break;
    case 'w':
      for(let i = 0; i < characters.length; i++) {
        characters[i].sprite.changeAni('walkUp');
        characters[i].sprite.vel.x = 0;
        characters[i].sprite.vel.y = -1;
        characters[i].sprite.scale.x = 1;
      }
      break;
    case 's':
      for(let i = 0; i < characters.length; i++) {
        characters[i].sprite.changeAni('walkDown');
        characters[i].sprite.vel.x = 0;
        characters[i].sprite.vel.y = 1;
        characters[i].sprite.scale.x = 1;
      }
      break;
  }
}