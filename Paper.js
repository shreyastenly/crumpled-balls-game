class Paper{
    constructor(x,y){
        var ballOptions={
            'isStatic':false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
      
        this.body = Bodies.circle(x, y, 70, ballOptions);
        this.body.shapeColor = "red"
        this.width = 50;
        this.height = 50;
        //this.image = loadImage("sprites/Paper.jpg")

        
        World.add(world, this.body);
      }

      display(){
      //image(this.image,1,0.2)
        ellipse(0, 0, this.width, this.height);
    
      }
    }
      
        
    