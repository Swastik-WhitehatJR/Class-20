var movingrect, fixedrect;

function setup() {
  createCanvas(800, 400);
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "red";

  fixedrect = createSprite(600, 200, 50, 50);
  fixedrect.shapeColor = "red";
}

function draw() {
  background(255, 255, 255);
  movingrect.y = mouseY;
  movingrect.x = mouseX;

  if (fixedrect.x - movingrect.x < fixedrect.width / 2 + movingrect.width / 2 && movingrect.x - fixedrect.x < fixedrect.width / 2 + movingrect.width / 2 && movingrect.y - fixedrect.y < fixedrect.height / 2 + movingrect.height / 2 && fixedrect.y - movingrect.y < fixedrect.height / 2 + movingrect.height / 2) {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }

  else {
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }

  drawSprites();
}