game.sprites.click.init = function() {
    
    // Init sprit properties
    this.width = 180
    this.height = 80
    //this.drawBoundaries=true

    // Define additional properties
    this.id = ""
    this.text = ""
    this.startTime = performance.now()
    this.isStarted = false
    this.progress = 0

    // Create "rock" button
    let rockButton = this.cloneCreate()
    rockButton.id = "rockButton"
    rockButton.text = "DIG ROCK"
    rockButton.x = 212
    rockButton.y = 200

    // Create "stone" button
    let stoneButton = this.cloneCreate()
    stoneButton.id = "stoneButton"
    stoneButton.text = "CUT STONE"
    stoneButton.x = 212
    stoneButton.y = 300

    // Create "gold" button
    let goldButton = this.cloneCreate()
    goldButton.id = "goldButton"
    goldButton.text = "BEG GOLD"
    goldButton.x = 212
    goldButton.y = 400

}
