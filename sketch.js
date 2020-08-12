var wall,car,car2,car3,car4,bumper,bumper2,bumper3,bumper4;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);
  speed= random(55,90);
  weight= random(400,1500);
  car=createSprite(750, 50, 20, 10);
  car.velocityX=-speed;
  car2=createSprite(750, 150, 20, 10);
  car2.velocityX=-speed;
  car3=createSprite(750, 250, 20, 10);
  car3.velocityX=-speed;
  car4=createSprite(750, 350, 20, 10);
  car4.velocityX=-speed;
  wall=createSprite(200, 0, 1600, 10);
  car.velocityX=-speed;
  wall=createSprite(200, 100, 1600, 10);
  wall=createSprite(200, 200, 1600, 10);
  wall=createSprite(200, 300, 1600, 10);
  wall=createSprite(200, 400, 1600, 10);
  bumper=createSprite(50,50,50,50);
  bumper.shapeColor=("white");
  bumper2=createSprite(50,150,50,50);
  bumper2.shapeColor=("white");
  bumper3=createSprite(50,250,50,50);
  bumper3.shapeColor=("white");
  bumper4=createSprite(50,350,50,50);
  bumper4.shapeColor=("white");
  
  
  
}

function draw() {
  background(0,255,255);  
  speed= random(55,90);
  weight= random(400,1500);
  if(car.collide(bumper)){
    check(car);
    car.velocityX=0;
    }
    car.collide(bumper)
  //
  if(car2.collide(bumper2)){
    check(car2);
    }
    car2.collide(bumper3)
  //
  if(car3.collide(bumper3)){
    check(car3);
    }
    car3.collide(bumper3)
  //
  if(car4.collide(bumper4)){
    check(car4);
    }
    car4.collide(bumper4)
  //
  drawSprites();
}
function collide(object1,object2) {
  
  if(object1.x-object2.x <(object1.width+object2.width)/2){
    object1.velocityX=0; 
  }
}
function check(object1,ranw,ransp,ransp) {
 
    deformation=(0.5*ranw*ransp*ransp)/22509;
    if(deformation>180){
      object1.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>1.00){
      object1.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      object1.shapeColor=color(0,255,0);
    }
   
}