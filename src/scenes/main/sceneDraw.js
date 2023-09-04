//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {
    /////////// A ENLEVER ////////////
    // Cadre du jeu
    let ctx = mge._canvas._renderContext
    //ctx.strokeStyle = 'black'
    //ctx.strokeRect(0,0,mge.game.width, mge.game.height)
    // FPS
    ctx.fillText(Math.floor(mge.game.fps),1250,20)
    ctx.fillText(Math.floor(game.variables.unlockPhase),1250,30)
    ctx.fillText(Math.floor(game.variables.unlockTime),1250,40)
    ctx.fillText(Math.floor(performance.now()),1250,50)

    //////////////////////////////////
    game.sprites.cathedral.draw()
    game.sprites.click.cloneExecuteForEach('draw')
    game.sprites.booster.cloneExecuteForEach('draw')
    game.sprites.stock.cloneExecuteForEach('draw')
    game.sprites.bonus.cloneExecuteForEach('draw')
    game.sprites.date.draw()
    game.sprites.build.draw()
    game.sprites.level.draw()
    game.sprites.tuto.draw()
    
}
