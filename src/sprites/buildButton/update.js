game.sprites.build.update = function (ctx) {
    // Shortcuts
    let id = this.id
    let v = game.variables

    // Check if auto click applies
    let autoClick = false
    if (performance.now() < v.buildAutoClickUntil) {autoClick = true}

    // Disply if there are enough stones
    if (v.stoneStock >= 1 && (this.isClicked || (autoClick && performance.now() > this.lastClick + 100))) {
        game.sprites.cathedral.buildStones(1)
        game.variables.stoneStock-=1    
        game.variables.stoneBuilt+=1    
        this.lastClick = performance.now()
    }
 
}

