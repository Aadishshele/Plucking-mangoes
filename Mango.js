class Mango{
    constructor(x,y){
        var options = {
            isStatic : true,
            restituition : 0,
            density : 5
        }
        this.image = loadImage("Sprites/mango.png")
        this.x = x
        this.y = y
        this.mango = Bodies.rectangle(this.x,this.y,50,50,options)
        World.add(world,this.mango)
    }
    display(){
        push()
        //translate(this.stone.position.x,this.stone.position.y)
        imageMode(CENTER)
        image(this.image,this.mango.position.x,this.mango.position.y,50,50)
        pop()
        
    }
}