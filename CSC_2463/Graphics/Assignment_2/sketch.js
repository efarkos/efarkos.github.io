let squares;
let selectedColor;

function setup() {
  createCanvas(900, 540);
  background (255);
  selectedColor = color('white');
}

function draw() {
  stroke(255);
  squares = [
    new Square(0, 0, color('red')),
    new Square(0, 30, color('orange')),
    new Square(0, 60, color('yellow')),
    new Square(0, 90, color('lime')),
    new Square(0, 120, color('cyan')),
    new Square(0, 150, color('blue')),
    new Square(0, 180, color('magenta')),
    new Square(0, 210, color('brown')),
    new Square(0, 240, color('white')),
    new Square(0, 270, color('black'))
  ]

  if (mouseIsPressed) {
    let isInSquare = false;
    for (let i = 0; i < squares.length; i++) {
      if(squares[i].contains(mouseX, mouseY)) {
        selectedColor = squares[i].fill;
        isInSquare = true;
      }
    }
    
    fill(selectedColor);

    if(!isInSquare) {
      noStroke ();
      ellipse(mouseX, mouseY, 10, 10);
    }
  }

  stroke(255);
  for (let i = 0; i < squares.length; i++) {
    stroke(255);
    squares[i].draw();
  }
}

class Square {
  constructor(x, y, fill) {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }
  draw() {
    fill(this.fill);
    square(this.x, this.y, 30);
  }

  contains(x, y) {
    let insideX = x >= this.x && x <= this.x + 30;
    let insideY = y >= this.y && y <= this.y + 30;

    return insideX && insideY;
  }
}