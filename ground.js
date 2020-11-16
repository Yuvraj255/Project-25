class Ground{
    constructor(x,y){
      
      var options={
        isStatic:true
      }
        
      this.body=Bodies.rectangle(x,y,1600,20,options);
      
      this.width=1600;
      this.height=20;
      World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width,this.height);
        pop();
    }
  };