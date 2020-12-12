function preload(){
    
}

function setup(){
    createCanvas(1200, 400);
     
    umbrella = new Umbrella();
    var maxdDrops = 100;
    for(var i=0; i<maxDrops; i++){
        maxdDrops.push(new createDrop(random(0,400), random(0,400)));
    
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
}
}

function draw(){
    umbrella.display();
}