var boids = [];
var maxBoids = 50;

function setup() {
createCanvas(1120,760);
background(21,3,77);\
loadBoids(maxBoids);
}
function draw() {
  runBoids();
}

function loadboids (mb){
  // load my array with boids
  for(var i = 0; i < mb; i++){}
  boids[i]=new Boid(random(width),random(height), random(15,20));
}
}
function runBoids(){
	//  Load my array with boids
	for(var i = 0; i < maxBoids; i++){
	  boids[i].run();
	}
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++  Boid code
