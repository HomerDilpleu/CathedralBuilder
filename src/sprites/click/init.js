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
    rockButton.text = "DIG"
    rockButton.x = 213
    rockButton.y = 220

    // Create "stone" button
    let stoneButton = this.cloneCreate()
    stoneButton.id = "stoneButton"
    stoneButton.text = "CUT"
    stoneButton.x = 213
    stoneButton.y = 320

    // Create "gold" button
    let goldButton = this.cloneCreate()
    goldButton.id = "goldButton"
    goldButton.text = "BEG"
    goldButton.x = 213
    goldButton.y = 420

}
