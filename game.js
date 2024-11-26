var imageStartBackground;

function setup() {
  createCanvas(800, 800);
  imageStartBackground = loadImage('startScreenCat.jpg');
}

//Game start
function gameStartScreen() {
  push();
  strokeWeight(0);
  fill(125, 0, 27);
  rect(530, 230, 220, 60, 30);

  fill(15, 4, 4);
  rect(590, 320, 100, 50, 25);
  pop();

  //text
  push();
  fill(219, 209, 199);
  textSize(30);
  text("VIP KOSHKA", 550, 270);
  textSize(20);
  text("Start", 618, 350);
  pop();
}

function draw() {
  image(imageStartBackground, 0, 0, 800, 800);
  gameStartScreen();


}
