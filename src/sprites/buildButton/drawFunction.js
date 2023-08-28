game.sprites.build.drawFunction = function (ctx) {
    // Disply if there are enough stones
    if (game.variables.stoneStock >= 1) {
        ctx.fillStyle='#57A773'
        ctx.font = "20px serif"
        ctx.textAlign = "center"
        ctx.fillText('BUILD CATHEDRAL', this.width/2, this.height/2 + 5)
    } else {
        ctx.fillStyle='grey'
        ctx.font = "20px serif"
        ctx.textAlign = "center"
        ctx.fillText("No stone !", this.width/2, this.height/2 + 5)
    
    }
  
}
