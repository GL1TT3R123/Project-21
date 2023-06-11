class Ground{
    constructor(x,y,w,h){

        let options= {
           isStatic:true
        };
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        World.add(world,this.body)
    }
    
    show(){
        var pos=this.body.position
        push()
        rectMode(CENTER)
        strokeWeight(2)
        stroke(2)
        fill("white")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}








