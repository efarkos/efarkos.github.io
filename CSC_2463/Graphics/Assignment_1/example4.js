function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0, 0, 127);
    stroke(255);
    strokeWeight(5);
    fill(0,127,0);
    ellipse(200, 200, 200, 200);
    fill(255, 0, 0);
    star(200, 200, 100, 38, 5);
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a + HALF_PI) * radius2;
      let sy = y + sin(a + HALF_PI) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + HALF_PI + halfAngle) * radius1;
      sy = y + sin(a + HALF_PI + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }