//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {

    game.sprites.click.cloneExecuteForEach('update')
    game.sprites.booster.cloneExecuteForEach('update')
    game.sprites.stock.cloneExecuteForEach('update')

    game.sprites.cathedral.update()
    game.sprites.date.update()
    game.sprites.build.update()
    game.sprites.level.update()
    game.sprites.tuto.update()


    // TO REMOVE: build stones
    game.variables.unlockPhase = 10
    game.sprites.cathedral.buildStones(50)

    if (game.sprites.cathedral.builtStones >= 600 && game.sprites.cathedral.offSet == 110) {
        game.sprites.cathedral.changeOffSet(90)
    }

    if (game.sprites.cathedral.builtStones >= 3000 && game.sprites.cathedral.offSet == 90) {
        game.sprites.cathedral.changeOffSet(80)
    }

    if (game.sprites.cathedral.builtStones >= 5000 && game.sprites.cathedral.offSet == 80) {
        game.sprites.cathedral.changeOffSet(0)
    }

}
