// 地球自转 1d,月球公转27.32d,月球自转1圈

function SystemToTheMoon(earth,moon,width,height){
    this.earth = earth
    this.moon = moon
    this.width = width
    this.height = height
    this.rotation = 0
}

SystemToTheMoon.prototype.$render = function(ctx){
    var self = this
    var w = self.width, h = self.height,
        ew = self.earth.width, eh = self.earth.height,
        mw = self.moon.width, mh = self.moon.height,
        ro = this.rotation += 0.01

    // earth
    ctx.translate(self.width / 2,self.height / 2)
    ctx.rotate(ro)
    ctx.drawImage(self.earth, -ew / 2 , -eh / 2)
    // moon
    ctx.save()
    ctx.translate(0,0)
    ctx.rotate(ro)
    ctx.scale(0.4,0.4)
    ctx.drawImage(this.moon,w / 3,w / 3)
    ctx.restore()
}
