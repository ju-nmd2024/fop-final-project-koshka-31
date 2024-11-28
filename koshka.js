function nastyKoshka(x, y, s) {
    fill(249, 246, 219);
    stroke(150, 136, 89);
    strokeWeight(1);


    //ears
    triangle(x - 35 * s, y - 100 * s, x - 30 * s, y - 130 * s, x - 17 * s, y - 115 * s);
    triangle(x + 35 * s, y - 100 * s, x + 30 * s, y - 130 * s, x + 17 * s, y - 115 * s);
    
    //red ears
    fill(196, 106, 80);
    triangle(x - 33 * s, y - 95 * s, x - 28 * s, y - 123 * s, x - 18 * s, y - 110 * s);
    triangle(x + 33 * s, y - 95 * s, x + 28 * s, y - 123 * s, x + 18 * s, y - 110 * s);

    //body
    //hvost
    fill(245, 241, 208);
    beginShape();
    vertex(x + 40 * s, y + 40 * s);
    vertex(x + 80 * s, y + 45 * s);
    bezierVertex(x + 105 * s, y + 50 * s, x + 115 * s, y + 60 * s, x + 100 * s, y + 75 * s);
    bezierVertex(x + 85 * s, y + 85 * s, x + 65 * s, y + 85 * s, x + 45 * s, y + 80 *s); 
    bezierVertex(x + 35 * s, y + 75 * s, x + 35 * s, y + 70 * s, x + 45 * s, y + 67 * s);
    bezierVertex(x + 100 *s, y + 70 * s, x + 85 * s, y + 60 * s, x + 75 * s, y + 60 * s);
    bezierVertex(x + 50 * s, y + 60 * s, x + 40 * s, y + 55 * s, x + 35 * s, y + 50 * s);
    endShape();

    //zadniy lapy
    beginShape();
    vertex(x - 30 * s, y + 10 * s);
    bezierVertex(x - 50 * s, y + 20 * s, x - 50 * s, y + 40 * s, x - 30 * s, y + 65 * s);
    bezierVertex(x - 35 * s, y + 75 * s, x - 10 * s, y + 75 * s, x - 15 * s, y + 65 * s);
    vertex(x + 15 * s, y + 65 * s);
    bezierVertex(x + 10 * s, y + 75 * s, x + 35 * s, y + 75 * s, x + 30 * s, y + 65 * s);
    bezierVertex(x + 50 * s, y + 40 * s, x + 50 * s, y + 20 * s, x + 30 * s, y + 10 * s);
    endShape(CLOSE);

    //peredniy lapy
    fill(249, 246, 219);
    beginShape();
    vertex(x - 20 * s, y - 60 * s);
    bezierVertex(x - 40 * s, y - 10 * s, x - 40 * s, y - 20 * s, x - 20 * s, y + 70 * s);
    bezierVertex(x - 25 * s, y + 80 * s, x, y + 80 * s, x - 5 * s, y + 70 * s);
    vertex(x - 5 * s, y + 30 * s);
    bezierVertex(x - 5 * s, y + 10 * s, x + 5 * s, y + 10 * s, x + 5 * s, y + 30 * s);
    vertex(x + 5 * s, y + 70 * s);
    bezierVertex(x, y + 80 * s, x + 25 * s, y + 80 * s, x + 20 * s, y + 70 * s);
    bezierVertex(x + 40 * s, y - 20 * s, x + 40 * s, y - 10 * s, x + 20 * s, y - 60 * s);
    endShape(CLOSE);

    // head
    fill(249, 246, 219);
    beginShape();
    vertex(x - 35 * s, y - 50 * s);
    bezierVertex(x - 45 * s, y - 60 * s, x - 45 * s, y - 80* s, x - 35 * s, y - 100 * s);
    bezierVertex(x - 15 * s, y - 130 * s, x + 25 * s, y - 120 * s, x + 35 * s, y - 100 * s);
    bezierVertex(x + 45 * s, y - 80 * s, x + 45 * s, y - 60 * s, x + 35 * s, y - 50 * s);
    bezierVertex(x + 25 * s, y - 30 * s, x - 25 * s, y - 30 * s, x - 35 * s, y - 50 * s);
    endShape();
    
    //face
    noStroke();
    fill(0, 0, 0);
    ellipse(x - 17 * s, y - 85 * s, 12 * s);
    ellipse(x + 17 * s, y - 85 * s, 12 * s);

    fill(255, 255, 255);
    ellipse(x - 15 * s, y - 87 * s, 4 * s);
    ellipse(x + 19 * s, y - 87 * s, 4 * s);

    //nose
    fill(196, 106, 80);
    beginShape();
    vertex(x, y - 69 * s);
    bezierVertex(x - 4 * s, y - 71 * s, x - 6 * s, y - 69 * s, x, y - 62 * s);
    bezierVertex(x - 5 * s, y - 70 * s, x - 5 * s, y - 70 * s, x, y - 62 * s);
    bezierVertex(x + 6 * s, y - 69 * s, x + 4 * s, y - 71 * s,  x, y - 69 * s);
    endShape();

    //mouth
    beginShape();
    stroke(196, 106, 80);
    strokeWeight(1);
    vertex(x, y - 63 * s);
    bezierVertex(x, y - 58 * s, x - 10 * s, y - 58 * s, x - 10 * s,  y - 62 * s);
    bezierVertex(x - 10 * s, y - 57 * s, x, y - 57 * s,  x,  y - 63 * s);
    endShape();

    beginShape();
    vertex(x, y - 63 * s);
    bezierVertex(x, y - 58 * s, x + 10 * s, y - 58 * s, x + 10 * s,  y - 62 * s);
    bezierVertex(x + 10 * s, y - 57 * s, x, y - 57 * s,  x,  y - 63 * s);
    endShape();

    noStroke();
    fill(133, 173, 40);
    beginShape();
    vertex(x - 60 * s, y + 10 * s);
    bezierVertex(x - 75 * s, y + 10 * s, x - 75 * s, y - 10 * s, x - 60 * s, y - 10 * s);
    bezierVertex(x - 45 * s, y - 10 * s, x - 50 * s, y - 30 * s, x - 60 * s, y - 30 * s);
    bezierVertex(x - 75 * s, y - 30 * s, x - 75 * s, y - 50 * s, x - 60 * s, y - 50 * s);
    bezierVertex(x - 60 * s, y - 60 * s, x - 60 * s, y - 60 * s, x - 65 * s, y - 70 * s);
    bezierVertex(x - 55 * s, y - 60 * s, x - 55 * s, y - 60 * s, x - 58 * s, y - 50 * s);
    bezierVertex(x - 70 * s, y - 50 * s, x - 70 * s, y - 30 * s, x - 55 * s, y - 30 * s);
    bezierVertex(x - 45 * s, y - 30 * s, x - 40 * s, y - 10 * s, x - 55 * s, y - 10 * s);
    bezierVertex(x - 70 * s, y - 10 * s, x - 70 * s, y + 10 * s, x - 55 * s, y + 10 * s);
    endShape();

    beginShape();
    vertex(x - 110 * s, y + 10 * s);
    bezierVertex(x - 125 * s, y + 10 * s, x - 125 * s, y - 10 * s, x - 110 * s, y - 10 * s);
    bezierVertex(x - 95 * s, y - 10 * s, x - 100 * s, y - 30 * s, x - 110 * s, y - 30 * s);
    bezierVertex(x - 125 * s, y - 30 * s, x - 125 * s, y - 50 * s, x - 110 * s, y - 50 * s);
    bezierVertex(x - 110 * s, y - 60 * s, x - 110 * s, y - 60 * s, x - 115 * s, y - 70 * s);
    bezierVertex(x - 105 * s, y - 60 * s, x - 105 * s, y - 60 * s, x - 108 * s, y - 50 * s);
    bezierVertex(x - 120 * s, y - 50 * s, x - 120 * s, y - 30 * s, x - 105 * s, y - 30 * s);
    bezierVertex(x - 95 * s, y - 30 * s, x - 90 * s, y - 10 * s, x - 105 * s, y - 10 * s);
    bezierVertex(x - 120 * s, y - 10 * s, x - 120 * s, y + 10 * s, x - 105 * s, y + 10 * s);
    endShape();

    beginShape();
    vertex(x + 60 * s, y + 10 * s);
    bezierVertex(x + 75 * s, y + 10 * s, x + 75 * s, y - 10 * s, x + 60 * s, y - 10 * s);
    bezierVertex(x + 45 * s, y - 10 * s, x + 50 * s, y - 30 * s, x + 60 * s, y - 30 * s);
    bezierVertex(x + 75 * s, y - 30 * s, x + 75 * s, y - 50 * s, x + 60 * s, y - 50 * s);
    bezierVertex(x + 60 * s, y - 60 * s, x + 60 * s, y - 60 * s, x + 65 * s, y - 70 * s);
    bezierVertex(x + 55 * s, y - 60 * s, x + 55 * s, y - 60 * s, x + 58 * s, y - 50 * s);
    bezierVertex(x + 70 * s, y - 50 * s, x + 70 * s, y - 30 * s, x + 55 * s, y - 30 * s);
    bezierVertex(x + 45 * s, y - 30 * s, x + 40 * s, y - 10 * s, x + 55 * s, y - 10 * s);
    bezierVertex(x + 70 * s, y - 10 * s, x + 70 * s, y + 10 * s, x + 55 * s, y + 10 * s);
    endShape();

    beginShape();
    vertex(x + 110 * s, y + 10 * s);
    bezierVertex(x + 125 * s, y + 10 * s, x + 125 * s, y - 10 * s, x + 110 * s, y - 10 * s);
    bezierVertex(x + 95 * s, y - 10 * s, x + 100 * s, y - 30 * s, x + 110 * s, y - 30 * s);
    bezierVertex(x + 125 * s, y - 30 * s, x + 125 * s, y - 50 * s, x + 110 * s, y - 50 * s);
    bezierVertex(x + 110 * s, y - 60 * s, x + 110 * s, y - 60 * s, x + 115 * s, y - 70 * s);
    bezierVertex(x + 105 * s, y - 60 * s, x + 105 * s, y - 60 * s, x + 108 * s, y - 50 * s);
    bezierVertex(x + 120 * s, y - 50 * s, x + 120 * s, y - 30 * s, x + 105 * s, y - 30 * s);
    bezierVertex(x + 95 * s, y - 30 * s, x + 90 * s, y - 10 * s, x + 105 * s, y - 10 * s);
    bezierVertex(x + 120 * s, y - 10 * s, x + 120 * s, y + 10 * s, x + 105 * s, y + 10 * s);
    endShape();

    //mud
    fill(150, 136, 89);
    stroke(117, 105, 65);

    ellipse(x - 24 * s, y + 69 * s, 15 * s, 10 * s);
    ellipse(x + 24 * s, y + 69 * s, 15 * s, 10 * s);

    beginShape();
    vertex(x - 29 * s, y + 30 * s);
    bezierVertex(x - 25 * s, y + 15 * s, x - 5 * s, y + 15 * s, x - 5 * s, y + 30 * s);
    vertex(x - 5 * s, y + 70 * s);
    bezierVertex(x, y + 80 * s, x - 25 * s, y + 80 * s, x - 20 * s, y + 70 * s);
    endShape(CLOSE);

    beginShape();
    vertex(x + 29 * s, y + 30 * s);
    bezierVertex(x + 25 * s, y + 15 * s, x + 5 * s, y + 15 * s, x + 5 * s, y + 30 * s);
    vertex(x + 5 * s, y + 70 * s);
    bezierVertex(x, y + 80 * s, x + 25 * s, y + 80 * s, x + 20 * s, y + 70 * s);
    endShape(CLOSE);

    beginShape();
    vertex(x + 100 * s, y + 75 * s);
    bezierVertex(x + 85 * s, y + 85 * s, x + 65 * s, y + 85 * s, x + 45 * s, y + 80 *s); 
    bezierVertex(x + 35 * s, y + 75 * s, x + 35 * s, y + 70 * s, x + 45 * s, y + 67 * s);
    vertex(x + 75 * s, y + 66 * s);
    bezierVertex(x + 95 * s, y + 68 * s, x + 100 * s, y + 70 * s, x + 100 * s, y + 75 * s);
    endShape();
}

function cleanKoshka(x, y, s) {
    fill(249, 246, 219);
    stroke(150, 136, 89);
    strokeWeight(1);


    //ears
    triangle(x - 35 * s, y - 100 * s, x - 30 * s, y - 130 * s, x - 17 * s, y - 115 * s);
    triangle(x + 35 * s, y - 100 * s, x + 30 * s, y - 130 * s, x + 17 * s, y - 115 * s);
    
    //red ears
    fill(196, 106, 80);
    triangle(x - 33 * s, y - 95 * s, x - 28 * s, y - 123 * s, x - 18 * s, y - 110 * s);
    triangle(x + 33 * s, y - 95 * s, x + 28 * s, y - 123 * s, x + 18 * s, y - 110 * s);

    //body
    //hvost
    fill(245, 241, 208);
    beginShape();
    vertex(x + 40 * s, y + 40 * s);
    vertex(x + 80 * s, y + 45 * s);
    bezierVertex(x + 105 * s, y + 50 * s, x + 115 * s, y + 60 * s, x + 100 * s, y + 75 * s);
    bezierVertex(x + 85 * s, y + 85 * s, x + 65 * s, y + 85 * s, x + 45 * s, y + 80 *s); 
    bezierVertex(x + 35 * s, y + 75 * s, x + 35 * s, y + 70 * s, x + 45 * s, y + 67 * s);
    bezierVertex(x + 100 *s, y + 70 * s, x + 85 * s, y + 60 * s, x + 75 * s, y + 60 * s);
    bezierVertex(x + 50 * s, y + 60 * s, x + 40 * s, y + 55 * s, x + 35 * s, y + 50 * s);
    endShape();

    //zadniy lapy
    beginShape();
    vertex(x - 30 * s, y + 10 * s);
    bezierVertex(x - 50 * s, y + 20 * s, x - 50 * s, y + 40 * s, x - 30 * s, y + 65 * s);
    bezierVertex(x - 35 * s, y + 75 * s, x - 10 * s, y + 75 * s, x - 15 * s, y + 65 * s);
    vertex(x + 15 * s, y + 65 * s);
    bezierVertex(x + 10 * s, y + 75 * s, x + 35 * s, y + 75 * s, x + 30 * s, y + 65 * s);
    bezierVertex(x + 50 * s, y + 40 * s, x + 50 * s, y + 20 * s, x + 30 * s, y + 10 * s);
    endShape(CLOSE);

    //peredniy lapy
    fill(249, 246, 219);
    beginShape();
    vertex(x - 20 * s, y - 60 * s);
    bezierVertex(x - 40 * s, y - 10 * s, x - 40 * s, y - 20 * s, x - 20 * s, y + 70 * s);
    bezierVertex(x - 25 * s, y + 80 * s, x, y + 80 * s, x - 5 * s, y + 70 * s);
    vertex(x - 5 * s, y + 30 * s);
    bezierVertex(x - 5 * s, y + 10 * s, x + 5 * s, y + 10 * s, x + 5 * s, y + 30 * s);
    vertex(x + 5 * s, y + 70 * s);
    bezierVertex(x, y + 80 * s, x + 25 * s, y + 80 * s, x + 20 * s, y + 70 * s);
    bezierVertex(x + 40 * s, y - 20 * s, x + 40 * s, y - 10 * s, x + 20 * s, y - 60 * s);
    endShape(CLOSE);

    // head
    fill(249, 246, 219);
    beginShape();
    vertex(x - 35 * s, y - 50 * s);
    bezierVertex(x - 45 * s, y - 60 * s, x - 45 * s, y - 80* s, x - 35 * s, y - 100 * s);
    bezierVertex(x - 15 * s, y - 130 * s, x + 25 * s, y - 120 * s, x + 35 * s, y - 100 * s);
    bezierVertex(x + 45 * s, y - 80 * s, x + 45 * s, y - 60 * s, x + 35 * s, y - 50 * s);
    bezierVertex(x + 25 * s, y - 30 * s, x - 25 * s, y - 30 * s, x - 35 * s, y - 50 * s);
    endShape();
    
    //face
    noStroke();
    fill(0, 0, 0);
    ellipse(x - 17 * s, y - 85 * s, 12 * s);
    ellipse(x + 17 * s, y - 85 * s, 12 * s);

    fill(255, 255, 255);
    ellipse(x - 15 * s, y - 87 * s, 4 * s);
    ellipse(x + 19 * s, y - 87 * s, 4 * s);

    //nose
    fill(196, 106, 80);
    beginShape();
    vertex(x, y - 69 * s);
    bezierVertex(x - 4 * s, y - 71 * s, x - 6 * s, y - 69 * s, x, y - 62 * s);
    bezierVertex(x - 5 * s, y - 70 * s, x - 5 * s, y - 70 * s, x, y - 62 * s);
    bezierVertex(x + 6 * s, y - 69 * s, x + 4 * s, y - 71 * s,  x, y - 69 * s);
    endShape();

    //mouth
    beginShape();
    stroke(196, 106, 80);
    strokeWeight(1);
    vertex(x, y - 63 * s);
    bezierVertex(x, y - 58 * s, x - 10 * s, y - 58 * s, x - 10 * s,  y - 62 * s);
    bezierVertex(x - 10 * s, y - 57 * s, x, y - 57 * s,  x,  y - 63 * s);
    endShape();

    beginShape();
    vertex(x, y - 63 * s);
    bezierVertex(x, y - 58 * s, x + 10 * s, y - 58 * s, x + 10 * s,  y - 62 * s);
    bezierVertex(x + 10 * s, y - 57 * s, x, y - 57 * s,  x,  y - 63 * s);
    endShape();
}

function stool(x, y, s) {
    fill(101, 54, 20);

    push();
    noStroke();
    fill(150);
    rect(x - 10 * s, y + 160 * s, 20, 100);
    pop();

    push();
    noStroke();
    ellipse(x, y + 150 * s, 220 * s, 75 * s);
    rect(x - 110 * s, y + 80 * s, 220 * s, 70 * s);
    pop();

    push();
    stroke(0);
    ellipse(x, y + 80 * s, 220 * s, 75 * s);
    fill(116, 76, 44);
    ellipse(x, y + 80 * s, 200 * s, 60* s);
    pop();

}

//table
function table(x, y, s) {
    stroke(0);
    fill(101, 54, 20);
    rect(x - 110 * s, y + 100 * s, 20, 100);
    rect(x - 60 * s, y + 100 * s, 20, 70);
    rect(x + 60 * s, y + 100 * s, 20, 100);
    rect(x + 110 * s, y + 30 * s, 20, 140);
    quad(x - 110 * s, y + 100 * s, x - 60 * s, y + 30 * s, x + 130 * s, y + 30 * s, x + 80 * s, y + 100 * s);
}




function draw() {
    background(255);
    stool(400, 400, 1);
    table(400, 400, 1);
    nastyKoshka(400, 400, 1);
    // cleanKoshka(600, 400, 1);
}

