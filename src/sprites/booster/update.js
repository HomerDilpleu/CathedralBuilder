game.sprites.booster.update = function (ctx) {
    // Shortcuts
    let id = this.id
    let v = game.variables

    // Evaluate if button is enabled or disabled
    if (this.goldNeeded > v.goldStock) {
        this.disable = true
    } else {
        this.disable = false
    }

    // Apply booster if enough gold and is clicked
    if (!this.disable) {
        // Apply the roght booster
        if (id == 'upgradeRock' && this.isClicked) {v.rockSpeed = v.rockSpeed * 0.8}
        if (id == 'upgradeStone' && this.isClicked) {v.stoneSpeed = v.stoneSpeed * 0.8}
        if (id == 'upgradeGold' && this.isClicked) {v.goldSpeed = v.goldSpeed * 0.8}
        if (id == 'boosterRock' && this.isClicked) {v.rockAutoClickUntil = performance.now()+10000}
        if (id == 'boosterStone' && this.isClicked) {v.stoneAutoClickUntil = performance.now()+10000}
        if (id == 'boosterGold' && this.isClicked) {v.goldAutoClickUntil = performance.now()+10000}
        if (id == 'boosterBuild' && this.isClicked) {v.buildAutoClickUntil = performance.now()+10000}
        // and manage other variables updat
        if (this.isClicked) {
            v.goldStock-=this.goldNeeded
            this.goldNeeded=this.goldNeeded*2
        }
    }
}

