var fixedRect, movingRect;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(200,100,50,50);
  object1.shapeColor = "red";
  //object1.debug = true;
  object2 = createSprite(200,800,50,50);
  object2.shapeColor = "red";
  //object2.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1.velocityY = +5;
  object2.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(object1,object2);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}




