class bob {

    constructor (x, y, radius, options, maxsides){
        var options = {
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2,
        }
       
     this.body = Bodies.circle(x, y, 25, options, 0);
       this.radius = 25;
       
     
     
     World.add(world, this.body);
     
    }
 
 display(){
    var pos =  this.body.position
 var angle = this.body.angle;
 push();
 translate(pos.x, pos.y);
 rotate(angle);
 
 ellipseMode(RADIUS);
 fill("magenta");
 ellipse(0, 0, this.radius);
 
 pop();
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 }