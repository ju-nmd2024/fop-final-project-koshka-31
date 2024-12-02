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
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
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
    if (
      this.y + this.r > paddle.y &&
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width
    ) {
      this.ySpeed *= -1;
      this.y = paddle.y - this.r; // Prevent ball from sticking to paddle
    }
  }

  hits(brick) {
    return (
      this.x > brick.x &&
      this.x < brick.x + brick.w &&
      this.y - this.r < brick.y + brick.h &&
      this.y + this.r > brick.y
    );
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
