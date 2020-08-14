class Ball {
  constructor(x, y, radius) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.4,
        density:1.4
  
    }
    this.image = loadImage("sprites/PaperBall.png")
    this.x= x;
    this.y= y;
    this.radius=radius;

    //this.body = Bodies.rectangle(x, y, width , height,{isStatic:true} );

    //this.body = Bodies.circle(this.x,this.y,this.radius,options);
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    strokeWeight(3);
   stroke(255);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};