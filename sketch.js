var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundsprite,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	
	engine = Engine.create();
	world = engine.world;

	


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	var opts={isStatic:true}
	packageBody=Bodies.circle(width/2,200,5,opts);
	World.add(world,packageBody);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255);
	ground=Bodies.rectangle(width/2,height-25,width,10,{isStatic:true});
	World.add(world,ground);

	box1=new Box(508,730,20,100);
	box2=new Box(292,730,20,100);
	box3=new Box(400,760,200,20);
	

	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

 // groundSprite.x= ground.position.x;
  //groundSprite.y= ground.position.y;
/*
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,10);

  ellipseMode(RADIUS);
  ellipse(packageBody.position.x,packageBody.position.y,20,20)
  */

  box1.display();
  box2.display();
  box3.display();


 drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key
	Matter.Body.setStatic(packageBody,false);         
  }
}



