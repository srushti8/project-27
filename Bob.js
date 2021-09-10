class Bob {
  constructor(x,y,r) {
    var options={ 
      isStatic:false, 
      restitution:1.0, 
      friction:0, 
      density:0.8
    } 
    this.x=x; 
    this.y=y; 
    this.r=r 
    this.body=Bodies.circle(x, y, r/2, options);
    World.add(world, this.body); 
  } 
  display() {
    var paperpos=this.body.position; 
    push(); 
    translate(this.x, this.y);
    rectMode(CENTER) 
    fill(255,60,117); 
    ellipse(0,0,this.r, this.r);
    pop(); 
  } 
}