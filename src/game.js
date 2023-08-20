// Game description
game = {
    // Structure of the game
    scenes: {
      boot : {},
      main : {}
    },
    engine3D:{},
    sprites:{
      cathedral: mge.game.createSprite()
    }
    
}

// Remove "Loading" div and start the game
window.addEventListener("load", (event) => {
    let loading = document.getElementById("loading")
    loading.remove()
    mge.game.width = 1280//1600//
    mge.game.height = 720//900//
    mge.game.start(game.scenes.boot)
  }
)
