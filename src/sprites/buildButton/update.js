game.sprites.build.update = function (ctx) {
    // Shortcuts
    let id = this.id
    let v = game.variables
    let now = performance.now()

    // Check if is visible
    if(v.unlockPhase >= 3) {this.isVisible = true}

    // If click then 1s auto click
    if (this.isClicked) {v.buildAutoClickUntil = now+1000}

    // Check if auto click applies
    let autoClick = false
    if (now < v.buildAutoClickUntil) {autoClick = true}

    // Build if there are enough stones
    if (v.stoneStock >= 1 && autoClick && now > this.lastClick + 50) {
        game.sprites.cathedral.buildStones(1)
        game.variables.stoneStock-=1    
        game.variables.stoneBuilt+=1    
        this.lastClick = now
    }

}
