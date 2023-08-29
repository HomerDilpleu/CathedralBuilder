game.sprites.build.drawFunction = function (ctx) {
    // Shortcuts
    light = game.colors.light
    dark = game.colors.dark
    transparentGrey = game.colors.transparentGrey

    // Draw button
    ctx.fillStyle=dark
    ctx.strokeStyle=dark
    ctx.lineWidth=4
    ctx.font = "30px serif"
    ctx.textAlign = "center"
    //ctx.fillText('BUILD CATHEDRAL', this.width/2, this.height/2 + 5)
    ctx.strokeRect(0,0,this.width,this.height)

    // Dispaly if there are enough stones
    if (game.variables.stoneStock >= 1) {
        ctx.fillText('BUILD CATHEDRAL', this.width/2, this.height/2 + 7)
    } else {
        ctx.font = "25px serif"
        ctx.fillText("Cut some stones to build the cathedral", this.width/2, this.height/2 + 7)
        ctx.fillStyle = transparentGrey
        ctx.fillRect(0,0,this.width,this.height)
    }
}

