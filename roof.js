class Roof {
    constructor (x, y, width, height) {
        var options ={
           isStatic : true 
        }
        this.body = Bodies.rectangle (x, y, width, height, options)
        World.add (world, this.body)
        
        this.height = height
        this.width = width
    
    }
        display () {
         rectMode (CENTER);
         rect (this.body.position.x, this.body.position.y, this.width,
            this.height);
    
        }
    
    
    
}