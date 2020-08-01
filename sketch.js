var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200, 100, 50, 20);
  rect1.shapeColor = "green";

  rect1 = createSprite(200, 100, 50, 20);
  rect1.shapeColor = "green";

  rect2 = createSprite(400, 100, 50, 20);
  rect12.shapeColor = "green";

  rect3 = createSprite(600, 100, 50, 20);
  rect3.shapeColor = "green";

  rect4 = createSprite(800, 100, 50, 20);
  rect4.shapeColor = "green";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  bounceOff(movingRect,fixedRect);
  drawSprites();
}