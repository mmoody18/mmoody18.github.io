let x, y, xr, yr, r;

// sets up needed variables
function setup() {
  createCanvas(650, 500);
  r = 25;
  x = width / 2;
  y = height / 2;
  xr = 3;
  yr = 2;
}

//ball size, the background, and ball color
function draw() {
  background(82);
  fill(255, 0, 0);
  ellipse(x, y, r * 2);

  x += xr;
  y += yr;

  // if hit wall change direction
  if (x + r > width || x - r < 0) xr *= -1;
  if (y + r > height || y - r < 0) yr *= -1;
}
// if left click random speed
function mousePressed() {
  xr = random(-5, 5);
  yr = random(-5, 5);
}