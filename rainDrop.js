class Raindrop {
  constructor(){
    this.x = random(width);
    this.y = random(-1*height);
    this.xSpeed = 1;
    this.ySpeed = 10;
    this.r = random(1,3);
  }
  
  show(){
    stroke(175,195,204);
    strokeWeight(this.r);
    point(this.x, this.y); 
  }
  update(wind){
    this.x = this.x + this.xSpeed + wind;
    this.y = this.y + this.ySpeed*this.r;
    
    if(this.y > width){
      this.y = random(-1,-1*height);
    }
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){
      this.x = width;
    }
    
  }
}