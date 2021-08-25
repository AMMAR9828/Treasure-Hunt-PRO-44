var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(40);
  fill("red");
  stroke("yellow");
  text("*BE SURE YOUR CAPS LOCK IS ON", 100,470)

  // Add code to display score in the middle of the screen


  // Add code to display the end screen
  if(score === 3){
    clear();
    background(bg2);
    fill("GREEN");
    textSize(60);
    stroke("yellow");
    text("~TREASURE UNLOCKED~", 60,250);
  }

  drawSprites()
}