const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pillar1, pillar2, pillar3, pillar4;

function setup() {
  createCanvas(1000,800);

  engine= Engine.create();
  world = engine.world;
  
  pillar1 = new Pillar(350,400,50,250);
  pillar2 = new Pillar(400,400,50,250);
  pillar3 = new Pillar(450,400,50,250);
  pillar4 = new Pillar(500,400,50,250);
  pillar5 = new Pillar(550,400,50,250);
  
  var roof = createSprite(450,300,280,50);
  roof.shapeColor=color("brown");
 
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
   
  pillar1.display(); 
  pillar2.display(); 
  pillar3.display();
  pillar4.display();
  pillar5.display();
  
  fill("brown")
  triangle(320,200,450,90,580,200)

   fill(188,87,28);
  rect(450,250,270,100)
 
  drawSprites();
}