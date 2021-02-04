class Stone{
    constructor(x,y){
        var options = {
            isStatic : false,
            restituition : 0,
            density : 10
        }
        this.image = loadImage("Sprites/stone.png")
        this.x = x
        this.y = y
        this.stone = Bodies.rectangle(this.x,this.y,50,50,options)
        World.add(world,this.stone)
    }
    display(){
        push()
        //translate(this.stone.position.x,this.stone.position.y)
        imageMode(CENTER)
        image(this.image,this.stone.position.x,this.stone.position.y,50,50)
        pop()
        
    }
}