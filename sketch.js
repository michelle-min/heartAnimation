

const heart = [];
const totalFrames = 240;
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}

function draw() {
  // heart
  const percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
  // text
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('p5.js', 0, 0);
  fill(0, 102, 153, 51);
}

function render(percent) {
  background(0);
  translate(width / 2, height / 2);
  stroke(255, 0, 100);
  strokeWeight(4);
  fill(255, 0, 100);
  
  beginShape();
  for (let v of heart) {
    const a = map(percent, 0, 1, 0, TWO_PI * 2);
    const r = map(sin(a), -1, 1, height / 80, height / 40);
    vertex(r * v.x, r * v.y);
    
  }
  endShape();

  if (percent < 0.5) {
    const a = map(percent, 0, 0.5, 0, TWO_PI);
    const x = 16 * pow(sin(a), 3);
    const y = -(13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    heart.push(createVector(x, y));
  } else {
    heart.splice(0, 1);
  }

}
