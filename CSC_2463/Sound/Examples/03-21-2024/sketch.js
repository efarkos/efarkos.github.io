let player = new Tone.Player("assets/firework_rocket.mp3").toDestination();
player.loop = true;

// Play with these two values
player.playbackRate = 1;
player.reverse = false;

function mousePressed() {
  player.start();
}

function mouseReleased() {
  player.stop();
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text('Hold mouse down for loop', 2*width/5, height/4);
}
