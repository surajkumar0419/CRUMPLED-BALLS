const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var paper;

function setup() {
  createCanvas(800, 550);
  engine=Engine.create();
  world = engine.world;

  ground = new Ground(400,530,800,10);
  box1 = new Dustbin(565,475,20,80);
  box2 = new Dustbin(715,475,20,80);
  box3 = new Dustbin(640,515,150,20);
  paper = new Paper(50,500,15);

}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:8.5,y:-8.5})
  }
}


