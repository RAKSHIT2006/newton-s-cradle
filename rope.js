class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
       this.offsetX=offsetX
       this.okksetY=offsetY
       var option = {
           bodyA:body1,
           bodyB:body2,
           pointB:{x:this.offsetX,y:this.offsetY}
       }
    tis.rope=constraint.create(option)
    world.add(worl,this.rope)
    }
    }