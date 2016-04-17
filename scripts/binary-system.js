var BinarySystem = (function(){

    /** 1）双星的轨道半径之比m2:m1
    F = Gm1m2/L²=m1w²r1=m2w²r2
    所以r1：r2=m2:m1
    L是双星距离,所以m1轨道半径r1=Lm2/(m1+m2),r2=Lm1/(m1+m2)
    （2）双星的周期、角速度之比1:1
    两者转速相同
    m1w²r1=Gm1m2/L²
    算出w就是双星的角速度
    （3）双星的线速度之比
    v1=wr1
    v2=wr2
    v1：v2=r1:r2
    **/
    function Binary(width,height){
        this.width = width
        this.height = height
        this.sun1 = this.sun2 = document.getElementById('sun')
        this.sun1Rotation = 0
    }

    Binary.prototype.$render = function (ctx) {
        var sw = this.sun1.width,
            sh = this.sun2.height

        ctx.translate(this.width / 2,this.height / 2)

        ctx.save()
            ctx.translate(this.width / 2 - 2 * sw,0)
            ctx.rotate(this.sun1Rotation+=0.1)
            ctx.drawImage(this.sun1,-sw / 2,-sh / 2)
        ctx.restore()



        ctx.save()
            ctx.translate(this.width / 2 + 2 * sw,0)
            ctx.rotate(this.sun1Rotation+=0.1)
            ctx.drawImage(this.sun2,-sw / 2,-sh / 2)
        ctx.restore()


    }


    return Binary
})()
