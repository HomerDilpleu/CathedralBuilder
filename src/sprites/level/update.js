game.sprites.level.update = function (ctx) {

    // Shortcuts
    let v = game.variables
    let bonus = game.sprites.bonus

    // Check if is visible
    if (v.unlockPhase >= 5) {this.isVisible = true}
    // Level reached
    if(v.stoneBuilt >= v.levelGoal) {
        // Get reward
        v.goldStock += v.levelGoldReward
        // Manage specific bonus and unlock phase
        if (v.level == 1) {
            bonus.create('stone',100)
        }
        // Increase cathedral build
        v.buildSpeed = Math.ceil(v.buildSpeed * 1.2)
        // Update level
        v.level+=1
        // Define new level goal and new reward
        v.levelGoal = Math.ceil(v.levelGoal*1.5/100)*100
        v.levelGoldReward = Math.ceil(v.levelGoldReward*1.1)
    }
}