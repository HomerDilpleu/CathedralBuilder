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

    // Create "Booster rock" button
    let boosterRock = this.cloneCreate()
    boosterRock.id = "boosterRock"
    boosterRock.text = "Rock auto click 10s"
    boosterRock.x = 100
    boosterRock.y = 550

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
