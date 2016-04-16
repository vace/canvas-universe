function MoonRender(el){
    this.image = el
    this.rotation = 0
    this.setCenter(0,0)
}
MoonRender.prototype.setCenter = function(x,y){
    this.centerX = x
    this.centerY = y
}
MoonRender.prototype.$render = function(ctx){
    var time = new Date();
    ctx.rotate( this.rotation += 0.01);
    // ctx.scale(1/4,1/4)
    ctx.translate(this.centerX,this.centerY);
    ctx.drawImage(this.image,0,0)
}
