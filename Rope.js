class Rope
{
  constructor(bodyA, bodyB, offsetX, offsetY)
  {
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    var options = 
    {
      bodyA: bodyA,
      bodyB: bodyB,
      pointB: {x:this.offsetX, y:this.offsetY},
    }

    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display()
  {
    var ropeA = this.rope.bodyA.position;
    var ropeB = this.rope.bodyB.position;
    strokeWeight(2);

    var rope1X = ropeA.x;
    var rope1Y = ropeA.y;

    var rope2X = ropeB.x + this.offsetX;
    var rope2Y = ropeB.y + this.offsetY;
    line(rope1X, rope1Y, rope2X, rope2Y);
    
  }
}