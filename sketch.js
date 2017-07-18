var population;
var lifespan = 400;
var mutation = 0.01;
var count = 0;
var lifeP;
var target;

var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
   createCanvas(400,300);
   population = new Population(50);
   lifeP = createP();
   target = createVector(width/2,50);
}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);
  count++;

  if(count == lifespan){
     count = 0;
     population.evaluate();
     population.selection();
 }

 rect(100,150,200,10);
 ellipse(target.x,target.y,16,16);
}
