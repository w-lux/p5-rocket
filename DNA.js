function DNA(GENES){

   if(GENES){
      this.genes = GENES
   }
   else{
      this.genes = [];
      for (var i = 0; i < lifespan ; i++){
         this.genes[i] = p5.Vector.random2D();
         this.genes[i].setMag(0.1);
      }
   }

   this.crossover = function (PARTNER){
      var newgenes = [];
      var mid = floor(random(this.genes.length));

      for (var i = 0; i < this.genes.length; i++){
         if(i > mid){
            newgenes[i] = this.genes[i];
         }
         else{
            newgenes[i] = PARTNER.genes[i];
         }
      }
      return new DNA(newgenes);
   }

   this.mutation = function(){
      for(var i = 0; i < this.genes.length; i++){
         if(random(1) < mutation){
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.1);
         }
      }
   }
}
