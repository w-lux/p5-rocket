function Population(POPSIZE){
   this.rockets = [];
   this.popSize = POPSIZE;
   this.matingpool = [];

   for (var i = 0; i < this.popSize;i++){
      this.rockets[i] = new Rocket();
   }

   this.run = function(){
      for(var i = 0; i < this.popSize;i++){
         this.rockets[i].update();
         this.rockets[i].show();
      }
   }

   this.evaluate = function(){
      var maxfit = 0;
      for(var i = 0; i < this.popSize; i++){
         this.rockets[i].calcFitness();
         if(this.rockets[i].fitness > maxfit){
            maxfit = this.rockets[i].fitness
         }
      }

      for(var i = 0; i < this.popSize; i++){
         this.rockets[i].fitness = this.rockets[i].fitness / maxfit;
      }

      this.matingpool = [];

      for(var i = 0; i < this.popSize; i++){
         var n = this.rockets[i].fitness * 100;
         for (var j = 1; j < n ; j++){
            this.matingpool.push(this.rockets[i]);
         }
      }
   }

   this.selection = function(){
      var newRockets = []
      for(var i = 0; i < this.rockets.length; i++){
         var parentA = random(this.matingpool).dna;
         var parentB = random(this.matingpool).dna;
         var childDNA = parentA.crossover(parentB);
         childDNA.mutation();
         newRockets[i] = new Rocket(childDNA);
      }

      this.rockets = newRockets;
   }
}
