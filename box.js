class box{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic: false,
            'restitution':0.8,
            'friction':0.5,
            'density':0.25
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){

        if (this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height)
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          pop();
        }
          
        }
        score(){
          if (this.Visiblity < 0 && this.Visiblity > -105){
            score+this.score;
          }
        }


      }
