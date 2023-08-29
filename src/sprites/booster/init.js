game.sprites.booster.init = function() {
    
    // Init sprit properties
    this.width = 120
    this.height = 40
    //this.drawBoundaries=true

    // Define additional properties
    this.id = ""
    this.text = ""
    this.goldNeeded = 1
    this.disable = false

    // Create "Upgrade rock" button
    let upgradeRock = this.cloneCreate()
    upgradeRock.id = "upgradeRock"
    upgradeRock.text = "UPGRADE"
    upgradeRock.x = 375
    upgradeRock.y = 199

    // Create "Upgrade rock" button
    let upgradeStone = this.cloneCreate()
    upgradeStone.id = "upgradeStone"
    upgradeStone.text = "UPGRADE"
    upgradeStone.x = 375
    upgradeStone.y = 299

    // Create "Upgrade gold" button
    let upgradeGold = this.cloneCreate()
    upgradeGold.id = "upgradeGold"
    upgradeGold.text = "UPGRADE"
    upgradeGold.x = 375
    upgradeGold.y = 399

    // Create "Booster rock" button
    let boosterRock = this.cloneCreate()
    boosterRock.id = "boosterRock"
    boosterRock.text = "AUTO CLICK"
    boosterRock.x = 375
    boosterRock.y = 245

    // Create "Booster stone" button
    let boosterStone = this.cloneCreate()
    boosterStone.id = "boosterStone"
    boosterStone.text = "Stone auto click 10s"
    boosterStone.x = 300
    boosterStone.y = 550

    // Create "Booster gold" button
    let boosterGold = this.cloneCreate()
    boosterGold.id = "boosterGold"
    boosterGold.text = "Gold auto click 10s"
    boosterGold.x = 100
    boosterGold.y = 650

    // Create "Booster build" button
    let boosterBuild = this.cloneCreate()
    boosterBuild.id = "boosterBuild"
    boosterBuild.text = "Build auto click 10s"
    boosterBuild.x = 300
    boosterBuild.y = 650

}
