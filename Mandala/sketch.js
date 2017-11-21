var lines;

var points = [];
var sharpness = 100;
var reflections = 16;
var dt = 0;
var noisy = 0.25;

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  // background(255);

  stroke(51);
  strokeWeight(1);
  fill(255, 0, 0);

  translate(width / 2, height / 2);

  for (var i = 0; i < sharpness; i++) {
    var vec = p5.Vector.fromAngle(2 * PI * i / (sharpness * reflections));
    vec.setMag(300 * noise(noisy * (i / sharpness + dt)));
    points.push(vec);
  };

  if (dt % 100 != 0) points = [];

  points.forEach(function(entry) {
    rotPoint(entry, reflections);
  });

  dt += 1;
}

function rotPoint(p, n) {
  var l = createVector(0, 300);
  var angle = p.heading();
  var temp = p.copy();
  for (var i = 0; i < n; i++) {
    point(temp.x, temp.y);
    if (i % 2 == 0) {
      temp.rotate(4 * PI / n - 2 * angle);
    } else {
      temp.rotate(2 * angle);
    }
    // line(0, 0, l.x, l.y);
    // l.rotate(2 * PI / n);
  }
}
