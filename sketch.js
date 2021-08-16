const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bg;
var rab;
var melon;
var Rabbit;
var Button;

 function preload(){
   bg=loadImage("background.png");
   rab=loadImage("Rabbit-01.png");
   melon=loadImage("melon.png");

 }

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  Rabbit=createSprite(250,600,20,20);
  Rabbit.addImage(rab);
  Rabbit.scale=0.3;

  button=createImg("cut_btn.png");
  button.position(220,30);
  button.size(50,50);
 button.mouseClicked(drop);
  


  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg,0,0,displayWidth+80,displayHeight);
  rope.show();
  //Rabbit.show();
  //(fruit.position.x,fruit.position.y,30,30);
  push();
  imageMode(CENTER);
  image(melon,fruit.position.x,fruit.position.y,70,70)
  
  pop();
  Engine.update(engine);
  ground.show();

 
   drawSprites();
}


function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con=null;

}


