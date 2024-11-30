let paddle;
let ball;
let bricks;
let lives = 3;
let score = 0;
let gameState = "start"; 

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "game") {
    playGame();
  } else if (gameState === "end") {
    endScreen();
  }
}

function startScreen() {
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("Breakout Game", 800 / 2, 600 / 2 - 50);
  textSize(20);
  text("Press SPACE to start", 800 / 2, 600 / 2);
}

function endScreen() {
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("Game Over", 800 / 2, 600 / 2 - 50);
  textSize(20);
  text(`Your Score: ${score}`, 800 / 2, 600 / 2);
  text("Press ENTER to play again", 800 / 2, 600 / 2 + 50);
}

