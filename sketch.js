var drop;

function preload(){
    
}

function setup(){
    createCanvas(600,600);
    
}

function draw(){
    background("black");
    tummy();
    rain = createGroup();
}   

function tummy(){
if(frameCount%20===0){
        drop=createSprite(Math.round(random(0,600)),0,2,2);
        drop.velocityY = -4;
        drop.shapeColor("blue");
          drop.setLifetime=150;
          rain.add(drop);
        }
      }
    
    
    