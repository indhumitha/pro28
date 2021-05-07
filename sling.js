class Sling{
    constructor(a,b){
        var opt={
            bodyA:a,
            pointB:b,
            length:150,
            stiffness:0.4
        }

        this.string=Constraint.create(opt)
        World.add(world,this.string)
    }

    fly(){
    this.string.bodyA=null
    }

    display(){
        if (this.string.bodyA){
        var poss1=this.string.bodyA.position
        var poss2=this.string.pointB
        line(poss1.x,poss1.y,poss2.x,poss2.y)
        }
    }
}