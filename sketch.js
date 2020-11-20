
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(20,200)

	Engine.run(engine);
  
}


function draw() {
	background(180);
	Engine.update(engine)
 // rectMode(CENTER);
 
  paperBall.display();
  
 
}



