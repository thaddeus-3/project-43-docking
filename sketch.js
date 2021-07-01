var docked = false

function preload() {
  bg = loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
  space1 = loadImage("spacecraft1.png");
  space2 = loadImage("spacecraft2.png");
  space3 = loadImage("spacecraft3.png");
  space4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(400,400,50,50);
  spacecraft.addImage(space1);
  iss = createSprite(330,130,50,50);
  iss.addImage(issimg);
  spacecraft.scale = 0.2;
  iss.scale = 0.8;
}

function draw() {
  background(bg);  
  drawSprites();
  if(docked === false) {
  if(keyIsDown(UP_ARROW)) {
    spacecraft.addImage(space2);
    spacecraft.y -= 2;
  }
  if(keyIsDown(DOWN_ARROW)) {
    spacecraft.addImage(space2);
    spacecraft.y += 2;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    spacecraft.addImage(space4);
    spacecraft.x += 2;
  }
  if(keyIsDown(LEFT_ARROW)) {
    spacecraft.addImage(space3);
    spacecraft.x -= 2;
  }
  console.log(spacecraft.x);
  console.log(spacecraft.y);
}
  if(spacecraft.y <= (iss.y+70)&&spacecraft.x <= (iss.x-10)) {
    docked = true;
    text("Docking Successful!",200,200);
  }
}