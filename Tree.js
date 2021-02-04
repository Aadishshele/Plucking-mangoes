class Tree{
    constructor(x,y,){
        var options = {
            isStatic : false,
            restituition : 0,
            density : 1.2
        }
        this.image = loadImage("Sprites/tree.png")
        this.x = x
        this.y = y
        
        this.tree = Bodies.rectangle(this.x,this.y,options)
        World.add(world,this.tree)
    }
    display(){
        push()
        //translate(this.tree.position.x,this.tree.position.y)
        imageMode(CENTER)
        image(this.image,650,450,400,400)
        pop()
    }
}