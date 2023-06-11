const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var top,left,right,ground;
var ball;
let engine;
let world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }

  ball = Bodies.circle(200,200,10,ball_options);
  World.add(world,ball)
  
  groundObj= new Ground(400,390,width,10)
  right= new Ground(550,340,10,90)
  left= new Ground(700,340,10,90)

}

function draw() 
{
  background(2)
  groundObj.show()
  right.show()
  left.show()

  ellipse(ball.position.x,ball.position.y,10);

  Engine.update(engine);
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03})
  }
}
