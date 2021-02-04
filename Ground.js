class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restituition : 0,
            density : 1.2
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        
        this.Ground = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.Ground)

    }
    display(){
        push()
        translate(this.Ground.position.x,this.Ground.position.y)
        rectMode(CENTER)
        fill("orange")
        rect(0,0,this.width,this.height)
        pop()
    }
}