game.sprites.level.update = function (ctx) {

    // Shortcuts
    let v = game.variables

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

