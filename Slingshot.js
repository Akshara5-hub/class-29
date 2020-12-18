class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1= loadImage("sprites/sling1.png")
        this.sling2= loadImage("sprites/sling2.png")
        this.sling3= loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,190,67,30,150);
        image (this.sling2,170,60,30,100)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

if(pointA.x>50&&pointA.x<190){
    strokeWeight(8);
}
else{
    strokeWeight(4);
}
                //line(pointA.x, pointA.y, pointB.x, pointB.y);
            stroke("#381A0A")
            line(pointA.x-15,pointA.y,180,80)
            line(pointA.x+20,pointA.y,210,90)

        }
    }
    
}