let paddle;
let catBall;
let bricks;
let lives = 5;
let score = 0;
let gameState = "start";
let resultMessage = "";
let maxBallSpeed = 7;
let leftKey;
let rightKey;

let speedBoostStage1 = false;
let speedBoostStage2 = false;
let speedBoostStage3 = false;
let time = 0;

var startScreenBackground;
var gameScreenBackground;
var endScreenBackground;

function setup() {
  createCanvas(800, 600);
  paddle = new Paddle();
  catBall = new CatBall();
  bricks = createBricks();
  startScreenBackground = loadImage("startScreenBackground.jpg");
  gameScreenBackground = loadImage("gameScreenBackground.jpg");
  endScreenBackground = loadImage("endScreenBackground.jpg");
}

function draw() {
  if (gameState === "start") {
    image(startScreenBackground, 0, -200, 800, 800);
    startScreen();
  } else if (gameState === "game") {
    image(gameScreenBackground, 0, -200, 800, 800);
    playGame();
  } else if (gameState === "end") {
    image(endScreenBackground, 0, -115, 800, 800);
    endScreen();
  }
}

function startScreen() {
  fill(102, 43, 63);
  stroke(0, 0, 0);
  rect(300, 65, 230, 89, 10);
  push();
  fill(255, 255, 175);
  textAlign(CENTER);
  textSize(28);
  text("CATVENTURE", 415, 105);
  textSize(13);
  text("Press SPACE to start", 415, 135);
  pop();
}

function endScreen() {
  fill(102, 43, 63);
  stroke(0, 0, 0);
  strokeWeight(2);
  rect(285, 210, 230, 120, 10);
  push();
  fill(255, 255, 175);
  textAlign(CENTER);
  textSize(30);
  text(resultMessage, 400, 250);
  textSize(20);

  // the usage of the score display was suggested by ChatGPT: https://chatgpt.com/share/6751bed6-e4bc-8002-88fa-f4a615a33d86 
  text(`Your Score: ${score}`, 400, 280);
  textSize(13);
  text("Press ENTER to play again", 400, 310);
  pop();
}

function playGame() {
  paddle.draw();
  paddle.updatePosition();

  catBall.draw();
  catBall.updatePosition();
  catBall.checkCollision(paddle);

  // Game Mechanics
  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].draw();

    // check if the ball hits the bricks
    if (catBall.hits(bricks[i])) {
      
      // reversing the ball's direction
      catBall.reverse();

      // removing the brick because it was hit by the ball

      // the usage of the next function was suggested by ChatGPT: https://chatgpt.com/share/6751bc2f-beb0-8002-bdd9-c84d17fd400a 
      bricks.splice(i, 1);

      // when one brick disappears, then score increases by 1 and paddle size reduces
      score++;
      reducePaddleSize();
    }
  }

  displayScoreAndLives();

  // for when the ball is outside of screen
  if (catBall.isOutsideOfScreen()) {
    lives--;
    catBall.color = color(random(255), random(255), random(255));
    if (lives > 0) {
      catBall.reset();
    } else {
      gameState = "end";
      if (score <= 49) {
        resultMessage = "Oh no! You lost!";
      }
    }
  }

  time += 1; // ~1 ms, time = 100 is roughly 1 second
  createPowerups();

  // when no bricks left
  if (bricks.length === 0) {
    resultMessage = "You won!";
    gameState = "end";
  }
}


// idea of creating power ups was suggested by Albert Asratyan, but the code was written by us
function createPowerups() {
  // after ~5 seconds
  if (time > 500) {
    speedBoostStage1 = true;
  } else if (time > 1000) {
    speedBoostStage2 = true;
  } else if (time > 1500) {
    speedBoostStage3 = true;
  }
}

function keyPressed() {
  if (gameState === "start" && key === " ") {
    gameState = "game";
  } else if (gameState === "end" && key === "Enter") {
    resetGame();
  }
}

// reset game
function resetGame() {
  lives = 5;
  score = 0;
  catBall.reset();
  bricks = createBricks();
  paddle.reset();
  time = 0;
  gameState = "game";
}

// creating bricks
function createBricks() {
  let bricks = [];
  let brickWidth = 80;
  let brickHeight = 20;

  // create bricks for fixed number of bricks

  // the next 5 lines the code was used and changed from this website: https://editor.p5js.org/aabhay.kashyap/sketches/TpkMpovUj
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
      bricks.push(new Brick(j * brickWidth, i * brickHeight, brickWidth, brickHeight));
    }
  }

  return bricks;
}

function displayScoreAndLives() {
  fill(253, 255, 175);
  textSize(20);
  strokeWeight(4);
  stroke(102, 43, 63);
  text(`Score: ${score}`, 10, 590);
  text(`Lives: ${lives}`, 710, 590);
}

// reduce paddle size when score increases

// the next 5 lines were taken from the conversation with ChatGPT: https://chatgpt.com/share/674f0e4a-bed4-8002-91c4-835af7d70c49 
function reducePaddleSize() {
  if (score % 5 === 0 && score > 0) {
    paddle.reduceSize();
  }
}

// methods (updatePosition, checkCollision) of the following classes were taken from this website and modified by us: https://editor.p5js.org/aabhay.kashyap/sketches/TpkMpovUj
class Paddle {
  constructor() {
    this.defaultWidth = 150;
    this.height = 10;
    this.x = 400 - this.defaultWidth / 2;
    this.y = 560;
    this.speed = 7;
    this.width = this.defaultWidth;
  }

  draw() {
    push();
    fill(102, 43, 63);
    strokeWeight(2);
    stroke(253, 255, 175);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  updatePosition() {
    if (time < 2000 || time > 3000) {
      leftKey = 37;
      rightKey = 39;
    } else {
      leftKey = 39;
      rightKey = 37;
    }

      if (keyIsDown(leftKey)) {
        this.x -= this.speed;
      } else if (keyIsDown(rightKey)) {
        this.x += this.speed;
      }
      this.x = constrain(this.x, 0, 800 - this.width);
    }

  // reduce paddle's size
  reduceSize() {
    this.width = max(60, this.width - 10);
  }

  reset() {
    this.width = this.defaultWidth;
  }
}

class CatBall {
  constructor() {
    this.r = 25;

    // the next line was taken fron this website: https://editor.p5js.org/hosken/sketches/I_4VSTotf
    this.color = color(random(255), random(255), random(255));
    this.reset();
  }

  reset() {
    this.x = 400;
    this.y = 540;
    this.xSpeed = random(-5, 5);
    this.ySpeed = -7;
  }

  draw() {
    fill(this.color);
    strokeWeight(2);
    stroke(34, 0, 28);
    triangle(this.x - 25, this.y - 30, this.x - 25, this.y, this.x + 7, this.y - 15);
    triangle(this.x + 25, this.y - 30, this.x + 25, this.y, this.x - 7, this.y - 15);
    ellipse(this.x, this.y, this.r * 2);
    //eyes
    noStroke();
    fill(0, 0, 0);
    ellipse(this.x - 12, this.y - 5, 8);
    ellipse(this.x + 12, this.y - 5, 8);

    fill(255, 255, 255);
    ellipse(this.x - 11, this.y - 7, 3);
    ellipse(this.x + 13, this.y - 7, 3);

    //nose
    fill(0, 0, 0);
    beginShape();
    vertex(this.x, this.y);
    bezierVertex(this.x - 4, this.y - 2, this.x - 6, this.y, this.x, this.y + 7);
    bezierVertex(this.x - 5, this.y - 1, this.x - 5, this.y - 1, this.x, this.y + 7);
    bezierVertex(this.x + 6, this.y, this.x + 4, this.y - 2, this.x, this.y);
    endShape();

    //mouth
    beginShape();
    stroke(0, 0, 0);
    strokeWeight(1);
    vertex(this.x, this.y + 6);
    bezierVertex(this.x, this.y + 11, this.x - 10, this.y + 11, this.x - 10, this.y + 7);
    bezierVertex(this.x - 10, this.y + 12, this.x, this.y + 12, this.x, this.y + 6);
    endShape();

    beginShape();
    vertex(this.x, this.y + 6);
    bezierVertex(this.x,this.y + 11, this.x + 10, this.y + 11, this.x + 10, this.y + 7);
    bezierVertex(this.x + 10, this.y + 12, this.x, this.y + 12, this.x, this.y + 6);
    endShape();
  }

  updatePosition() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // updating speed when certain time passed
    if (speedBoostStage1 === true) {
      this.x += this.xSpeed * 0.2;
      this.y += this.ySpeed * 0.2;
    }
    if (speedBoostStage2 === true) {
      this.x += this.xSpeed * 0.2;
      this.y += this.ySpeed * 0.2;
    }
    if (speedBoostStage3 === true) {
      this.x += this.xSpeed * 0.2;
      this.y += this.ySpeed * 0.2;
    }

    // ball changes directions when bouncing off the walls
    if (this.x < 0 || this.x > 800) {
      this.xSpeed *= -1;
    }
    if (this.y < 0) {
      this.ySpeed *= -1;
    }
  }

  isOutsideOfScreen() {
    return this.y > 600;
  }

  checkCollision(paddle) {
    if (this.y + this.r > paddle.y && this.x > paddle.x && this.x < paddle.x + paddle.width) {
      this.ySpeed *= -1;
      this.y = paddle.y - this.r; 
    }
  }

  hits(brick) {
    return (this.x > brick.x && this.x < brick.x + brick.w && this.y - this.r < brick.y + brick.h && this.y + this.r > brick.y);
  }

  reverse() {
    this.ySpeed *= -1;
  }
}

class Brick {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    push();
    fill(255, 255, 193);
    strokeWeight(2);
    stroke(102, 43, 63);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
