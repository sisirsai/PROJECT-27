class Block{
    constructor(x,y,width,height){
      var Options={
        restitution:0,
        friction: 5.0,
        isStatic:true
      
  
      }
        this.body=Bodies.rectangle(x,y,width,height,Options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
    display(color){
        var pos=this.body.position;
        var poq=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(poq);
        rectMode(CENTER);
      fill(color);
        rect(0,0,this.width,this.height);
        pop();
    }
  }
  
     