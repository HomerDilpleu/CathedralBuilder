game.sprites.cathedral.init = function() {
    
    // Init sprit properties
    this.width = 830
    this.height = 630
    this.x = 860
    this.y = 395
    this.scaleX = 1
    this.scaleY = 1
    this.isVisible = false
    //this.drawBoundaries=true

    // Define additional properties
    // Size
    this.size = {x: 60, y: 60, z: 120}
    this.stoneSize = {x:10, y:10, z:0.25}
    // Structure and build progress
    this.structure = []
    this.curStone = 0
    this.builtStones = 0
    // Canvas
    this.canvas= {ctx:{}, htmlRef: {}}
    // Camera offset
    this.offSet = 110

    // Create the rendering canvas
    this.createCanvas()

    // Define Cathedral structure
    this.defineStructure()
}
