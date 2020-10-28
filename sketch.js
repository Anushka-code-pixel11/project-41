const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var canvas

var rain = [];
var man,man_image;
var thunder;
var bolt1,bolt2,bolt3,bolt4;

function preload(){
  man_image = loadAnimation("images/man/1.png","images/man/2.png",
  "images/man/3.png","images/man/4.png","images/man/5.png",
  "images/man/6.png","images/man/7.png","images/man/8.png");

  bolt1 = loadImage("images/bolt/1.png");
  bolt2 = loadImage("images/bolt/2.png");
  bolt3 = loadImage("images/bolt/3.png");
  bolt4 = loadImage("images/bolt/4.png");
}

function setup(){
  canvas = createCanvas(300,455);

  engine = Engine.create();
  world = engine.world;

  man = createSprite(130,310);
  man.addAnimation("man",man_image);
  man.scale = 0.4;

  thunder = createSprite(150, 70);
  thunder.scale = 0.5;

  Engine.run(engine);
}

function draw(){
  background(0);
  if(frameCount % 1 === 0 ){
    rain.push(new Drops(random(0, 300),random(0,455), 1,9));
  }
    
  for (var j = 0; j < rain.length; j++) {
    rain[j].display();
  }
  if (frameCount % 10 === 0) {
    //generate random obstacles
    var rand = Math.round(random(1, 4));
    switch (rand) {
    case 1:
      thunder.addImage(bolt1);
      break;
    case 2:
      thunder.addImage(bolt2);
      break;
    case 3:
      thunder.addImage(bolt3);
      break;
    case 4:
      thunder.addImage(bolt4);
      break;
    default:
      break;
    }
  }
    drawSprites();
}