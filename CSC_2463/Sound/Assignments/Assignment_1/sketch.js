let soundFX, delay;
let button1, button2, button3, button4;

function preload() {
  soundFX = new Tone.Players ({
    cannon: "assets/firework_cannon.mp3",
    rocket: "assets/firework_rocket.mp3",
    scream: "assets/firework_screamer.mp3",
    bang: "assets/firework_bang.mp3"
  });

  delay = new Tone.FeedbackDelay ("8n", 0.5);
  soundFX.connect(delay);
  delay.toDestination();

  delaySlider = createSlider (0., 1., 0.5, 0.05);
  delaySlider.position (125,275);
  delaySlider.mouseReleased(() => {
    delay.delayTime.value = delaySlider.value();
  })
}

function setup() {
  createCanvas(400, 400);

  button1 = createButton('Cannon');
  button1.position(85, 150);
  button1.mousePressed(cannon);
  button2 = createButton('Rocket');
  button2.position(85, 175);
  button2.mousePressed(rocket);
  button3 = createButton('Scream');
  button3.position(85, 200);
  button3.mousePressed(scream);
  button4 = createButton('Bang');
  button4.position(85, 225);
  button4.mousePressed(bang);
}

function cannon() {
  soundFX.player('cannon').start();
}

function rocket() {
  soundFX.player('rocket').start();
}

function scream() {
  soundFX.player('scream').start(); 
}

function bang() {
  soundFX.player('bang').start();
}

function draw() {
  background(220);
  text("Firework Sampler", 150, 75);
  text("Delay + Feedback", 145, 265);
}