var catStart,catWalk,catEnd;
var mosueStart,mouseTease,mouseEnd;
var garden;
function preload() {
    //load the images here
    catStart=loadImage("images/cat1.png");
    catWalk=loadAnimation("images/cat2.png","images/cat3.png");
    catEnd=loadAnimation("images/cat4.png");

    mouseStart=loadImage("images/mouse2.png");
    mouseWalk=loadImage("image/mouse3.png");
    mouseEnd=loadImage("image/mouse1.png");
    garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,680,20,20);
    cat.addImage(catStart);
    cat.scale= 0.15;
    cat.addAnimation("walking",catWalk);
    cat.addAnimation("sit",catEnd);


    mouse = createSprite(150,635,10,10);
    mouse.addImage(mouseStart);
    mouse.scale=0.14;
 
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x < 70){
        cat.changeAnimation("sit",catEnd);
        cat.velocityX=0;
        cat.velocityY=0;

    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
        cat.changeAnimation("walking",catWalk);
        cat.velocityX=-3;
        cat.velocityY=-0.20;
    }
    if (keyCode === LEFT_ARROW){
        mouse.changeAnimation("teasing",mouseWalk);
        //mouse.velocity=
    }
       
}
