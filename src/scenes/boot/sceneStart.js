//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {
    game.sprites.cathedral.init()
    game.sprites.click.init()
    game.sprites.build.init()
    game.sprites.booster.init()
    game.sprites.stock.init()
    game.sprites.date.init()
    game.sprites.play.init()

    // Music
    game.music.createMusic()
    
}