game.sprites.build.update = function (ctx) {
        // Disply if there are enough stones
        if (game.variables.stoneStock >= 1 && this.isClicked) {
            game.sprites.cathedral.buildStones(1)
            game.variables.stoneStock-=1    
            game.variables.stoneBuilt+=1    
        }
  
}

