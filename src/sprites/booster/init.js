game.sprites.booster.init = function() {
    
    // Init sprit properties
    this.width = 120
    this.height = 50
    this.drawBoundaries=true

    // Define additional properties
    this.id = ""
    this.text = ""
    this.goldNeeded = 1
    this.disable = false

    // Create "Upgrade rock" button
    let upgradeRock = this.cloneCreate()
    upgradeRock.id = "upgradeRock"
    upgradeRock.text = "Upgrade"
    upgradeRock.x = 350
    upgradeRock.y = 200

    // Create "Upgrade rock" button
    let upgradeStone = this.cloneCreate()
    upgradeStone.id = "upgradeStone"
    upgradeStone.text = "Upgrade"
    upgradeStone.x = 350
    upgradeStone.y = 300

    // Create "Upgrade gold" button
    let upgradeGold = this.cloneCreate()
    upgradeGold.id = "upgradeGold"
    upgradeGold.text = "Upgrade"
    upgradeGold.x = 350
    upgradeGold.y = 400
   

}
