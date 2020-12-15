var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround
var gameState
var PLAY
var END
var survivalTime=0;
function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,400);
monkey=createSprite(100,350,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

ground=createSprite(600,400,900,10);
ground.velocityX=-4
ground.x=ground.width/2;
console.log(monkey.y)
  
  invisibleGround=createSprite(400,390,900,10);
  invisibleGround.visible=false;
  
  bananaGroup=new Group();
  ObstacleGroup= new Group();
}


function draw() {
 background("white");
stroke("white");
textSize("20");
fill("white");
text("Score: "+ score , 500,50);
  
  stroke("black");
  textSize("20");
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime, 100,50);
         
  if(keyDown("space") && monkey.y>=350){
 monkey.velocityY=-6
}
monkey.velocityY=monkey.velocityY+0.1          ;
  
spawnfoodGroup();
spawnObstacles();

monkey.collide(invisibleGround);  
  
if(ground.x<150){
  ground.x=ground.width/2;
 

}
         
drawSprites();
}

function spawnfoodGroup(){

if(frameCount%80===0){
var banana =createSprite(600,200);
banana.addImage(bananaImage);  
banana.velocityX=-3;
banana.y=Math.round(random(120,200));
banana.lifetime=350;
banana.scale=0.1;
 bananaGroup.add(banana);
 
}  
}

function spawnObstacles(){
  
if(frameCount%300===0){
 var obstacle = createSprite(600,380);
obstacle.addImage(obstacleImage);
obstacle.velocityX=-3;

obstacle.scale=0.1;

  
ObstacleGroup.add(obstacle);
  
}  
}
  
  
  
  
  
  
  
  
  
  
  
  




