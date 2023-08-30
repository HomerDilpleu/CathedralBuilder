game.sprites.tuto.drawFunction = function (ctx) {
    // Shortcuts
    let id = this.id
    let v = game.variables
    let light = game.colors.light
    let dark = game.colors.dark
    let now = performance.now()


    // Sytle
    ctx.fillStyle=dark
    ctx.strokeStyle=dark
    ctx.lineWidth=4
    ctx.font = "25px serif"

    if (v.unlockPhase == 0) {
        ctx.textAlign = "center"
        ctx.fillText('13th CENTURY', this.width/2, this.height/2)
        ctx.fillText('GOLDEN AGE OF CATHEDRALS', this.width/2, this.height/2+50)
    }

    if (v.unlockPhase == 0.1) {
        ctx.textAlign = "center"
        ctx.fillText('WILL YOU BE ABLE TO BUILD A CATHEDRAL', this.width/2, this.height/2)
        ctx.fillText('IN LESS THAN 100 YEARS?', this.width/2, this.height/2+50)
    }

    if (v.unlockPhase == 1) {
        ctx.textAlign = "left"
        ctx.fillText('FIRST YOU NEED TO DIG UP ROCK', -130, this.height/2 -15)
        ctx.fillText('👈🏻', -180, this.height/2 - 20)
    }

    if (v.unlockPhase == 2) {
        ctx.textAlign = "left"
        ctx.fillText('THEN YOU NEED TO CUT STONES', -130, this.height/2 + 105)
        ctx.fillText('👈🏻', -180, this.height/2 + 100)
    }

    if (v.unlockPhase == 3) {
        ctx.textAlign = "left"
        ctx.fillText('GREAT !!! YOU CAN NOW START BUILDNG', -130, this.height/2 -135)
        ctx.fillText('👈🏻', -180, this.height/2 - 140)
    }

}
