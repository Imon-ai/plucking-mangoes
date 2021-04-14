
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango;
var stone,stone_img;
var tree,tree_img;
var boy,boy_img;
var thrower;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
	boy_img = loadImage("boy.png");
	tree_img = loadImage("tree.png");
    stone_img = loadImage("stone.png");
}

function setup() {
	createCanvas(800, 500);

    boy = createSprite(200,440,20,20);
	boy.addImage(boy_img);
	boy.scale = 0.1;

	tree = createSprite(550,280,20,20);
	tree.addImage(tree_img);
	tree.scale = 0.37;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   

    stone = new Stone(130,390,10,10);
	thrower = new Launcher(stone.body,{x:150,y:390});
    ground = new Ground(400,490,800,20);

	mango1 = new Mango(600,130);
    mango2 = new Mango(550,150);
    mango3 = new Mango(530,140);
	mango4 = new Mango(500,170);
	mango5 = new Mango(650,200);
	mango6 = new Mango(500,200);
    mango7 = new Mango(450,250);
    mango8 = new Mango(540,100);
	mango9 = new Mango(530,230);
	mango10 = new Mango(600,170);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(145);
  drawSprites();

  keyPressed();


  thrower.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
 
}

function mouseDragged(){

        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    thrower.fly();
    
}

function keyPressed(){
  if(keyDown("space")){	
	thrower.attach(stone.body);
}
}

function detectCollision(stoneObj,mango){
	if(stoneObj.body.position.x-mango.body.position.x <= stoneObj.width/2 + mango.width/2 &&
        stoneObj.body.position.y-mango.body.position.y<= stoneObj.height/2 + mango.height/2){
            Matter.Body.setStatic(mango.body,false)
        }
}



