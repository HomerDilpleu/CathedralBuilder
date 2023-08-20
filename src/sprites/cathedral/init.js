game.sprites.cathedral.init = function() {
    
    // Init sprit properties
    this.width = 830
    this.height = 630
    this.x = this.width / 2
    this.y = this.height / 2
    this.drawBoundaries=true

    // Define additional properties
    this.structure = []

    // Build Cathedral structure
    this.buildStructure()

}
