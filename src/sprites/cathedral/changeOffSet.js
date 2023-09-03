//////////////////////
// Change the z offset
// means that must rebuild all the canvas 
//////////////////////
game.sprites.cathedral.changeOffSet = function(offSet) {
    
    // Get the number of stones already built
    let builtStones = this.builtStones
    // Re-initialize system
    this.curStone = 0
    this.builtStones = 0
    // Change offset
    this.offSet = offSet
    // Clear canvas
    this.canvas.ctx.clearRect(0,0,this.width, this.height)
    // Re-built
    game.sprites.cathedral.buildStones(builtStones)
}
