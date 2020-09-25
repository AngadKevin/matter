const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;
var box1,box2;
function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var groundoption = {
isStatic: true
}
ground = Bodies.rectangle(200,390,400,5,groundoption);
World.add(world,ground);
box1 = new Box(200,200,50,50);
box2 = new Box(170,100,50,100);

} 

function draw(){
background("black");
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,5);
box1.display();
box2.display();
}

