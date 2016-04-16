var MeteorsRender = (function(){
    function Meteor(width,height){
        this.width = width
        this.height = height
        this.reset()
    }
    Meteor.prototype.reset = function(){
        var halfX = this.width / 2,halfY = this.height / 2
        this.speed = _.random(10,20)
        this.scale = _.random(0.5,1)
        this.x = _.random(-this.width , this.width / 2)
        this.y = _.random(-this.height, -this.height / 3)
        // console.log(this)
    }

    Meteor.prototype.$render = function(ctx,scource){
        var width = scource.width,height = scource.height,scale = this.scale
        this.x += this.speed
        this.y += this.speed * 1.2
        if(this.x > this.width || this.y > this.height){
            this.reset()
        }
        ctx.drawImage(scource,0,0,width,height,this.x,this.y,scale * width,scale * height)
    }

    function Meteors(el,width,height){
        this.image = el
        this.width = width
        this.height = height
        this.number = Meteors.METEORS_NUMBER
        this.reset()
    }

    var mpt = Meteors.prototype
    mpt.reset = function(){
        this.meteors = []
        for(var i = 0; i < this.number ; i++){
            this.meteors.push( new Meteor(this.width,this.height) )
        }
    }
    mpt.$render = function(ctx){
        var meteors = this.meteors,scource = this.image
        for(var i = 0, _len = meteors.length; i < _len ; i++){
            meteors[i].$render(ctx,scource)
        }
    }

    /**
     * [METEORS_NUMBER 流星数量]
     * @type {Number}
     */
    Meteors.METEORS_NUMBER = 5

    return Meteors
})()
