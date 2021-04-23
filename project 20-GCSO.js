var car ,wall
var speed,weight
function setup() {
  createCanvas(1600,400);
    
  

car = createSprite(50,200,20,20)
wall=createSprite(1200,200,60,100)
speed=random(55,90)
weight=random(400,1500)

}

function draw() {
  background("grey");  
  car.velocityX=speed
  wall.shapeColor="white"
  car.shapeColor="blue"


  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>100)
    {
      
      car.shapeColor=color(255,0,0)
    }
    if(deformation<100 &&  deformation>100)
    {
      
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
     
      car.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}