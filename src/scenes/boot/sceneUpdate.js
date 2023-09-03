//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {
    // Open main scene
    if (game.sprites.play.isClicked) {
        game.music.play()
        mge.game.changeScene(game.scenes.main)
    }
}
