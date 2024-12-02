let paddle;
let ball;
let bricks;
let lives = 3;
let score = 0;
let gameState = "start";

function setup() {
  createCanvas(800, 600);
  paddle = new Paddle();
  ball = new Ball();
  bricks = createBricks();
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
  text("Breakout Game", 400, 250);
  textSize(20);
  text("Press SPACE to start", 400, 300);
}

function endScreen() {
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("Game Over", 400, 250);
  textSize(20);
  text(`Your Score: ${score}`, 400, 300);
  text("Press ENTER to play again", 400, 350);
}


function playGame() {
  paddle.draw();
  paddle.updatePosition();

  ball.draw();
  ball.updatePosition();
  ball.checkCollision(paddle);

  // Game Mechanichs
  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].draw();
    
    // check if the ball hits the bricks
    if (ball.hits(bricks[i])) {
      
      //reversing the direction
      ball.reverse();
      
      //removing the brick because it was hit by the ball
      bricks.splice(i, 1);
    
      score++;
      increaseDifficulty();
    }
  }

  displayScoreAndLives();

  
  // for when the ball is outside of screen
  if (ball.isOutsideOfScreen()) {
    lives--;
    if (lives > 0) {
      ball.reset();
    } else {
      gameState = "end";
    }
  }

  // when no bricks left
  if (bricks.length === 0) {
    gameState = "end";
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
  lives = 3;
  score = 0;
  ball.reset();
  bricks = createBricks();
  paddle.reset();
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
  fill(255);
  textSize(16);
  text(`Score: ${score}`, 10, 20);
  text(`Lives: ${lives}`, 720, 20);
}

// reduce paddle size when score increases
// the next 5 lines were taken from the conversation with chatgpt
function increaseDifficulty() {
  if (score % 5 === 0 && score > 0) {
    paddle.reduceSize();
  }
}

class Paddle {
  constructor() {
    this.defaultWidth = 120;
    this.height = 10;
    this.x = 400 - this.defaultWidth / 2;
    this.y = 560;
    this.speed = 7;
    this.width = this.defaultWidth;
  }

  draw() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  updatePosition() {
    if (keyIsDown(37)) {
      this.x -= this.speed;
    } else if (keyIsDown(39)) {
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

class Ball {
  constructor() {
    this.r = 25;
    this.reset();
  }

  reset() {
    this.x = 400;
    this.y = 540;
    this.xSpeed = random(-3, 3);
    this.ySpeed = -7;
  }

  draw() {
    fill(249, 246, 219);
    stroke(150, 136, 89);
    strokeWeight(1);
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
    fill(196, 106, 80);
    beginShape();
    vertex(this.x, this.y);
    bezierVertex(this.x - 4, this.y - 2, this.x - 6, this.y, this.x, this.y + 7);
    bezierVertex(this.x - 5, this.y - 1, this.x - 5, this.y - 1, this.x, this.y + 7);
    bezierVertex(this.x + 6, this.y, this.x + 4, this.y - 2,  this.x, this.y);
    endShape();

    //mouth
    beginShape();
    stroke(196, 106, 80);
    strokeWeight(1);
    vertex(this.x, this.y + 6);
    bezierVertex(this.x, this.y + 11, this.x - 10, this.y + 11, this.x - 10,  this.y + 7);
    bezierVertex(this.x - 10, this.y + 12, this.x, this.y + 12,  this.x,  this.y + 6);
    endShape();

    beginShape();
    vertex(this.x, this.y + 6);
    bezierVertex(this.x, this.y + 11, this.x + 10, this.y + 11, this.x + 10,  this.y + 7);
    bezierVertex(this.x + 10, this.y + 12, this.x, this.y + 12,  this.x,  this.y + 6);
    endShape();
    
  }

  updatePosition() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

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
      this.y = paddle.y - this.r; // Prevent ball from sticking to paddle
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
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.h);
  }
}