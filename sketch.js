var forest, girl_running;
var zombie;

function preload(){
forestImg = loadImage("forest.png");
girl_runningImg = loadImage("girl.png");
zombieImg = loadImage("zombie.png");
portalImg = loadImage("portal.png")
addAnimation("forest.png");
addAnimation("girl.png");
addAnimation("zombie.png");
addAnimation("portal.png");
}

function setup() {
background = addImage("forest",300);
girl = createSprite(50,20,20,20);
zombie = createSprite(50,20,20,20);
portal = createSprite(65,20,50,20);
}

function draw() {
if(keyDown("space")){
    girl.velocityY = -1;
}
drawSprites();
}
