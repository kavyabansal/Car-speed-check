var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1300,200,60,height/2);
  wall.shapeColor="black"

  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if (car.isTouching(wall)) {
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500
    if (deformation<100){
      car.shapeColor="green";
    textSize(20);
    fill("green");
      text("SAFE",200,200);
    }else if(deformation>100&&deformation<180){
      car.shapeColor="yellow";
    textSize(20);
    fill("black");
      text("MORDRATE",200,200);
    }else {
      car.shapeColor="red";
    textSize(20);
    fill("red");
      text("DANGER",200,200);
    }
  }


  drawSprites();
}