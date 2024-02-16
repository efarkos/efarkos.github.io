let cyclops;

function preload() {
  cyclops = new Sprite(200, 200, 80);
  cyclops.spriteSheet = 'assets/cyclops.png';
  
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  };

  cyclops.anis.frameDelay = 6;
  cyclops.addAnis(animations);
  cyclops.changeAni('stand');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (cyclops.x + cyclops.width/4> width) {
    cyclops.vel.x = -1;
    cyclops.scale.x = -1;
  } else if(cyclops.x - cyclops.width/4< 0) {
    cyclops.vel.x = 1;
    cyclops.scale.x = 1;
  } else if(cyclops.y - cyclops.height/4 < 0) {
    cyclops.vel.y = 1;
    cyclops.changeAni('walkDown');
  } else if(cyclops.y + cyclops.height/4 > height) {
    cyclops.vel.y = -1;
    cyclops.changeAni('walkUp');
  }

//  if(kb.pressing('d')) {
//    walkLeft();
//  } else if(kb.pressing('a')) {
//    walkRight();
//  } else if(kb.pressing('w')) {
//    walkUp();
//  } else if(kb.pressing('s')) {
//    walkDown();
//  } else {
//    stop();
//  }
}

function keyTyped() {
  switch(key) {
    case 'd':
      cyclops.changeAni('walkRight');
      cyclops.vel.x = 1;
      cyclops.vel.y = 0;
      cyclops.scale.x = 1;
      break;
    case 'a':
      cyclops.changeAni('walkRight');
      cyclops.vel.x = -1;
      cyclops.vel.y = 0;
      cyclops.scale.x = -1;
      break;
    case 'w':
      cyclops.changeAni('walkUp');
      cyclops.vel.x = 0;
      cyclops.vel.y = -1;
      cyclops.scale.x = 1;
      break;
    case 's':
      cyclops.changeAni('walkDown');
      cyclops.vel.x = 0;
      cyclops.vel.y = 1;
      cyclops.scale.x = 1;
      break;
  }
}