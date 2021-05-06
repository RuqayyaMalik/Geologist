
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber,hammer,plane,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var canvas = createCanvas(1200,400);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,100)

	plane = new Plane(500,390,1400,20)

	stone = new Stone(700,320,100,100,(PI/7))

	rubber = new Rubber(800,380,50)

	sand1 = new Sand(300,300,7)
	sand2 = new Sand(300,300,7)
	sand3 = new Sand(300,300,7)
	sand4 = new Sand(300,300,7)
	sand5 = new Sand(300,300,7)
	sand6 = new Sand(300,300,7)
	sand7 = new Sand(300,300,7)
	sand8 = new Sand(300,300,7)
	sand9 = new Sand(300,300,7)
	sand10 = new Sand(300,300,7)

	
	iron = new Iron(300,380)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ADD8E6");

  hammer.display()
  plane.display()
  stone.display()
  rubber.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  sand8.display()
  sand9.display()
  sand10.display()

  iron.display()
  
  drawSprites();
 
}



