class Block
{
    constructor(x,y,width,height)
    {
        var options =
         {
                 restitution:0.6,
                 //density:100,
                 friction:0.3,
                 restitution:0.6,
                // angle:PI/4
              
                
                
         }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
       // this.body.angle = PI/4
       this.height=height;
       this.visibility = 255

        World.add(world,this.body);
    }

    display() 
    {
       if(this.body.speed<7.9){
        var pos =this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS)
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2)
        stroke(255)
       fill(127);
      //  fill("purple")
        rect(0,0,this.width,this.height);

        pop();
       }
        else{

         World.remove(world,this.body)
        push();
        this.visibility = this.visibility - 1
        tint(255,this.visibility)
        rectMode(CENTER)
      //  rect(999,999,this.width,this.height)
        pop();
        }
       
        }
    


}
 