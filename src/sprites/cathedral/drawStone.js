//////////////////////
// Draw a stone at a given position
//////////////////////
game.sprites.cathedral.drawStone = function(ctx, position) {
    // Shortcuts
    let cube =  game.engine3D.cube
    let spriteHeight = this.height
    // Define stone aspect
    cube.frontStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    cube.topStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    cube.bottomStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    cube.leftStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    cube.rightStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    // Define stone size
    cube.size = {x:10, y:10, z:0.5}
    // Calculate stone coordinates
    stoneCoordinates = {
        x: position.x * cube.size.x,
        y: spriteHeight - position.y * cube.size.y,
        z: position.z * cube.size.z
    }
    cube.position = stoneCoordinates
    // Draw stons
    cube.draw(ctx)
}
