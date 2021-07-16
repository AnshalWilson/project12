var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX

  spawnApple();
  drawSprites();
}
if (frameCount % 80 === 0) {
  apple = createSprite(600,100,40,10);
  apple.addImage(appleImg)
 apple.y = Math.round(random(10,60))
  apple.scale = 0.4;
  apple.velocityX = -3;






