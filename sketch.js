
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stoneObject=new stone(235,420,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}

function deterollision(Lstone , Lmango) {
	mangoBodyPosition=lmango.body-Position
	stoneBodyPosition=lstone.body-Position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
	deterollision(stoneObject,mango1);
	deterollision(stoneObject,mango2);
	deterollision(stoneObject,mango3);
	deterollision(stoneObject,mango4);
	deterollision(stoneObject,mango5);
	
}


	
function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.stonePosition(stoneObject.body,{x:235, y:420})
		launcherObject.attach(stoneObject.body);
	}
	
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}



