game.sprites.booster.update = function (ctx) {
    // Shortcuts
    let id = this.id
    let v = game.variables
    let now = performance.now()

    // Evaluate if button is enabled or disabled
    if (this.goldNeeded > v.goldStock) {
        this.disable = true
    } else {
        if (id == 'boosterRock' && now < v.rockAutoClickUntil) {this.disable = true}
        else if (id == 'boosterStone' && now < v.stoneAutoClickUntil) {this.disable = true}
        else if (id == 'boosterGold' && now < v.goldAutoClickUntil) {this.disable = true}
        else {this.disable = false}
    }

    // Apply booster if enough gold and is clicked
    if (!this.disable && this.isClicked) {
        // Apply the right booster
        if (id == 'upgradeRock') {v.rockSpeed = v.rockSpeed * 0.8}
        if (id == 'upgradeStone') {v.stoneSpeed = v.stoneSpeed * 0.8}
        if (id == 'upgradeGold') {v.goldSpeed = v.goldSpeed * 0.8}
        if (id == 'boosterRock') {v.rockAutoClickUntil = now+10000}
        if (id == 'boosterStone') {v.stoneAutoClickUntil = now+10000}
        if (id == 'boosterGold') {v.goldAutoClickUntil = now+10000}
        // and manage other variables updat
        if (this.isClicked) {
            v.goldStock-=this.goldNeeded
            this.goldNeeded=this.goldNeeded*2
        }
    }
}

