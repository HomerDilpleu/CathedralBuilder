//////////////////////
// Update scene
//////////////////////
game.scenes.main.unlockPhase = function() {

    // Shortcuts
    let v = game.variables
    let isClicked = mge.mouse.isClicked
    let now = performance.now()

    // Manage unlockPhase
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
            v.unlockTime = now
        }
    } else
    // UNLOCK THE GAME WITHOUT BOOSTERS (unlockPhase = 5)
    if (v.unlockPhase == 5) {
        if (now - v.unlockTime > 5000) {v.unlockPhase = 5.1}
    } 
    if (v.unlockPhase == 5.1) {
        if(v.stoneBuilt >= 100) {v.unlockPhase = 6}
    } else
    // UNLOCK RESSOURCE BOOSTERS (unlockPhase = 6)
    if (v.unlockPhase == 6) {
        if(v.stoneBuilt >= 300) {v.unlockPhase = 7}
    } 
    // UNLOCK RESSOURCE ALL (unlockPhase = 6)
    if (v.unlockPhase == 7) {
        if(v.stoneBuilt >= 500) {v.unlockPhase = 8}
    } 
}
