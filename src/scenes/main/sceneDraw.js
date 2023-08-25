//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {
    /////////// A ENLEVER ////////////
    // Cadre du jeu
    let ctx = mge._canvas._renderContext
    ctx.strokeStyle = 'black'
    ctx.strokeRect(0,0,mge.game.width, mge.game.height)
    // FPS
    ctx.fillText(Math.floor(mge.game.fps),10,20)
    // DEBUG
    ctx.fillText('Rocks: '.concat(game.variables.rockStock),1200,20)
    ctx.fillText('Stones: '.concat(game.variables.stoneStock),1200,30)
    ctx.fillText('Gold: '.concat(game.variables.goldStock),1200,40)
    ctx.fillText('Built: '.concat(game.variables.stoneBuilt),1200,50)

    //////////////////////////////////
    game.sprites.cathedral.draw()
    game.sprites.click.cloneExecuteForEach('draw')
    game.sprites.build.draw()
    
}
