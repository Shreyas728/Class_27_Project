
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);

	engine = Engine.create();
	world = engine.world;



 bobObject1 = new bob(900, 300, 20, 20);
 bobObject2 = new bob(950, 300, 20, 20);
 bobObject3 = new bob(1000, 300, 20, 20);
 bobObject4 = new bob(1050, 300, 20, 20);
 bobObject5 = new bob(1100, 300, 20, 20);
 roofObject1 = new roof();
 
 
 rope1 = new rope(bobObject1.body, roofObject1.body);
 rope2   = new rope(bobObject2.body,roofObject1.body);
 rope3 = new rope(bobObject3.body,roofObject1.body)
 rope4 = new rope(bobObject4.body,roofObject1.body)
 rope5 = new rope(bobObject5.body,roofObject1.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  

  
  drawSprites();
 

roofObject1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
}




