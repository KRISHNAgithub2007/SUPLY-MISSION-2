var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	
	var pakopt=
				{restitution:1.2, 
				isStatic:true}

	packageSprite=createSprite(350, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(350, 180, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(350 , 200 , 5, pakopt);
	World.add(world, packageBody);
	
	box1= Bodies.rectangle(300,610,20,100, {isStatic:true} );
	 World.add(world, box1);

	 box2= Bodies.rectangle(500,610,20,100, {isStatic:true} );
	 World.add(world, box2);

	 box3= Bodies.rectangle(400,660,200,20, {isStatic:true } );
	 World.add(world, box3);
	 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
keyPressed();
Engine.update(engine);

  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y-18

 
  fill("brown");
  rect(box1.position.x,box1.position.y,20,100);
  rect(box2.position.x,box2.position.y,20,100);
  rect(box3.position.x,box3.position.y,200,20);
  rectMode(CENTER);

  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW) ) {
	Matter.Body.setStatic(packageBody,false);
  }
}



