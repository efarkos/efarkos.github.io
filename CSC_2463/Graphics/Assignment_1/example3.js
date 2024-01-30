function setup() {
    createCanvas(400, 200);
}

function draw() {
    background (0);
    noStroke();
    fill(255, 255, 0);
    arc(100, 100, 160, 160, PI + QUARTER_PI, PI - QUARTER_PI, PIE);
    fill(255, 0, 0);
    ellipse(300,100,160,160);
    rect(220, 100, 160, 80);
    fill(255);
    ellipse(260, 100, 50, 50);
    ellipse(340, 100, 50, 50);
    fill(0, 0, 255);
    ellipse(260, 100, 25, 25);
    ellipse(340, 100, 25, 25);
}