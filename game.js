var imageStartBackground;

function setup() {
  createCanvas(800, 800);
  imageStartBackground = loadImage('startScreenCat.jpg');
}

//Game start
function gameStartScreen() {
  push();
  strokeWeight(0);
  fill(142, 70, 61);
  rect(530, 230, 220, 60, 30);

  pop();

  //text
  push();
  fill(255, 255, 255);
  textSize(30);
  text("VIP KOSHKA", 550, 270);
  textSize(20);
  text("Start", 625, 400);
  pop();
}

function draw() {
  image(imageStartBackground, 0, 0, 800, 800);
  gameStartScreen();


}
