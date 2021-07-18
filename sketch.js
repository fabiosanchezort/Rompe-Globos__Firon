var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var Imagen;

var pared_invisible;

var score =0;
function preload(){
                          
  Imagen = loadImage("campo.jpeg");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(500, 400);
  
  //crea el fondo
 // scene = createSprite(200,200);
 // scene.addImage(backgroundImage);
  //scene.scale = 1.9
  
  //crea el arco para disparar las flechas
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  bow.debug=false
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
 background(Imagen);
  //fondo en movimiento
    //scene.velocityX = -3 

    //if (scene.x < 0){
     // scene.x = scene.width/2;
   // }
  
  //arco en movimiento
  bow.y = World.mouseY
  
   //suelta la flecha cuando se presione la tecla de barra espaciadora
  if (keyWentUp("space")) {
    createArrow();
    
  }
  
  //crea enemigos de forma continua
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}

  if redB.position>
    
  drawSprites();
  fill("black")
  textSize(16)
  text("Puntuación: "+ score, 350,40);
 // console.log(red.velocityX);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage); 
  //red.velocityX = 3.2;
  red.velocityX = 3.2+score/8;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  //blue.velocityX = 4.3;
  blue.velocityX = 4.3 +score/8;
  blue.scale = 0.1;
  blueB.add(blue);
  blue.setCollider("rectangle",12,-24,370,470)
  blue.debug=false
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3.005+score/8;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
  green.debug=false
  console.log(green.velocityX)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 5+score/8;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
  pink.debug=false
}


//crea las flechas para el arco
 function createArrow() {
  var arrow= createSprite(470,100);
  arrow.addImage(arrowImage);
  arrow.x = 470;
  arrow.y=bow.y;
  arrow.velocityX = -3.8;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  arrow.setCollider("rectangle",0,0,230,50) 
  arrow.debug=false;
   
}
