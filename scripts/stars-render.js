/**
 * [天空的星星]
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
var StarsRender = (function(){
    function Star(width,height){
        this.width = width
        this.height = height
        //是否为流星
        this.isMeteor = Math.random() < Star.IS_METEOR_PROBABILITY
        this.reset()
    }

    /**
     * [reset 初始化星星]
     */
    Star.prototype.reset = function () {
        this.x = _.random(0,this.width)
        this.y = _.random(0,this.height)
        //星星尺寸
        this.size = $$.random(1,3)
        //星星闪一闪透明度
        this.alpha = $$.random(0.1,1)
        //星星闪一闪方向
        this.direction = Math.random() < 0.5 ? 1 : -1

    }

    /**
     * [function 渲染单个星星]
     * @return {[type]} [description]
     */
    Star.prototype.$render = function(ctx){
        if(this.isMeteor){
            this.x += Star.METEOR_MOVE_SPEED
            this.y += Star.METEOR_MOVE_SPEED * 2
            // console.log(this.x)
            if(this.x > this.width || this.y > this.height){
                this.reset()
            }
        }
        this.alpha += Star.STAR_FLASH_SPEED * this.direction

        if(this.alpha > 1){
            this.direction = -1
        }else if(this.alpha < 0.1){
            this.direction = 1
        }


        ctx.beginPath()
        // ctx.arc(this.x,this.y,this.size,0,Math.PI * 2)
        // console.log(ctx)
        ctx.fillRect(this.x,this.y,this.size,this.size)
        ctx.fillStyle = 'rgba(255,255,255,'+this.alpha+')'
        ctx.fill()
    }

    /**
     * [IS_METEOR_PROBABILITY 星星为流星的概率]
     * @type {Number}
     */
    Star.IS_METEOR_PROBABILITY = 0.1
    /**
     * [METEOR_MOVE_SPEED 流星移动速度]
     * @type {Number}
     */
    Star.METEOR_MOVE_SPEED = 5
    /**
     * [STAR_FLASH_SPEED 星星闪动频率]
     * @type {Number}
     */
    Star.STAR_FLASH_SPEED = 0.02

    /**
     * [StarsRender 星星渲染类]
     * @param {[type]} number [星星数量]
     */
    function Stars(width,height){
        this.number = Math.ceil(Math.sqrt(width * height / 8))
        this.width = width
        this.height = height
        this.reset()
    }

    /**
     * [reset 渲染初始化]
     */
    Stars.prototype.reset = function () {
        this.stars = [],w = this.width,h = this.height
        for(var i = 0; i < this.number ; i ++){
            this.stars.push(new Star(w,h))
        }
    }

    /**
     * [function 星星渲染类]
     * @param  {[type]} ctx [画布上下文]
     * @return {[type]}     [description]
     */
    Stars.prototype.$render = function(ctx){
        var stars = this.stars
        for(var i = 0,_len = stars.length; i < _len ; i++){
            stars[i].$render(ctx)
        }
    }
    return Stars
})()
