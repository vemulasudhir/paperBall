class Bin{
    constructor(x,y,length,height){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)    
        World.add(world,this.body)
        this.width=width
        this.height=height
    }
display(){
    rectMode(CENTER)
    rectMode(this.body.position.x,this.body.position.y,this.width,this.height)
}




}



