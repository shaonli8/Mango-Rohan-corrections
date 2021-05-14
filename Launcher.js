class Launcher{
    constructor(body1,point2){
        var option = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 0.5
        }
        this.launcher = Constraint.create(option)
        this.pointB=point2
        World.add(world,this.launcher)  
    }
    fly(){
        this.launcher.bodyA=null
    }
    attach(body){
        this.launcher.bodyA=body
    }
    display(){
        if(this.launcher.bodyA){
            var p1=this.launcher.bodyA.position
            var p2 = this.pointB
            strokeWeight(3)
            line(p1.x,p1.y,p2.x,p2.y)
        }    
    }
}  