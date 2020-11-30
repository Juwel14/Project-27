class Bob 
{ 
  constructor(x, y)
  {
  var options = 
  {
    isStatic: false,
    restitution : 1.1,
    friction : 2,
    density : 4
  }

  this.body = Matter.Bodies.circle(x, y, 35, options);
  this.r = 35;
  World.add(world,this.body);
  }
    
  display()
  {
    rectMode(CENTER);
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    fill("blue")
    ellipse(pos.x, pos.y, 35);
    pop();
  }
}