
let perfs = [];

function setup() {
  createCanvas(800,800, WEBGL);

  for (var i = 0; i < 30; i++) {
  	perfs.push(new Dust());
  }
 
}

function draw() {

  background(0);
  for (var i = 0; i < perfs.length; i++) {
  	perfs[i].display();
  }
}




class Dust {

	constructor() {



	}

	display() {

		let x = random(-width/2, width/2);
		let y = random(-height/2, height/2);

		fill(255, 150);
		ellipse(x, y, 4, 4);
	}

}


// class Body {

// 	constructor(x, y, z) {

// 		this.x = x;
// 		this.y = y;
// 		this.z = z;
// 		this.a = 1;
// 		this.b = 1;
// 		this.m;
// 		this.n1;
// 		this.n2;
// 		this.n3;
// 		this.size = random()

// 	}

// 	display() {

// 		push();


// 		pop();

// 	}

// 	getSize() {

// 		return this.size;

// 	}

// 	supershape(m, n1, n2, n3, theta) {

// 		let t1 = abs((1/this.a)*cos(m * theta / 4));
//   		t1 = pow(t1, n2);
//   		let t2 = abs((1/this.b)*sin(m * theta/4));
//   		t2 = pow(t2, n3);
//   		let t3 = t1 + t2;
//   		let r = pow(t3, - 1 / n1);
//   		return r;

// 	}

// }
