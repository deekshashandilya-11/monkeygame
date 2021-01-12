var monkey , monkey_running
var banana ,bananaImage
var obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

var survivalTime = 0;

function preload()
{

  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png",
  "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup()
{
  createCanvas(600,600);
  
  monkey = createSprite(50,530,500,150);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.12
  
  ground = createSprite(400,570,1800,10);
  ground.shapeColor=("darksalmon");
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)

  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}

function draw() 
{
  background("aqua");
      
      
      stroke("white");
      textSize(22);
      fill("blue");
      text("SCORE : "+ score,480,40);
      
      stroke("black");
      textSize(28);
      fill("red");
      survivalTime = Math.ceil(frameCount/frameRate())
      text("Survival Time : "+ survivalTime,10,50);
  
  if(ground.x<0)
    {
      ground.x=ground.width/2;
      
    }
    
  if(keyDown("space"))
  {
    monkey.velocityY = -12
  }
  
  monkey.velocityY = monkey.velocityY+0.4 
  
  monkey.collide(ground);
  
  spawnbanana();
  spawnobstacle();
  
  drawSprites();
}

function spawnbanana()
{
  if(frameCount % 80 === 0)
  {
    banana = createSprite(700,100,150,200);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(280,350))
    banana.scale = 0.1
    banana.velocityX = -5
    banana.lifetime = 130
    bananaGroup.add(banana);
  }
}

function spawnobstacle()
{
  if (frameCount % 300 ===0)
  {
    obstacle = createSprite(400,530,150,200);
    obstacle.addImage(obstacleImage)
    //var rand = Math.round(random(1,2))
    var rand = Math.round(random(1,6));
    obstacle.scale = 0.2
    obstacle.velocityX = -4
    obstacle.lifetime = 130
    obstacleGroup.add(obstacle);
    
  }
}






