game.sprites.build.drawFunction = function (ctx) {
    // Shortcuts
    let dark = game.colors.dark
    let transparentGrey = game.colors.transparentGrey
    let v = game.variables

    // Draw button
    ctx.fillStyle=dark
    ctx.strokeStyle=dark
    ctx.lineWidth=4
    ctx.font = "30px serif"
    ctx.textAlign = "center"
    ctx.strokeRect(0,0,this.width,this.height)

    // Dispaly if there are enough stones and not in auto click mode
    if (v.stoneStock >= 1) {
        ctx.fillText('BUILD CATHEDRAL', this.width/2, this.height/2 + 7)
        if (performance.now() < v.buildAutoClickUntil) {
            ctx.fillStyle = transparentGrey
            ctx.fillRect(0,0,this.width,this.height)
       }
    } else {
        ctx.font = "25px serif"
        ctx.fillText("Cut some stones to build the cathedral", this.width/2, this.height/2 + 7)
        ctx.fillStyle = transparentGrey
        ctx.fillRect(0,0,this.width,this.height)
    }
}

/*
    // Dispaly if there are enough stones and not in auto click mode
    if (v.stoneStock >= 1 && performance.now() > v.buildAutoClickUntil) {
        ctx.fillText('BUILD CATHEDRAL', this.width/2, this.height/2 + 7)
    } else if (v.stoneStock >= 1) {
        ctx.fillText('BUILD CATHEDRAL', this.width/2, this.height/2 + 7)
        ctx.fillStyle = transparentGrey
        ctx.fillRect(0,0,this.width,this.height)
    }
    else {
        ctx.font = "25px serif"
        ctx.fillText("Cut some stones to build the cathedral", this.width/2, this.height/2 + 7)
        ctx.fillStyle = transparentGrey
        ctx.fillRect(0,0,this.width,this.height)
    }

    */
