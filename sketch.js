function setup() {
    createCanvas(400, 400);
    background("#29A01C");
  }
  
  function draw() {
    stroke("white");
    fill("blue");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  