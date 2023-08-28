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
    ctx.fillText(Math.floor(mge.game.fps),1200,20)
    // DEBUG
    ctx.fillText('Built: '.concat(game.variables.stoneBuilt),1200,30)

    //////////////////////////////////
    game.sprites.cathedral.draw()
    game.sprites.click.cloneExecuteForEach('draw')
    game.sprites.booster.cloneExecuteForEach('draw')
    game.sprites.stock.cloneExecuteForEach('draw')
    game.sprites.build.draw()
    
}
