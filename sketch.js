
var dim;

function setup() {
  createCanvas(800, 800);
  dim = width/4;
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  background("black");
}

function draw() {
  var x = mouseX/8;
  var y= mouseY/8;
  drawGradient(mouseX, mouseY);
}

function drawGradient(x, y) {
  var radius = dim/4;
  for (r = radius; r > 0; --r) {
    fill(r, 100, mouseY/6);
    ellipse(x, y, r, r);
  }
}
