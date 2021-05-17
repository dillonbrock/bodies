let bodies = [];
let particles = [];


function setup() {
  createCanvas(800,800, WEBGL);

  for (var i = 0; i < 5; i++) {
  	bodies.push(new Body());
  }

  for (var i = 0; i < bodies.length; i++) {
  	bodies[i].populate();
  }


  for (var i = 0; i < bodies.length; i++) {
  	for (var j = 0; j < bodies[i].getVertices().length; j++) {
  		particles.push(new Particle(bodies[i].getVertices()[j]));
  	}
  }
 
}

function draw() {

  background(0);
  for (var i = 0; i < bodies.length; i++) {
  	bodies[i].display();
  }
}



class Body {

	constructor() {

		this.size = 100;
		this.position = p5.Vector.random3D().mult(120);
		this.total = 100;
		this.vertices = [];
		this.r = 200;
		this.a = 1;
		this.b = 1;
		this.m = 2;
		this.n1 = 0.7;
		this.n2 = 0.7;
		this.n3 = 0.7;


	}

	populate() {

		for (let i = 0; i < this.total + 1; i++) {
			this.vertices[i] = [];
			var lat = map(i, 0, this.total, -HALF_PI, HALF_PI);
			var r2 = this.supershape(lat);
			for (let j = 0; j < this.total + 1; j++) {
				var lon = map(j, 0, this.total, -PI, PI);
				var r1 = this.supershape(lon);
				var x = this.r * r1 * cos(lon) * r2 * cos(lat);
				var y = this.r * r1 * sin(lon) * r2 * cos(lat);
				var z = this.r * r2 * sin(lat); 
				vertices[i][j] = new p5.Vector(x + this.position.x, y + this.position.y, z + z.position.z);
			}
		}


	}

	// we want bodies displayed in random positions – random within parameters that keep them from overlapping or being too far away
	// vector math probably

	supershape(theta) {

		var t1 = abs((1/this.a)*cos(this.m * theta/4));
		t1 = pow(t1, this.n2);
		var t2 = abs((1/this.b)*sin(this.m * theta/4));
		t2 = pow(t2, this.n3);
		var t3 = t1 + t2;
		var r = pow(t3, -1 / this.n1);
		return r;

	}

	getVertices() {
		return this.vertices;
	}

}

class Particle {

	constructor(position) {

		this.position = position;


	}

	move() {


	}

	display() {




	}



}
