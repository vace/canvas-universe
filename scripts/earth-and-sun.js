function EarthAndSun(sun,earth,moon,width,height){
    this.sun = sun
    this.earth = earth
    this.moon = moon
    this.width = width
    this.height = height
    this.rotation = 0
}

EarthAndSun.prototype.$render = function (ctx) {
    var self = this
    var w = self.width, h = self.height,
        sw = self.sun.width,sh = self.sun.height,
        ew = self.earth.width, eh = self.earth.height,
        mw = self.moon.width, mh = self.moon.height,
        ro = this.rotation += 0.01

    // sun
    ctx.translate(w / 2,h / 2) //move to cener
    ctx.drawImage(self.sun, -sw / 2 , -sw / 2) //draw sun center
    // earth
    ctx.save()
    // ctx.translate(ew / 2,eh / 2)
    ctx.rotate(ro)
    ctx.scale(0.4,0.4)
    ctx.drawImage(this.earth,w / 2 - ew / 2,-eh / 2)

    //moon
    ctx.save()
    //以地球位置为中心
    ctx.translate(w / 2,0)
    ctx.scale(0.2,0.2)
    ctx.rotate(ro * 5)
    ctx.drawImage(this.moon,w / 2,w / 2)
    ctx.restore()

    ctx.restore()
};
