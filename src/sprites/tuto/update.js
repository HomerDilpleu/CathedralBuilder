game.sprites.tuto.update = function (ctx) {
    // Shortcuts
    let v = game.variables
    //let now = performance.now()
    let isClicked = mge.mouse.isClicked
 
    // INTRODUCTION PART 1 (unlockPhase = 0)
    if (v.unlockPhase == 0) {
        if (isClicked) {v.unlockPhase = 0.1}
    } else
    // INTRODUCTION PART 2 (unlockPhase = 0.1)
    if (v.unlockPhase == 0.1) {
        if (isClicked) {v.unlockPhase = 1}
    } else
    // TUTO DIG ROCK (unlockPhase = 1)
    if (v.unlockPhase == 1) {
        if(v.rockStock >= 1) {v.unlockPhase = 2}
    } else
    // TUTO CUT STONE (unlockPhase = 2)
    if (v.unlockPhase == 2) {
        if(v.stoneStock >= 1) {v.unlockPhase = 3}
    } else
    // TUTO BUILD (unlockPhase = 3)
    if (v.unlockPhase == 3) {
        if(v.stoneBuilt >= 1) {v.unlockPhase = 4}
    } else
   // LET BUILD ONCE (unlockPhase = 4)
    if (v.unlockPhase == 4) {
        if(v.stoneBuilt >= 20) {
            v.unlockPhase = 5
            v.year = 1200
            v.month = 1
        }
    } else
   // UNLOCK THE GAME WITHOUT BOOSTERS (unlockPhase = 5)
   if (v.unlockPhase == 5) {
        if (isClicked) {this.isVisible = false}
    } 
    // UNLOCK GOLD AND UPGRADE (unlockPhase = 6)
    if (v.unlockPhase == 6) {
        this.isVisible = true
    } 
}

