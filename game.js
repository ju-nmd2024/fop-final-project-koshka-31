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
  gameState = "game";
}

// creating bricks 
function createBricks() {
  let bricks = [];
  let rows = 5;
  let cols = 10;
  let brickWidth = 80;
  let brickHeight = 20;
  
  // create bricks for fixed number of bricks 
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      bricks.push(new Brick(col * brickWidth, row * brickHeight, brickWidth, brickHeight));
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

class Paddle {
  constructor() {
    this.width = 120;
    this.height = 10;
    this.x = 400 - this.width / 2;
    this.y = 560;
    this.speed = 7;
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
}

class Ball {
  constructor() {
    this.r = 10;
    this.reset();
  }

  reset() {
    this.x = 400;
    this.y = 540;
    this.xSpeed = random(-3, 3);
    this.ySpeed = -5;
  }

  draw() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
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