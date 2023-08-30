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
    }
    // TUTO CUT STONE (unlockPhase = 2)
    if (v.unlockPhase == 2) {
        if(v.stoneStock >= 1) {v.unlockPhase = 3}
    }
    // TUTO BUILD (unlockPhase = 3)
    if (v.unlockPhase == 3) {
        if(v.stoneBuilt >= 1) {v.unlockPhase = 4}
    }
   // LET BUILD (unlockPhase = 4)
    if (v.unlockPhase == 4) {
        if(v.stoneBuilt >= 30) {v.unlockPhase = 5}
    }

}

