class Umbrella{
    constructor(x,y){
        this.image = loadImage("images/walking_1.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = 70;
        this.update;
        World.add(world,this.body);
    }
    }
