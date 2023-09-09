game.sprites.play.drawFunction = function (ctx) {

    // Shortcuts
    let light = game.colors.light
    let dark = game.colors.dark
    let w=this.width 
    let h=this.height 

    // Draw tittle
    ctx.fillStyle=dark
    ctx.font = "100px serif"
    ctx.textAlign = "center"
    ctx.fillText('CATHEDRAL', 70, -270)
    ctx.fillText('BUILDER', 70, -170)

    // Draw Cathedral
    ctx.drawImage(game.sprites.cathedral.canvas0.htmlRef, -610, -60)

    // Draw button
    ctx.fillStyle=dark
    ctx.fillRect(0,-90,w,h)
    ctx.font = "20px serif"
    ctx.textAlign = "center"
    ctx.fillStyle=light
    ctx.fillText('Play', w/2, h/2 + 5-90)

    // JS13K Reference
    ctx.fillStyle=dark
    ctx.font = "24px serif"
    ctx.textAlign = "center"
    ctx.fillText('A game created for JS13K 2023', 70, -120)
    
}
