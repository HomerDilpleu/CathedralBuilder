game.sprites.cathedral.init = function() {
    
    // Init sprit properties
    this.width = 830
    this.height = 630
    this.x = 865
    this.y = 390
    this.drawBoundaries=true

    // Define additional properties
    this.structure = []
    this.size = {
        x: 60,
        y: 60,
        z: 60
    }
    this.canvas= {ctx:{}, htmlRef: {}}
    this.curStone = 0
    this.builtStones = 0

    // Create the rendering canvas
    this.createCanvas()

    // Define Cathedral structure
    this.defineStructure()

}
