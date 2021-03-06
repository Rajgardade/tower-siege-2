class Bird
{
    constructor(x,y)
    {
        var options =
         {
                 restitution: 0.7,
                 density: 1.0,
                 friction:1.0
         }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(myworld,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX
        pos.y = mouseY

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);

        pop();
    }

  
}