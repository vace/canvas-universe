var ImageRender = (function(){
    function ImgRender(el,x,y,scale){
        this.image = el
        this.x = x || 0
        this.y = y || 0
        this.width = el.width
        this.height = el.height
        this.scale = scale || 1
        console.log(this)
    }
    ImgRender.prototype.$render = function(ctx){
        var w = this.width, h = this.height,scale = this.scale

        ctx.drawImage(this.image,0,0,w,h,this.x,this.y,w*scale,h * scale)
    }

    return ImgRender
})()
