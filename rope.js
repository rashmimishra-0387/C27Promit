class Rope {
    constructor (bob, roof, offsetX, offsetY) {
               
        var options ={
            bodyA:bob,
            bodyB:roof,
            pointB: {x:offsetX, y:offsetY}   
        }
        this.rope = Constraint.create (options);
        this.offsetX=offsetX
        this.offsetY=offsetY
        World.add (world, this.rope);

    }

    display() {
        var pointA = this.rope.bodyA.position; 
        var pointB = this.rope.bodyB.position;
         
        var anchor2X = pointB.x + this.offsetX; 
        var anchor2Y = pointB.y + this.offsetY; 
        strokeWeight(4) 
        line (pointA.x, pointA.y, anchor2X, anchor2Y);
     }


} 