
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 80;

	bob1 = new Bob (240, 500);
	bob2 = new Bob (320, 500);
	bob3 = new Bob (400, 500);
	bob4 = new Bob (480, 500);
	bob5 = new Bob (560, 500);

	roof = new Roof (400, 200, 600, 20);

	rope1= new Rope(bob1.body, roof.body, -bobDiameter*2,0);
	rope2= new Rope(bob2.body, roof.body, -bobDiameter,0);
	rope3= new Rope(bob3.body, roof.body, 0,0);
	rope4= new Rope(bob4.body, roof.body, bobDiameter,0);
	rope5= new Rope(bob5.body, roof.body, bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  	bob1.display();
  	bob2.display();
 	bob3.display();
  	bob4.display();
 	bob5.display();

	roof.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:45});
	}
}



