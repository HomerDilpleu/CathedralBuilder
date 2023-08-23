//////////////////////
// Draw a stone 
//////////////////////
game.sprites.cathedral.drawStone = function(ctx, stone) {
    // Shortcuts
    let cube =  game.engine3D.cube
    let spriteHeight = this.height
    let stoneSize = this.stoneSize
    // Normal stone aspect
    cube.frontStyle = {lineWidth: 1, strokeStyle: '#876552', fillStyle: '#FFDDCA'}
    cube.topStyle = {lineWidth: 1, strokeStyle: '#876552', fillStyle: '#FFDDCA'}
    cube.bottomStyle = {lineWidth: 1, strokeStyle: '#411F0C', fillStyle: '#876552'}
    cube.leftStyle = {lineWidth: 1, strokeStyle: '876552', fillStyle: '#FFDDCA'}
    cube.rightStyle = {lineWidth: 1, strokeStyle: '#411F0C', fillStyle: '#876552'}
    // Ground stone aspect
    if (stone.type == 'g') {
        cube.frontStyle = {lineWidth: 1, strokeStyle: '#A39373', fillStyle: '#F3E3C3'}
        cube.topStyle = {lineWidth: 1, strokeStyle: '#A39373', fillStyle: '#F3E3C3'}
        cube.bottomStyle = {lineWidth: 1, strokeStyle: '#A39373', fillStyle: '#F3E3C3'}
        cube.leftStyle = {lineWidth: 1, strokeStyle: '#A39373', fillStyle: '#F3E3C3'}
        cube.rightStyle = {lineWidth: 1, strokeStyle: '#A39373', fillStyle: '#F3E3C3'}
    }
    // Roof stone aspect
    if (stone.type == 'r') {
        cube.frontStyle = {lineWidth: 1, strokeStyle: '#4E4E4E', fillStyle: '#808080'}
        cube.topStyle = {lineWidth: 1, strokeStyle: '#4E4E4E', fillStyle: '#808080'}
        cube.bottomStyle = {lineWidth: 1, strokeStyle: '#4E4E4E', fillStyle: '#808080'}
        cube.leftStyle = {lineWidth: 1, strokeStyle: '#4E4E4E', fillStyle: '#808080'}
        cube.rightStyle = {lineWidth: 1, strokeStyle: '#4E4E4E', fillStyle: '#808080'}
    }
    
    // Update stone aspect dependding on type
    //if (stone.type == 'wb') {
    //    cube.bottomStyle = {lineWidth: 1, strokeStyle: 'red', fillStyle: 'blue'}
    //}
    // Define stone size
    cube.size = {x:stoneSize.x, y:stoneSize.y, z:stoneSize.z}
    // Calculate stone coordinates
    let stoneCoordinates = {
        x: stone.x * cube.size.x,
        y: spriteHeight - stone.y * cube.size.y,
        z: stone.z * cube.size.z
    }
    cube.position = stoneCoordinates
    // Draw stons
    cube.draw(ctx)
}
