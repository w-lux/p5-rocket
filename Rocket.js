function Rocket(){
   this.pos = createVector(width/2, height);
   this.vel = createVector(0,-1);
   this.acc = createVector();

   this.applyForce = function (force){
      this.acc.add(force);
   }

   this.update = function(){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
   }

   this.show = function (){
      translate(this.pos.x, this.pos.y)
      rotate(this.vel.heading());
      rectMode(CENTER);
      rect(0,0,50,10);
      pop();
   }
}
