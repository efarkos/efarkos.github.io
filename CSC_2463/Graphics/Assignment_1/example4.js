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
    beginShape ();
    vertex(200, 100);
    vertex(222, 168);
    vertex(293, 168);
    vertex(235, 213);
    vertex(257, 280);
    vertex(200, 238);
    vertex(143, 280);
    vertex(165, 213);
    vertex(107, 168);
    vertex(178, 168);
    endShape (CLOSE);
}