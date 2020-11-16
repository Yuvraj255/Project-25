
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbinSide1,dustbinSide2,dustbinSide3;

function preload()
{

}

function setup() {
	createCanvas(1600, 750);


	engine = Engine.create();
	world = engine.world;

	  dustbinSide1=new Dustbinside(1120,575,20,150);
	  dustbinSide2=new Dustbinside(1280,575,20,150);

    dustbin=new Dustbin(1200,560,200,20);
  
    ground=new Ground(800,670,1600,20);
    paperObject=new Paper(100,650,width,height);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paperObject.display();
  ground.display();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbin.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:220,y:-220});
}
}