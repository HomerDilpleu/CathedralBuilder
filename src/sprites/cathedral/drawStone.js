//////////////////////
// Draw a stone 
//////////////////////
game.sprites.cathedral.drawStone = function(ctx, stone) {
    // Shortcuts
    let cube =  game.engine3D.cube
    let spriteHeight = this.height
    let stoneSize = this.stoneSize
    // Define stone aspect
    cube.frontStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    cube.topStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    cube.bottomStyle = {lineWidth: 1, strokeStyle: 'rgba(0, 0, 0, 0)', fillStyle: 'rgba(0, 0, 0, 0)'}
    cube.leftStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    cube.rightStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    // Update stone aspect dependding on type
    if (stone.type == 'bottom') {
        cube.bottomStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    }
    // Define stone size
    cube.size = {x:stoneSize.x, y:stoneSize.y, z:stoneSize.z}
    // Calculate stone coordinates
    stoneCoordinates = {
        x: stone.x * cube.size.x,
        y: spriteHeight - stone.y * cube.size.y,
        z: stone.z * cube.size.z
    }
    cube.position = stoneCoordinates
    // Draw stons
    cube.draw(ctx)
}
