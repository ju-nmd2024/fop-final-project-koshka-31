let koshkaX , koshkaY, koshkaS;
let stoolX, stoolY;
let isDragging = false;
let magnetismRadius = 50;
let state = "firstScreenPart1";


var imageBackground;

function setup() {
  createCanvas(800, 600);
  imageBackground = loadImage('background for koshka game.png');

  // Initialize cat properties
  koshkaX = 130;
  koshkaY = 228;
  koshkaS = 0.85; // Scale for nastyKoshka

  // Initialize table properties
  stoolX = 400;
  stoolY = 400;

}
function nastyKoshka(koshkaX, koshkaY, koshkaS) {
    fill(249, 246, 219);
    stroke(150, 136, 89);
    strokeWeight(1);


    //ears
    triangle(koshkaX - 35 * koshkaS, koshkaY - 100 * koshkaS, koshkaX - 30 * koshkaS, koshkaY - 130 * koshkaS, koshkaX - 17 * koshkaS, koshkaY - 115 * koshkaS);
    triangle(koshkaX + 35 * koshkaS, koshkaY - 100 * koshkaS, koshkaX + 30 * koshkaS, koshkaY - 130 * koshkaS, koshkaX + 17 * koshkaS, koshkaY - 115 * koshkaS);
    
    //red ears
    fill(196, 106, 80);
    triangle(koshkaX - 33 * koshkaS, koshkaY - 95 * koshkaS, koshkaX - 28 * koshkaS, koshkaY - 123 * koshkaS, koshkaX - 18 * koshkaS, koshkaY - 110 * koshkaS);
    triangle(koshkaX + 33 * koshkaS, koshkaY - 95 * koshkaS, koshkaX + 28 * koshkaS, koshkaY - 123 * koshkaS, koshkaX + 18 * koshkaS, koshkaY - 110 * koshkaS);

    //body
    //hvost
    fill(245, 241, 208);
    beginShape();
    vertex(koshkaX + 40 * koshkaS, koshkaY + 40 * koshkaS);
    vertex(koshkaX + 80 * koshkaS, koshkaY + 45 * koshkaS);
    bezierVertex(koshkaX + 105 * koshkaS, koshkaY + 50 * koshkaS, koshkaX + 115 * koshkaS, koshkaY + 60 * koshkaS, koshkaX + 100 * koshkaS, koshkaY + 75 * koshkaS);
    bezierVertex(koshkaX + 85 * koshkaS, koshkaY + 85 * koshkaS, koshkaX + 65 * koshkaS, koshkaY + 85 * koshkaS, koshkaX + 45 * koshkaS, koshkaY + 80 * koshkaS); 
    bezierVertex(koshkaX + 35 * koshkaS, koshkaY + 75 * koshkaS, koshkaX + 35 * koshkaS, koshkaY + 70 * koshkaS, koshkaX + 45 * koshkaS, koshkaY + 67 * koshkaS);
    bezierVertex(koshkaX + 100 *koshkaS, koshkaY + 70 * koshkaS, koshkaX + 85 * koshkaS, koshkaY + 60 * koshkaS, koshkaX + 75 * koshkaS, koshkaY + 60 * koshkaS);
    bezierVertex(koshkaX + 50 * koshkaS, koshkaY + 60 * koshkaS, koshkaX + 40 * koshkaS, koshkaY + 55 * koshkaS, koshkaX + 35 * koshkaS, koshkaY + 50 * koshkaS);
    endShape();

    //zadniy lapy
    beginShape();
    vertex(koshkaX - 30 * koshkaS, koshkaY + 10 * koshkaS);
    bezierVertex(koshkaX - 50 * koshkaS, koshkaY + 20 * koshkaS, koshkaX - 50 * koshkaS, koshkaY + 40 * koshkaS, koshkaX - 30 * koshkaS, koshkaY + 65 * koshkaS);
    bezierVertex(koshkaX - 35 * koshkaS, koshkaY + 75 * koshkaS, koshkaX - 10 * koshkaS, koshkaY + 75 * koshkaS, koshkaX - 15 * koshkaS, koshkaY + 65 * koshkaS);
    vertex(koshkaX + 15 * koshkaS, koshkaY + 65 * koshkaS);
    bezierVertex(koshkaX + 10 * koshkaS, koshkaY + 75 * koshkaS, koshkaX + 35 * koshkaS, koshkaY + 75 * koshkaS, koshkaX + 30 * koshkaS, koshkaY + 65 * koshkaS);
    bezierVertex(koshkaX + 50 * koshkaS, koshkaY + 40 * koshkaS, koshkaX + 50 * koshkaS, koshkaY + 20 * koshkaS, koshkaX + 30 * koshkaS, koshkaY + 10 * koshkaS);
    endShape(CLOSE);

    //peredniy lapy
    fill(249, 246, 219);
    beginShape();
    vertex(koshkaX - 20 * koshkaS, koshkaY - 60 * koshkaS);
    bezierVertex(koshkaX - 40 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 40 * koshkaS, koshkaY - 20 * koshkaS, koshkaX - 20 * koshkaS, koshkaY + 70 * koshkaS);
    bezierVertex(koshkaX - 25 * koshkaS, koshkaY + 80 * koshkaS, koshkaX, koshkaY + 80 * koshkaS, koshkaX - 5 * koshkaS, koshkaY + 70 * koshkaS);
    vertex(koshkaX - 5 * koshkaS, koshkaY + 30 * koshkaS);
    bezierVertex(koshkaX - 5 * koshkaS, koshkaY + 10 * koshkaS, koshkaX + 5 * koshkaS, koshkaY + 10 * koshkaS, koshkaX + 5 * koshkaS, koshkaY + 30 * koshkaS);
    vertex(koshkaX + 5 * koshkaS, koshkaY + 70 * koshkaS);
    bezierVertex(koshkaX, koshkaY + 80 * koshkaS, koshkaX + 25 * koshkaS, koshkaY + 80 * koshkaS, koshkaX + 20 * koshkaS, koshkaY + 70 * koshkaS);
    bezierVertex(koshkaX + 40 * koshkaS, koshkaY - 20 * koshkaS, koshkaX + 40 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 20 * koshkaS, koshkaY - 60 * koshkaS);
    endShape(CLOSE);

    // head
    fill(249, 246, 219);
    beginShape();
    vertex(koshkaX - 35 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX - 45 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 45 * koshkaS, koshkaY - 80* koshkaS, koshkaX - 35 * koshkaS, koshkaY - 100 * koshkaS);
    bezierVertex(koshkaX - 15 * koshkaS, koshkaY - 130 * koshkaS, koshkaX + 25 * koshkaS, koshkaY - 120 * koshkaS, koshkaX + 35 * koshkaS, koshkaY - 100 * koshkaS);
    bezierVertex(koshkaX + 45 * koshkaS, koshkaY - 80 * koshkaS, koshkaX + 45 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 35 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX + 25 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 25 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 35 * koshkaS, koshkaY - 50 * koshkaS);
    endShape();
    
    //face
    noStroke();
    fill(0, 0, 0);
    ellipse(koshkaX - 17 * koshkaS, koshkaY - 85 * koshkaS, 12 * koshkaS);
    ellipse(koshkaX + 17 * koshkaS, koshkaY - 85 * koshkaS, 12 * koshkaS);

    fill(255, 255, 255);
    ellipse(koshkaX - 15 * koshkaS, koshkaY - 87 * koshkaS, 4 * koshkaS);
    ellipse(koshkaX + 19 * koshkaS, koshkaY - 87 * koshkaS, 4 * koshkaS);

    //nose
    fill(196, 106, 80);
    beginShape();
    vertex(koshkaX, koshkaY - 69 * koshkaS);
    bezierVertex(koshkaX - 4 * koshkaS, koshkaY - 71 * koshkaS, koshkaX - 6 * koshkaS, koshkaY - 69 * koshkaS, koshkaX, koshkaY - 62 * koshkaS);
    bezierVertex(koshkaX - 5 * koshkaS, koshkaY - 70 * koshkaS, koshkaX - 5 * koshkaS, koshkaY - 70 * koshkaS, koshkaX, koshkaY - 62 * koshkaS);
    bezierVertex(koshkaX + 6 * koshkaS, koshkaY - 69 * koshkaS, koshkaX + 4 * koshkaS, koshkaY - 71 * koshkaS,  koshkaX, koshkaY - 69 * koshkaS);
    endShape();

    //mouth
    beginShape();
    stroke(196, 106, 80);
    strokeWeight(1);
    vertex(koshkaX, koshkaY - 63 * koshkaS);
    bezierVertex(koshkaX, koshkaY - 58 * koshkaS, koshkaX - 10 * koshkaS, koshkaY - 58 * koshkaS, koshkaX - 10 * koshkaS,  koshkaY - 62 * koshkaS);
    bezierVertex(koshkaX - 10 * koshkaS, koshkaY - 57 * koshkaS, koshkaX, koshkaY - 57 * koshkaS,  koshkaX,  koshkaY - 63 * koshkaS);
    endShape();

    beginShape();
    vertex(koshkaX, koshkaY - 63 * koshkaS);
    bezierVertex(koshkaX, koshkaY - 58 * koshkaS, koshkaX + 10 * koshkaS, koshkaY - 58 * koshkaS, koshkaX + 10 * koshkaS,  koshkaY - 62 * koshkaS);
    bezierVertex(koshkaX + 10 * koshkaS, koshkaY - 57 * koshkaS, koshkaX, koshkaY - 57 * koshkaS,  koshkaX,  koshkaY - 63 * koshkaS);
    endShape();

    noStroke();
    fill(133, 173, 40);
    beginShape();
    vertex(koshkaX - 60 * koshkaS, koshkaY + 10 * koshkaS);
    bezierVertex(koshkaX - 75 * koshkaS, koshkaY + 10 * koshkaS, koshkaX - 75 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 60 * koshkaS, koshkaY - 10 * koshkaS);
    bezierVertex(koshkaX - 45 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 50 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 60 * koshkaS, koshkaY - 30 * koshkaS);
    bezierVertex(koshkaX - 75 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 75 * koshkaS, koshkaY - 50 * koshkaS, koshkaX - 60 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX - 60 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 60 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 65 * koshkaS, koshkaY - 70 * koshkaS);
    bezierVertex(koshkaX - 55 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 55 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 58 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX - 70 * koshkaS, koshkaY - 50 * koshkaS, koshkaX - 70 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 55 * koshkaS, koshkaY - 30 * koshkaS);
    bezierVertex(koshkaX - 45 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 40 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 55 * koshkaS, koshkaY - 10 * koshkaS);
    bezierVertex(koshkaX - 70 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 70 * koshkaS, koshkaY + 10 * koshkaS, koshkaX - 55 * koshkaS, koshkaY + 10 * koshkaS);
    endShape();

    beginShape();
    vertex(koshkaX - 110 * koshkaS, koshkaY + 10 * koshkaS);
    bezierVertex(koshkaX - 125 * koshkaS, koshkaY + 10 * koshkaS, koshkaX - 125 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 110 * koshkaS, koshkaY - 10 * koshkaS);
    bezierVertex(koshkaX - 95 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 100 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 110 * koshkaS, koshkaY - 30 * koshkaS);
    bezierVertex(koshkaX - 125 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 125 * koshkaS, koshkaY - 50 * koshkaS, koshkaX - 110 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX - 110 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 110 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 115 * koshkaS, koshkaY - 70 * koshkaS);
    bezierVertex(koshkaX - 105 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 105 * koshkaS, koshkaY - 60 * koshkaS, koshkaX - 108 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX - 120 * koshkaS, koshkaY - 50 * koshkaS, koshkaX - 120 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 105 * koshkaS, koshkaY - 30 * koshkaS);
    bezierVertex(koshkaX - 95 * koshkaS, koshkaY - 30 * koshkaS, koshkaX - 90 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 105 * koshkaS, koshkaY - 10 * koshkaS);
    bezierVertex(koshkaX - 120 * koshkaS, koshkaY - 10 * koshkaS, koshkaX - 120 * koshkaS, koshkaY + 10 * koshkaS, koshkaX - 105 * koshkaS, koshkaY + 10 * koshkaS);
    endShape();

    beginShape();
    vertex(koshkaX + 60 * koshkaS, koshkaY + 10 * koshkaS);
    bezierVertex(koshkaX + 75 * koshkaS, koshkaY + 10 * koshkaS, koshkaX + 75 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 60 * koshkaS, koshkaY - 10 * koshkaS);
    bezierVertex(koshkaX + 45 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 50 * koshkaS, koshkaY - 30 * koshkaS, koshkaX + 60 * koshkaS, koshkaY - 30 * koshkaS);
    bezierVertex(koshkaX + 75 * koshkaS, koshkaY - 30 * koshkaS, koshkaX + 75 * koshkaS, koshkaY - 50 * koshkaS, koshkaX + 60 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX + 60 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 60 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 65 * koshkaS, koshkaY - 70 * koshkaS);
    bezierVertex(koshkaX + 55 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 55 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 58 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX + 70 * koshkaS, koshkaY - 50 * koshkaS, koshkaX + 70 * koshkaS, koshkaY - 30 * koshkaS, koshkaX + 55 * koshkaS, koshkaY - 30 * koshkaS);
    bezierVertex(koshkaX + 45 * koshkaS, koshkaY - 30 * koshkaS, koshkaX + 40 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 55 * koshkaS, koshkaY - 10 * koshkaS);
    bezierVertex(koshkaX + 70 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 70 * koshkaS, koshkaY + 10 * koshkaS, koshkaX + 55 * koshkaS, koshkaY + 10 * koshkaS);
    endShape();

    beginShape();
    vertex(koshkaX + 110 * koshkaS, koshkaY + 10 * koshkaS);
    bezierVertex(koshkaX + 125 * koshkaS, koshkaY + 10 * koshkaS, koshkaX + 125 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 110 * koshkaS, koshkaY - 10 * koshkaS);
    bezierVertex(koshkaX + 95 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 100 * koshkaS, koshkaY - 30 * koshkaS, koshkaX + 110 * koshkaS, koshkaY - 30 * koshkaS);
    bezierVertex(koshkaX + 125 * koshkaS, koshkaY - 30 * koshkaS, koshkaX + 125 * koshkaS, koshkaY - 50 * koshkaS, koshkaX + 110 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX + 110 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 110 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 115 * koshkaS, koshkaY - 70 * koshkaS);
    bezierVertex(koshkaX + 105 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 105 * koshkaS, koshkaY - 60 * koshkaS, koshkaX + 108 * koshkaS, koshkaY - 50 * koshkaS);
    bezierVertex(koshkaX + 120 * koshkaS, koshkaY - 50 * koshkaS, koshkaX + 120 * koshkaS, koshkaY - 30 * koshkaS, koshkaX + 105 * koshkaS, koshkaY - 30 * koshkaS);
    bezierVertex(koshkaX + 95 * koshkaS, koshkaY - 30 * koshkaS, koshkaX + 90 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 105 * koshkaS, koshkaY - 10 * koshkaS);
    bezierVertex(koshkaX + 120 * koshkaS, koshkaY - 10 * koshkaS, koshkaX + 120 * koshkaS, koshkaY + 10 * koshkaS, koshkaX + 105 * koshkaS, koshkaY + 10 * koshkaS);
    endShape();

    //mud
    fill(150, 136, 89);
    stroke(117, 105, 65);

    ellipse(koshkaX - 24 * koshkaS, koshkaY + 69 * koshkaS, 15 * koshkaS, 10 * koshkaS);
    ellipse(koshkaX + 24 * koshkaS, koshkaY + 69 * koshkaS, 15 * koshkaS, 10 * koshkaS);

    beginShape();
    vertex(koshkaX - 29 * koshkaS, koshkaY + 30 * koshkaS);
    bezierVertex(koshkaX - 25 * koshkaS, koshkaY + 15 * koshkaS, koshkaX - 5 * koshkaS, koshkaY + 15 * koshkaS, koshkaX - 5 * koshkaS, koshkaY + 30 * koshkaS);
    vertex(koshkaX - 5 * koshkaS, koshkaY + 70 * koshkaS);
    bezierVertex(koshkaX, koshkaY + 80 * koshkaS, koshkaX - 25 * koshkaS, koshkaY + 80 * koshkaS, koshkaX - 20 * koshkaS, koshkaY + 70 * koshkaS);
    endShape(CLOSE);

    beginShape();
    vertex(koshkaX + 29 * koshkaS, koshkaY + 30 * koshkaS);
    bezierVertex(koshkaX + 25 * koshkaS, koshkaY + 15 * koshkaS, koshkaX + 5 * koshkaS, koshkaY + 15 * koshkaS, koshkaX + 5 * koshkaS, koshkaY + 30 * koshkaS);
    vertex(koshkaX + 5 * koshkaS, koshkaY + 70 * koshkaS);
    bezierVertex(koshkaX, koshkaY + 80 * koshkaS, koshkaX + 25 * koshkaS, koshkaY + 80 * koshkaS, koshkaX + 20 * koshkaS, koshkaY + 70 * koshkaS);
    endShape(CLOSE);

    beginShape();
    vertex(koshkaX + 100 * koshkaS, koshkaY + 75 * koshkaS);
    bezierVertex(koshkaX + 85 * koshkaS, koshkaY + 85 * koshkaS, koshkaX + 65 * koshkaS, koshkaY + 85 * koshkaS, koshkaX + 45 * koshkaS, koshkaY + 80 *koshkaS); 
    bezierVertex(koshkaX + 35 * koshkaS, koshkaY + 75 * koshkaS, koshkaX + 35 * koshkaS, koshkaY + 70 * koshkaS, koshkaX + 45 * koshkaS, koshkaY + 67 * koshkaS);
    vertex(koshkaX + 75 * koshkaS, koshkaY + 66 * koshkaS);
    bezierVertex(koshkaX + 95 * koshkaS, koshkaY + 68 * koshkaS, koshkaX + 100 * koshkaS, koshkaY + 70 * koshkaS, koshkaX + 100 * koshkaS, koshkaY + 75 * koshkaS);
    endShape();
}

function stool(stoolX, stoolY, stoolS) {
    fill(101, 54, 20);

    push();
    stroke(0);
    fill(248, 207, 56);
    rect(stoolX - 10 * stoolS, stoolY + 160 * stoolS, 20, 100);
    pop();

    push();
    stroke(0);
    ellipse(stoolX, stoolY + 150 * stoolS, 220 * stoolS, 75 * stoolS);
    rect(stoolX - 110 * stoolS, stoolY + 80 * stoolS, 220 * stoolS, 70 * stoolS);
    noStroke();
    rect(stoolX - 110 * stoolS, stoolY + 80 * stoolS, 220 * stoolS, 72 * stoolS);
    pop();

    push();
    stroke(0);
    ellipse(stoolX, stoolY + 80 * stoolS, 220 * stoolS, 75 * stoolS);
    fill(116, 76, 44);
    ellipse(stoolX, stoolY + 80 * stoolS, 200 * stoolS, 60* stoolS);
    pop();
}


function draw() {
  if (state === "firstScreenPart1") {
    image(imageBackground, 0, 0, 800, 600);
    stool(stoolX, stoolY, 0.85);
    nastyKoshka(koshkaX, koshkaY, koshkaS);

    // Update the cat position
    if (isDragging) {
      koshkaX = mouseX;
      koshkaY = mouseY;
    }
    // Check if the cat is within the magnetic radius of the table
    if (dist(koshkaX, koshkaY, stoolX, stoolY) < magnetismRadius) {
      koshkaX = stoolX;
      koshkaY = stoolY;
    }

    if (dist(koshkaX, koshkaY, stoolX, stoolY) < 1) {
        state = "firstScreenPart2";
    }
  } else if (state === "firstScreenPart2") {
    image(imageBackground, 0, 0, 800, 600);
    stool(stoolX, stoolY, 0.85);
    nastyKoshka(stoolX, stoolY, koshkaS);

    noStroke();
    fill(249, 246, 219);
    rect(90, 10, 360, 30, 20);
    fill(0, 0, 0);
    textSize(15);
    text("Good job! You are moving to your next assignment!", 100, 30);

    if (stoolX >= 400) {
        stoolX += 3;
    }
  }
}

function mousePressed() {
  // Check if the mouse is over the cat
  if (dist(mouseX, mouseY, koshkaX, koshkaY) < 130) {
    isDragging = true;
  }
}

function mouseReleased() {
  isDragging = false;
}
