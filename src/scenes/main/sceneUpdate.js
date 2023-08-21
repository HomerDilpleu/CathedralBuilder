//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {
    
    // TO REMOVE: build stones
    game.sprites.cathedral.buildStones(10)

    if (game.sprites.cathedral.builtStones >= 3000 && game.sprites.cathedral.offSet == 100) {
        game.sprites.cathedral.changeOffSet(90)
    }

    if (game.sprites.cathedral.builtStones >= 6000 && game.sprites.cathedral.offSet == 90) {
        game.sprites.cathedral.changeOffSet(80)
    }

    if (game.sprites.cathedral.builtStones >= 10000 && game.sprites.cathedral.offSet == 80) {
        game.sprites.cathedral.changeOffSet(0)
    }

}
