class Basket {
    constructor (x,y,width,height) {
        var Options = {  
            isStatic: true, 
            restitution : 0.4, 
            friction : 0.6, 
            density : 1 
       }  
       this.image = loadImage("dustbingreen.png");
       this.body = Bodies.rectangle(x,y,width,height,Options) 
        this.width = width 
       this.height = height 
       World.add (world,this.body) 
     } 

     display(){ 
         var pos = this.body.position 
         var angle = this.body.angle  
         push(); 
         translate (pos.x,pos.y) 
         rotate (angle) 
         imageMode(CENTER) 
         image(this.image,0,0,this.width,this.height) 
         pop(); 
     }

}