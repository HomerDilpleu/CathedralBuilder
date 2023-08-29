game.sprites.cathedral.drawFunction = function (ctx) {
    // Draw content of cathedral canvas
    ctx.drawImage(this.canvas.htmlRef, 0, 0)
    
    // Draw frame
    let dark = game.colors.dark
    ctx.strokeStyle=dark
    ctx.lineWidth=4
    ctx.strokeRect(0,0,this.width,this.height)

}
