let synth = new Tone.PolySynth(Tone.Synth);
synth.toDestination();

let notes = {
  'a': 'C1',
  's': 'D1',
  'd': 'E1',
  'f': 'F1',
  'g': 'G1',
  'h': 'A2',
  'j': 'B2',
  'k': 'C2'
}

let selectedOctave = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text("Play notes with A through K", 125, 150);
  text("and change octave with 1 through 7", 100, 175);
  text("Current octave: " + selectedOctave, 150, 230);
}

function keyPressed() {
  if(keyCode >= 49 && keyCode < 56) {
    selectedOctave = keyCode - 48;
    updateOctave();
  }
  let note = notes[key];
  synth.triggerAttack(note);
}

function keyReleased() {
  let note = notes[key];
  synth.triggerRelease(note, '+0.03');
}

function updateOctave() {
  notes = {
    'a': 'C' + selectedOctave,
    's': 'D' + selectedOctave,
    'd': 'E' + selectedOctave,
    'f': 'F' + selectedOctave,
    'g': 'G' + selectedOctave,
    'h': 'A' + (selectedOctave + 1),
    'j': 'B' + (selectedOctave + 1),
    'k': 'C' + (selectedOctave + 1)
  }
}
