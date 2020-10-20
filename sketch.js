
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;


function preload(){
	
	
}

function setup() {
	
	var canvas=createCanvas(1000,600);
	engine=Engine.create();
	world=engine.world;

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



