//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {
    // Shortcut
    let s = game.sprites
    let v = game.variables

    // Check things to unlock
    this.unlockPhase()

    // Update each sprite
    s.click.cloneExecuteForEach('update')
    s.booster.cloneExecuteForEach('update')
    s.stock.cloneExecuteForEach('update')
    s.bonus.cloneExecuteForEach('update')

    s.cathedral.update()
    s.date.update()
    s.build.update()
    s.level.update()
    s.tuto.update()

    //////////// TO REMOVE ////////////////
//    v.unlockPhase = 8
//    v.goldStock = 2000
//   game.sprites.cathedral.buildStones(10)
//    v.stoneBuilt+=10
    ///////////////////////////////////////

    // Change offset and Cathedral position depending on number of built stones
    if (v.cathedralOffset == -1) {
        v.cathedralOffset = 110
        s.cathedral.changeOffSet(v.cathedralOffset)
    }
    if (v.cathedralOffset == 110 && v.stoneBuilt>=800) {
        v.cathedralOffset = 90
        s.cathedral.changeOffSet(v.cathedralOffset)
    }
    if (v.cathedralOffset == 90 && v.stoneBuilt>=5500) {
        v.cathedralOffset = 50
        s.cathedral.changeOffSet(v.cathedralOffset)
    }
    if (v.cathedralOffset == 50 && v.stoneBuilt>=16000) {
        v.cathedralOffset = 0
        s.cathedral.changeOffSet(v.cathedralOffset)
    }

}
