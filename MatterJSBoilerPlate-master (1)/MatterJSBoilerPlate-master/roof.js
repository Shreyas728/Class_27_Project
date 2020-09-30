class roof{
    constructor() {
    var options = {
        isStatic : true,
    }
     this.body = Bodies.rectangle(1000,100,2000,20,options);
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("grey");
        rectMode(CENTER);
        rect(pos.x,pos.y,1000,20);
    }
    }