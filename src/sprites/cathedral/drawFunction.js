game.sprites.cathedral.drawFunction = function (ctx) {
    // Draw content of cathedral canvas
    ctx.drawImage(this.canvas.htmlRef, 0, 0)
    
    ctx.fillText(Math.floor(mge.game.fps),800,20)

}
