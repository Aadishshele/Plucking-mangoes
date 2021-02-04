class Launch {
    constructor(BodyA,pointB){
    var options = {
        bodyA : BodyA,
        pointB : pointB,
        length : 5,
        stiffness : 0.002
    }
    this.launch = Matter.Constraint.create(options)
    World.add(world,this.launch)

   }
   display(){
    //var pos = this.launch
    push()
    //translate(pos.x,pos.y)
    strokeWeight(3)
    stroke("blue")
    if(this.launch.bodyA){
    line(this.launch.bodyA.position.x,this.launch.bodyA.position.y,this.launch.pointB.x,this.launch.pointB.y)
    }
    pop()
    
   }

   fly(){
       this.launch.bodyA = null
   }
   attach(body){
       this.launch.bodyA=body
   }

}