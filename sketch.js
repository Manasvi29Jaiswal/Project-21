var wall,thickness;
var bullet,speed,weight;
var bullet1,wall1;
var bulletRightEdge,wallLeftEdge


function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor="white"
  
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="80,80,80"
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  
}

function draw() {
  background("orange");  

  bullet.velocityX=speed;
  
  if(collided(bullet,wall)){
    
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
    
    if(damage < 10){
    
      wall.shapeColor="green";
    }
    
    if(damage > 10){
    
      wall.shapeColor="red";
    }
    
    
    }

  drawSprites();
}

function collided(bullet1,wall1){

bulletRightEdge = bullet1.x + bullet1.width;
wallLeftEdge = wall1.x

if(bulletRightEdge >= wallLeftEdge){

return true;

}

else{
return false;
}

}
