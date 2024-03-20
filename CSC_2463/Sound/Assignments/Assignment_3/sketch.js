let osc = new Tone.Synth(100, 'sine').toDestination();
let lfo = new Tone.LFO(2, 250, 350).connect(osc.frequency).start();
let alarm;

function preload() {
  alarm = loadImage("assets/alarm_light.jpg");
}

function mousePressed() {
  if((mouseX >= 0 && mouseX <= width) && (mouseY >= 0 && mouseY <= height)) {
    image(alarm, 0, 0);
    osc.triggerAttack();
  }
}

function mouseReleased() {
  background(255);
  text('Click canvas to sound alarm', 100, 165);
  osc.triggerRelease();
}

function setup() {
  createCanvas(360, 360);
  background(255);
  text('Click canvas to sound alarm', 100, 165);
}
