game.sprites.level.update = function (ctx) {

    // Shortcuts
    let v = game.variables

    // Check if is visible
    if (v.unlockPhase >= 10) {this.isVisible = true}

    // LEvel reached
    if(v.stoneBuilt >= v.levelGoal) {
        // Get reward
        v.goldStock += v.levelGoldReward
        // Update level
        v.level+=1
        v.levelGoal+=100
        v.levelGoldReward+=10
    }
}

