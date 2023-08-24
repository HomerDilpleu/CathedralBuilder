game.sprites.click.init = function() {
    
    // Init sprit properties
    this.width = 120
    this.height = 50
    this.drawBoundaries=true

    // Define additional properties
    this.id = ""
    this.text = ""
    this.speed = 1000
    this.startTime = performance.now()
    this.isStarted = false
    this.progress = 0
    this.buildCapacity = 9

    // Create "rock" button
    let rockButton = this.cloneCreate()
    rockButton.id = "rockButton"
    rockButton.text = "Dig rock"
    rockButton.x = 200
    rockButton.y = 200

    // Create "stone" button
    let stoneButton = this.cloneCreate()
    stoneButton.id = "stoneButton"
    stoneButton.text = "Cut stone"
    stoneButton.x = 200
    stoneButton.y = 300

    // Create "build" button
    let buildButton = this.cloneCreate()
    buildButton.id = "buildButton"
    buildButton.text = "Build !"
    buildButton.x = 200
    buildButton.y = 400

}
