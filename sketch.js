//node: http-server
//python: python -m SimpleHTTPServer
let angle = 0;
let cameraAngle = 0.0;

function setup() {
  createCanvas(600, 600, WEBGL);
  // put setup code here
}

function draw() {
	background(255);
  //directionalLight(219, 132, 245, 10, 10, 0);
  directionalLight(69, 191, 247, 555, 0, 0);
  directionalLight(247, 161, 69, 600, 550, 0);
  directionalLight(250, 239, 82, 200, 600, 0);
  directionalLight(252, 186, 3, 550, 50, 0);
  push();
  translate(0, 0, 100);
  specularMaterial(255);
    shininess(20);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(252, 61, 192);
  cone(2000);
  pop();


	
	// angle += 0.00075;
	 // camera rotation 
  camera(0, 20 + sin(frameCount * (0.005)) * 10, 200 + sin(frameCount * 0.001) * 3000, 0, 0, 0, 0, 1, 0);

}