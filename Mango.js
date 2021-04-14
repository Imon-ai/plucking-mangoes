class Mango{
    constructor(x, y) {
        var options = {
          isStatic:true,  
          'restitution':0.8,
          'friction':1.0,
          'density':1.0         
        }
        this.image = loadImage('mango.png');
        this.body = Bodies.rectangle(x, y,10 , 10, options);
        this.width = 10;
        this.height = 10;
        World.add(world, this.body);
       
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width+28,this.height+28);
        pop();
      }
}