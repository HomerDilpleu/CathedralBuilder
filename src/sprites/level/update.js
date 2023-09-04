game.sprites.level.update = function (ctx) {

    // Shortcuts
    let v = game.variables
    let bonus = game.sprites.bonus

    // Check if is visible
    if (v.unlockPhase >= 5) {this.isVisible = true}

    // Levels management
    if (v.level == 1) {
        v.levelGoal = 50
        v.levelGoldReward = 0
    }
    if (v.level == 2) {
        v.levelGoal = 100
        v.levelGoldReward = 10
    }
    if (v.level == 3) {
        v.levelGoal = 300
        v.levelGoldReward = 0
    }

    // LEvel reached
    if(v.stoneBuilt >= v.levelGoal) {
        // Get reward
        v.goldStock += v.levelGoldReward
        // Manage specific bonus and unlock phase
        if (v.level == 1) {
            bonus.create('stone',100)
        }
        //if (v.level == 2) {
        //    v.unlockPhase = 6
        //}
        // Update level
        v.level+=1
    }
}