class rope{

    constructor(bodyA,bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
    var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.04,
    length:10,
    pointB:{x : this.offsetX, y:this.offsetY}
    
    }
    this.rope = Matter.Constraint.create(options);
    World.add(world,this.rope);
    }
    
    display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;



    var point1X = this.rope.bodyA.position+this.offsetX;
    var point1Y = this.rope.bodyB.position+this.offsetY;
    
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
    
    }