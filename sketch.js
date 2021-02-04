
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyimg
function preload()
{
	boyimg = loadImage("Sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground = new Ground(400,650,800,20)
	tree = new Tree(500,650)
	stone = new Stone(200,200)
	Launcher = new Launch(stone.stone,{x : 100, y : 540}) 
	mango = new Mango(500,420)
	mango2 = new Mango(580,380)
	mango3 = new Mango(640,420)
	mango4 = new Mango(700,380)
	mango5 = new Mango(760,420)
	mango6 = new Mango(670, 300)

	boy = createSprite(150,590,50,50)
	boy.addImage("boyimg",boyimg)
	boy.scale=0.10

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background("red");


  ground.display()
  tree.display()
  mango.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  stone.display()
  Launcher.display()

  detectcollision(stone,mango);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  //console.log("Aadish")

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.stone,{x : mouseX,y : mouseY})
}

function mouseReleased(){
	Launcher.fly()
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.stone,{x : 100,y : 540})
	    Launcher.attach(stone.stone)
	}
	
}

function detectcollision(Lstone,Lmango){
	var mangoBodyPosition = Lmango.mango.position
	var stoneBodyPosition = Lstone.stone.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}
	//console.log("Aadish")
}

