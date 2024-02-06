//let face1;
//let face2;
let selectedColor;
let faces;

function setup() {
  createCanvas(400, 400);
  //face1 = new Face(200, 150, color('blue'));
  //face2 = new Face(50, 50, color('orange'));
  selectedColor = color('white');

  faces = [
    new Face(200, 150, color('blue')),
    new Face(50, 50, color('orange')),
    new Face(100, 250, color('purple'))
  ];
}

function draw() {
  background(220);

  //face1.draw();
  //face2.draw();

  for (let i = 0; i < faces.length; i++) {
    faces[i].draw();
  }

  fill(selectedColor);
  circle(width-30, 30, 20);
}

function mousePressed() {
  //if(face1.contains(mouseX, mouseY)) {
  //  selectedColor = face1.fill;
  //} else if(face2.contains(mouseX, mouseY)) {
  //  selectedColor = face2.fill;
  //} else {
  //  selectedColor = color('white');
  //}

  let isInFace = false;

  for (let i = 0; i < faces.length; i++) {
    if(faces[i].contains(mouseX, mouseY)) {
      selectedColor = faces[i].fill;
      isInFace = true;
    }
  }

  if(!isInFace) {
    selectedColor = color('white');
  }

  console.log("selected color is " + selectedColor);
}

class Face {
  constructor(x, y, fill) {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }
  draw() {
    fill(this.fill);
    square(this.x, this.y, 100);
    fill(0);
    circle(this.x + 20, this.y + 20, 10);
    circle(this.x + 80, this.y + 25, 15);
  
    stroke(0);
    line(this.x + 20, this.y + 100, this.x + 80, this.y + 100);
  }

  contains(x, y) {
    let insideX = x >= this.x && x <= this.x + 100;
    let insideY = y >= this.y && y <= this.y + 100;

    return insideX && insideY;
  }
}

