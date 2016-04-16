/**
水星 58.65日 87.7日
金星 243.01日（逆向） 224.70日
地球 0.9973日 365.2422日
火星 1.0260日 686.98日
木星 0.410日 4332.71日
土星 0.426日 10759.5日
天王星 0.646日 30685日
海王星 0.658日 60190日
八大行星是太阳系的八个行星，按照离太阳的距离从近到远，
它们依次为水星（☿）、金星（♀）、地球（⊕）、火星（♂）、木星（♃）、土星（♄）、天王星（♅）、海王星（♆）。
八大行星自转方向多数也和公转方向一致。只有金星和天王星两个例外。
金星自转方向与公转方向相反。而天王星是在轨道上横滚的。
而曾经被认为是“九大行星”之一的冥王星于2006年8月24日被定义为“矮行星”
 */

var SolarSystem = (function(){
    var gid = function(e){return document.getElementById(e)}

    /**
     * [Planet 行星]
     * @param {[type]} planetid   [行星名称 img#id]
     * @param {[type]} size       [行星尺寸]
     * @param {[type]} rotation   [信息自转周期]
     * @param {[type]} revolution [行星公转周期]
     * @param {[type]} direction  [行星自转方向]
     */
    function Planet(planetid,size,rotation,revolution,direction){
        this.image = gid(planetid)
        this.width = this.image.width
        this.height = this.image.height
        this.scale = size
        this.revolution = Math.random() * 2 * Math.PI
        this.revolution_speed = 365 / revolution / 100
        this.rotation = 0
        // 公转如果太多,好丑 - -
        this.rotation_speed = rotation  / 1000
        this.direction = direction || 1

    }

    Planet.prototype.$render = function(ctx,ind){
        var self = this,
            r = 100 + 80 * (1 + ind)
            
        ctx.beginPath();
        ctx.arc(0, 0,r,0,Math.PI*2,false)
        ctx.stroke();

        self.revolution += self.revolution_speed
        self.rotation += self.rotation_speed * this.direction
        ctx.save()
        ctx.translate(0,r)
        ctx.scale(self.scale,self.scale)
        ctx.rotate(self.rotation)
        ctx.drawImage(self.image, -self.width / 2 , -self.height / 2 )
        ctx.restore()
    }
    Planet.CENTER_X = 0
    Planet.CENTER_Y = 0


    function Solar(sun,planets,width,height){
        this.sun = sun
        this.width = width
        this.height = height

        this.planets = [
            new Planet('mercury',0.2,58.65,87.7),
            new Planet('venus',0.3,243.01,224.7,-1),
            new Planet('earth',0.35,0.9973,365.2422),
            new Planet('mars',0.4,1.026,686.98),
            new Planet('jupiter',0.7,0.410,4332.71),
            new Planet('saturn',0.6,0.426,10759.5),
            new Planet('uranus',0.55,0.646,30685),
            new Planet('neptune',0.55,0.658,60190)
        ];
        this.rotation = 0
        Planet.CENTER_X = width / 2
        Planet.CENTER_Y = width / 2
    }

    Solar.prototype.$render = function (ctx) {
        var w = this.width, h = this.height,
            sw = this.sun.width, sh = this.sun.height,
            planets = this.planets

        ctx.fillStyle = 'rgba(0,0,0,0.4)'
        ctx.strokeStyle = 'rgba(0,153,255,0.4)'

        ctx.translate(w / 2 , h / 2)

        ctx.drawImage(this.sun , -sw / 2, -sh / 2)

        for(var i = 0,_len = planets.length ; i < _len ; i++){
            var planet = planets[i]
            ctx.save()
            ctx.rotate(planet.revolution)
            planet.$render(ctx,i)
            ctx.restore()
        }
    }

    return Solar
})()
