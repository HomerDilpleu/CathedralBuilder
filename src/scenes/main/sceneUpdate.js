//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {

    // Updae click buttons
    game.sprites.click.cloneExecuteForEach('update')
    
    /*
    // TO REMOVE: build stones
    game.sprites.cathedral.buildStones(1)

    if (game.sprites.cathedral.builtStones >= 600 && game.sprites.cathedral.offSet == 110) {
        game.sprites.cathedral.changeOffSet(90)
    }

    if (game.sprites.cathedral.builtStones >= 6000 && game.sprites.cathedral.offSet == 90) {
        game.sprites.cathedral.changeOffSet(80)
    }

    if (game.sprites.cathedral.builtStones >= 10000 && game.sprites.cathedral.offSet == 80) {
        game.sprites.cathedral.changeOffSet(0)
    }
    */

}
