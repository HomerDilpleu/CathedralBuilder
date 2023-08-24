// Game description
game = {
    // Structure of the game
    scenes: {
      boot : {},
      main : {}
    },
    engine3D:{},
    sprites:{
      cathedral: mge.game.createSprite(),
      click: mge.game.createSprite()
    },
    variables:{
      rockStock:0,
      stoneStock:0,
      stoneBuilt:0,
      stonesAvailable:0
    }
    
}

// Remove "Loading" div and start the game
window.addEventListener("load", (event) => {
    let loading = document.getElementById("loading")
    loading.remove()
    mge.game.width = 1280
    mge.game.height = 720
    mge.game.start(game.scenes.boot)
  }
)
