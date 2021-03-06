class Boundries
{
    constructor(x,y,width,height,a)
    {
        var options =
         {
                 restitution:0.2,
                 density: 0.4,
                 friction:1,
                 angle: a,
                 isStatic: true
                
         }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display()
    {
       
        var pos=this.body.position;
        var angle = this.body.angle; 
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rotate(angle);
        
        //fill("white");
        rect(0,0,this.width,this.height,);

        pop();
        }
    


}
 