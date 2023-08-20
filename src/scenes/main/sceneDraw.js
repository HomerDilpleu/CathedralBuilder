//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {
    /////////// A ENLEVER ////////////
    // Cadre du jeu
    let ctx = mge._canvas._renderContext
    ctx.strokeStyle = 'black'
    ctx.strokeRect(0,0,mge.game.width, mge.game.height)

    //////////////////////////////////
    game.sprites.cathedral.draw()
}
