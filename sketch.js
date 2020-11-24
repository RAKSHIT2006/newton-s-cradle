
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3;
var bobObject4,bobObject5;
var ground,platform;


function preload()
{
	background = (48,22,8);

}

function setup() {
	createCanvas(800, 700);
	Ground = new Ground (800,height,800,70);
    Platform = new Ground(150, 305, 300, 170);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	BobObject1 = new bobOject(100,50,40,20);
	BobObject2 = new bobObject(150,50,40,20);
	BobObject3 = new bobObject(200,50,40,20);
	BobObject4 = new bobObject(250,50,40,20);
	BobObject5 = new bobObject(300,50,40,20);

	Rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	BobObject1.display(); 
	BobObject2.display(); 
	BobObject3.display();  
	BobObject4.display();
	BobObject5.display();
	
	rope.display();
	ground.display();
  drawSprites();
 
}



