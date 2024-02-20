let soundFX, button1, button2;

function preload() {
  soundFX = new Tone.Players ({
    rocket: "assets/firework_rocket.mp3",
    bang: "assets/firework_bang.mp3"
  }).toDestination();
}

function keyPressed() {
  switch(key) {
    case 'q':
      soundFX.player('rocket').start();
      break;
    case 'w':
      soundFX.player('bang').start();
      break;
  }
}

function setup() {
  createCanvas(400, 400);

  button1 = createButton('Rocket');
  button1.position(85, 150);
  button1.mousePressed(play1);
  button2 = createButton('Bang');
  button2.position(205, 150);
  button2.mousePressed(play2);
}

function play1() {
  soundFX.player('rocket').start();
}

function play2() {
  soundFX.player('bang').start();
}

function draw() {
  background(220);
  text("Press Q or W", 120, 150);
}
