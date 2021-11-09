
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImg = loadImage("sprites/bg.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(400, 690, 800, 20)
	stone = new Stone(100, 450, 30, 30)
	mango1 = new Mango(650, 330, 30, 30)
	mango2 = new Mango(560, 350, 30, 30)
	mango3 = new Mango(650, 250, 30, 30)
	mango4 = new Mango(620, 282, 30, 30)
	mango5 = new Mango(700, 360, 30, 30)
	mango6 = new Mango(750, 300, 30, 30)
	slingshot = new SlingShot(stone.body,{x:80, y:500});
  
}


function draw() {
  rectMode(CENTER)
  background(backgroundImg)
  ground.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  slingshot.display();
 
 
  isTouching(stone, mango1)
  isTouching(stone, mango2)
  isTouching(stone, mango3)
  isTouching(stone, mango4)
  isTouching(stone, mango5)
  isTouching(stone, mango6)

}
function isTouching(obj1, obj2){
	if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2
	   && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
	   && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
	   && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
		
		Matter.Body.setStatic(obj2, false);

	   }
	
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(stone.body)
    }
}


