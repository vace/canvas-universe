var MainRender = (function(){
    /**
     * [View canvas渲染]
     * @param {[type]} el     [canvas dom]
     * @param {[type]} width  [view width]
     * @param {[type]} height [view height]
     */
    function View(el,width,height){
        //pause
        this.pause = false

        this.canvas = el
        this.ctx = this.canvas.getContext('2d')
        this.width = el.width = width
        this.height = el.height = height
        this.renders = []
        this.reset()
    }

    var pt = View.prototype

    pt.reset = function(){}
    pt.add = function(obj){
        this.renders.push( obj )
        return this
    }
    pt.pause = function(pause){
        this.pause = pause || true
    }
    pt.$render = function(){
        if(!this.pause){
            this._render()
        }
        requestAnimationFrame(this.$render.bind(this))

    }
    pt._render = function(){
        var self = this,renders = self.renders,ctx = self.ctx,_len = renders.length,render
        ctx.clearRect(0,0,self.width,self.height)
        for(var i = 0; i < _len ; i++){
            render = renders[i]
            ctx.save()
            render.$render.call(render,ctx)
            ctx.restore()
        }
    }

    return View

})()
