//node: http-server
//python: python -m SimpleHTTPServer

function setup() {
  createCanvas(600, 600);
  background(255);
  // put setup code here
}

function draw() {
	ellipse(mouseX, mouseY, 50, 50);
}