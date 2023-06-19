class Ground{
constructor(x,y,width,height, options){
var options = {
isStatic : true
}
 this.body = Bodies.rectangle(x,y,width,height, options);
World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    fill(255);
    rectMode(CENTER);
   // fill("");
    rect(pos.x, pos.y, this.width, this.height);
}

}