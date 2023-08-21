//////////////////////
// Draw a given number of new stones
// to the catedral canvas
//////////////////////
game.sprites.cathedral.buildStones = function(stonesNb) {
    // Shortcuts
    let curStone = this.curStone 
    let ctx = this.canvas.ctx
    let structure = this.structure
    // Get the real number of stone to build
    let realStonesNb = Math.min(stonesNb, structure.length - curStone)
    
    // Add new stones from structure
    for (let stoneNum = curStone; stoneNum < curStone + realStonesNb; stoneNum+=1) {
        let stone = this.structure[stoneNum]
        let offSetStone = {x:stone.x,y:stone.y,z:stone.z,type:stone.type} 
        // Take into account camera offset
        offSetStone.z -= this.offSet
        // Draw stone in cathedral canvas
        this.drawStone(ctx,offSetStone)
        // Update number of stone already built
        this.builtStones +=1
    }
    // Update curStone
    this.curStone += realStonesNb
}

