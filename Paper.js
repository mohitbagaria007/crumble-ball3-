class Paper {
    constructor(x,y,radius){  
     
    var options = { 
    isStatic:false,
    restitution:0.3, 
    friction : 0.5, 
    density : 1.2  
     } 
 this.image = loadImage("paper.png");
     this.body = Bodies.circle(x,y,radius,options)  
    this.radius = radius; 
    World.add(world,this.body); 

     


    } 
    display (){
        var pos = this.body.position
        var angle = this.body.angle 
        stroke(40,12,8); 
        push(); 
        translate(pos.x,pos.y) 
        rotate(angle); 
        imageMode(RADIUS); 
        image(this.image,0,0,this.radius,this.radius); 
        pop();
    }

}